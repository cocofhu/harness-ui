import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

type MotionWindow = Window & {
  motionProps: Record<string, any>;
  savedMessage?: Element | null;
  savedResponse?: Element | null;
  savedBubble?: Element | null;
  savedArrival?: Animation;
};
async function mount(page: Page, messages: Record<string, unknown>[], appendSent = false) {
  await page.route("**/__chat_motion__", route => route.fulfill({
    contentType: "text/html",
    body: '<!doctype html><html lang="zh-CN"><head><script type="module" src="/@vite/client"></script></head><body style="margin:0;padding:16px;font-family:Arial,sans-serif"><div id="chat"></div></body></html>',
  }));
  await page.goto("/__chat_motion__");
  await page.evaluate(async ({ messages, appendSent }) => {
    const { createApp, h, reactive } = await import("/node_modules/.vite/deps/vue.js");
    const { default: ChatConversation } = await import("/src/components/ui/ChatConversation.vue");
    const props = reactive({ messages });
    (window as MotionWindow).motionProps = props;
    let sent = 0;
    createApp({ render: () => h(ChatConversation, { ...props, onSend: (message: { text: string }) => {
      if (appendSent) props.messages.push({ id: `sent-user-${++sent}`, role: "user", text: message.text });
    } }) }).mount("#chat");
  }, { messages, appendSent });
}

async function sendAndHoldArrival(page: Page, text: string) {
  await page.getByRole("textbox", { name: "Message", exact: true }).fill(text);
  return page.evaluate(async () => {
    const { nextTick } = await import("/node_modules/.vite/deps/vue.js");
    // Send and capture in one browser turn so the 360ms arrival cannot finish
    // during an actionability or RPC round trip on a busy test worker.
    document.querySelector<HTMLButtonElement>(".send-action")!.click();
    await nextTick();
    await nextTick();
    const message = [...document.querySelectorAll<HTMLElement>(".message-user")].at(-1)!;
    const bubble = message.querySelector<HTMLElement>(".user-bubble")!;
    const animation = bubble.getAnimations().find(value => value.id === "message-send-arrival");
    if (!animation) throw new Error("实际发送的新气泡没有入场动画");
    animation.pause();
    animation.currentTime = 0;
    await animation.ready;
    Object.assign(window, { savedMessage: message, savedBubble: bubble, savedArrival: animation });
    const style = getComputedStyle(bubble);
    return {
      id: animation.id, duration: animation.effect?.getTiming().duration,
      opacity: style.opacity,
      y: new DOMMatrixReadOnly(style.transform === "none" ? undefined : style.transform).m42,
      frameTransform: getComputedStyle(message).transform,
    };
  });
}

test("an actual send animates only its new bubble, settles the same DOM and never replays on streaming updates", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await mount(page, [{ id: "assistant", role: "assistant", text: "已有的助手正文。" }], true);
  const start = await sendAndHoldArrival(page, "这是实际发送的新消息。");
  expect(start).toEqual({ id: "message-send-arrival", duration: 360, opacity: "0", y: 18, frameTransform: "none" });
  expect(await page.locator('[data-message-id="assistant"]').evaluate(element => element.getAnimations().length)).toBe(0);
  const settled = await page.evaluate(async () => {
    const saved = window as MotionWindow;
    saved.savedArrival!.play();
    await saved.savedArrival!.finished;
    const bubble = document.querySelector('[data-message-id="sent-user-1"] .user-bubble')!;
    return {
      sameBubble: bubble === saved.savedBubble,
      sameMessage: bubble.closest(".message-user") === saved.savedMessage,
      opacity: getComputedStyle(bubble).opacity, transform: getComputedStyle(bubble).transform,
    };
  });
  expect(settled).toEqual({ sameBubble: true, sameMessage: true, opacity: "1", transform: "none" });
  await page.evaluate(async () => {
    const { nextTick } = await import("/node_modules/.vite/deps/vue.js");
    const message = (window as MotionWindow).motionProps.messages[0];
    message.streaming = true;
    for (const text of ["开始输出", "继续输出", "输出完成"]) { message.text = text; await nextTick(); }
    message.streaming = false;
    await nextTick();
  });
  expect(await page.locator('[data-message-id="sent-user-1"] .user-bubble').evaluate(element =>
    element === (window as MotionWindow).savedBubble && !element.getAnimations().some(animation => animation.id === "message-send-arrival"),
  )).toBe(true);
  expect(await page.locator('[data-message-id="assistant"]').evaluate(element => getComputedStyle(element).transform)).toBe("none");
});

test("actual sends stay still with reduced motion and active arrivals cancel when preference or visibility changes", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await mount(page, [], true);
  const input = page.getByRole("textbox", { name: "Message", exact: true });
  await input.fill("减少动态效果时发送。");
  await input.press("Enter");
  const bubble = page.locator('[data-message-id="sent-user-1"] .user-bubble');
  await expect(bubble).toBeVisible();
  await expect(bubble).toHaveCSS("transform", "none");
  await expect(bubble).toHaveCSS("opacity", "1");
  expect(await bubble.evaluate(element => element.getAnimations().filter(animation => animation.id === "message-send-arrival").length)).toBe(0);

  await page.emulateMedia({ reducedMotion: "no-preference" });
  await sendAndHoldArrival(page, "切换偏好会取消这一条入场。");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => page.evaluate(() => (window as MotionWindow).savedArrival!.playState)).toBe("idle");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await sendAndHoldArrival(page, "切到后台会取消这一条入场。");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { configurable: true, get: () => true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect.poll(() => page.evaluate(() => (window as MotionWindow).savedArrival!.playState)).toBe("idle");
  expect(await page.locator(".chat-conversation").evaluate(element => element.getAnimations({ subtree: true }).filter(animation => animation.id === "message-send-arrival").length)).toBe(0);
});

test("a native home send keeps its bubble arrival running after the camera releases the interaction", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/#/");
  const canvas = page.locator(".home-chat-canvas");
  await canvas.getByRole("textbox", { name: "Message", exact: true }).fill("首页真实点击发送的消息。");
  await page.evaluate(async () => {
    const { nextTick } = await import("/node_modules/.vite/deps/vue.js");
    const probe: Record<string, unknown> = {};
    (window as unknown as { homeSendProbe: Record<string, unknown> }).homeSendProbe = probe;
    const capture = async (event: Event) => {
      if (!(event.target instanceof Element) || !event.target.closest(".home-chat-canvas .send-action")) return;
      document.removeEventListener("click", capture, true);
      // Native dispatch may flush microtasks between capture and the target's
      // send handler. Wait for that dispatch and the ensuing Vue update.
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      await nextTick();
      const messages = document.querySelectorAll(".home-chat-canvas .message-user");
      const message = messages[messages.length - 1];
      const bubble = message?.querySelector(".user-bubble");
      const animation = bubble?.getAnimations().find(value => value.id === "message-send-arrival");
      if (!animation) { probe.error = "首页真实发送未创建气泡入场动画"; return; }
      const started = performance.now();
      probe.id = animation.id;
      probe.duration = animation.effect?.getTiming().duration;
      animation.finished.then(() => { probe.finishedAfter = performance.now() - started; }).catch(() => { probe.cancelled = true; });
      setTimeout(() => {
        probe.after100 = {
          state: animation.playState, time: Number(animation.currentTime),
          sameBubble: bubble === message.querySelector(".user-bubble"),
          frameTransform: getComputedStyle(message).transform,
        };
      }, 100);
    };
    document.addEventListener("click", capture, true);
  });
  await canvas.getByRole("button", { name: "Send message", exact: true }).click();
  await expect.poll(() => page.evaluate(() => (window as unknown as { homeSendProbe: Record<string, unknown> }).homeSendProbe.after100)).toBeTruthy();
  const probe = await page.evaluate(() => (window as unknown as { homeSendProbe: { id: string; duration: number; error?: string; after100: { state: string; time: number; sameBubble: boolean; frameTransform: string } } }).homeSendProbe);
  expect(probe.error).toBeUndefined();
  expect(probe.id).toBe("message-send-arrival");
  expect(probe.duration).toBe(360);
  expect(probe.after100.state).toBe("running");
  expect(probe.after100.time).toBeGreaterThan(40);
  expect(probe.after100.time).toBeLessThan(300);
  expect(probe.after100.sameBubble).toBe(true);
  expect(probe.after100.frameTransform).toBe("none");
  await expect.poll(() => page.evaluate(() => (window as unknown as { homeSendProbe: Record<string, unknown> }).homeSendProbe.finishedAfter)).toBeTruthy();
  const finished = await page.evaluate(() => (window as unknown as { homeSendProbe: { finishedAfter: number; cancelled?: boolean } }).homeSendProbe);
  expect(finished.finishedAfter).toBeGreaterThan(280);
  expect(finished.cancelled).not.toBe(true);
});

test("new messages and streaming tokens retain the source conversation's stable frames", async ({ page }) => {
  await mount(page, [{ id: "user", role: "user", text: "开始检查。" }]);
  await page.evaluate(() => (window as MotionWindow).motionProps.messages.push({ id: "assistant", role: "assistant", text: "第一段", streaming: true }));
  const message = page.locator('[data-message-id="assistant"]');
  await expect(message).toBeVisible();
  expect(await message.evaluate(element => getComputedStyle(element).transform)).toBe("none");
  await page.evaluate(() => {
    (window as MotionWindow).savedMessage = document.querySelector('[data-message-id="assistant"]');
    (window as MotionWindow).motionProps.messages[1].text += "，接着补充正文。";
  });
  await expect(message.locator(".conversation-prose")).toContainText("接着补充正文");
  expect(await message.evaluate(element => element === (window as MotionWindow).savedMessage)).toBe(true);
  expect(await message.evaluate(element => element.getAnimations().length)).toBe(0);
  await expect(page.locator(".stream-caret")).toHaveCount(0);
});

test("the source thinking lamp animates internally and the output tail remains plain text", async ({ page }) => {
  await mount(page, [{ id: "answer", role: "assistant", streaming: true, parts: [
    { kind: "thought", id: "thinking", text: "检查来源。" },
  ] }]);
  const lamp = page.locator(".generation-status .thinking-lamp");
  await expect(lamp).toBeVisible();
  const before = await lamp.boundingBox();
  await page.waitForTimeout(100);
  expect(await lamp.boundingBox()).toEqual(before);
  expect(await lamp.evaluate(element => getComputedStyle(element).transform)).toBe("none");
  expect(await lamp.locator(".thinking-lamp-core").evaluate(element => element.getAnimations().length)).toBeGreaterThan(0);
  await page.evaluate(() => {
    (window as MotionWindow).motionProps.messages[0].parts.push({ kind: "message", id: "current", text: "正在输出的正文。" });
  });
  await expect(page.getByRole("status")).toHaveText("Writing");
  await expect(page.locator(".generation-status svg, .generation-status .thinking-lamp, .stream-caret")).toHaveCount(0);
});

test("settling continuously collapses process while preserving the final response DOM", async ({ page }) => {
  await mount(page, [{ id: "answer", role: "assistant", streaming: true, parts: [
    { kind: "thought", id: "thought", text: "逐项检查。\n".repeat(8) },
    { kind: "tool", id: "read", title: "读取文件", status: "success", output: "已读取。" },
    { kind: "message", id: "final", text: "最终正文持续保留。" },
  ] }]);
  const thought = page.locator('.message-block[data-block-kind="thought"]');
  await page.getByRole("button", { name: "Thinking process", exact: true }).click();
  await expect(page.getByText("逐项检查。", { exact: false })).toBeVisible();
  await expect.poll(() => thought.evaluate(element => element.getBoundingClientRect().height)).toBeGreaterThan(100);
  await page.waitForTimeout(300);
  const initial = await thought.evaluate(element => element.getBoundingClientRect().height);
  await page.evaluate(async () => {
    const { nextTick } = await import("/node_modules/.vite/deps/vue.js");
    (window as MotionWindow).savedResponse = document.querySelector('.message-block[data-block-kind="message"] .conversation-prose');
    (window as MotionWindow).motionProps.messages[0].streaming = false;
    await nextTick();
  });
  await page.waitForTimeout(70);
  const middle = await thought.evaluate(element => element.getBoundingClientRect().height);
  expect(middle).toBeGreaterThan(0);
  expect(middle).toBeLessThan(initial);
  await expect(thought).not.toBeVisible();
  await expect(page.locator(".stream-caret")).toHaveCount(0);
  expect(await page.locator(".completed-response .conversation-prose").evaluate(element => element === (window as MotionWindow).savedResponse)).toBe(true);
  await expect(page.getByText("最终正文持续保留。", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Process", exact: true }).click();
  await expect(thought).toBeVisible();
});

test("a closed thought does not grow when settling replaces its summary with plain text", async ({ page }) => {
  await mount(page, [{ id: "answer", role: "assistant", streaming: true, parts: [
    { kind: "thought", id: "thought", text: "完整过程记录。\n".repeat(20) },
    { kind: "message", id: "final", text: "最终正文。" },
  ] }]);
  await expect(page.getByRole("button", { name: "Thinking process", exact: true })).toHaveAttribute("aria-expanded", "false");
  const samples = await page.evaluate(async () => {
    const shell = document.querySelector('.message-block[data-block-kind="thought"]')!;
    const initial = shell.getBoundingClientRect().height;
    (window as MotionWindow).motionProps.messages[0].streaming = false;
    const heights: number[] = [];
    for (let index = 0; index < 20; index++) {
      await new Promise(requestAnimationFrame);
      heights.push(shell.getBoundingClientRect().height);
    }
    return { initial, heights };
  });
  expect(Math.max(...samples.heights)).toBeLessThanOrEqual(samples.initial + .5);
  await expect(page.locator('.message-block[data-block-kind="thought"]')).not.toBeVisible();
  await expect(page.getByText("最终正文。", { exact: true })).toBeVisible();
});

test("reduced motion keeps arrival, output and completion still and fully usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await mount(page, []);
  await page.evaluate(() => (window as MotionWindow).motionProps.messages.push({ id: "answer", role: "assistant", streaming: true, parts: [
    { kind: "thought", id: "thought", text: "检查内容。" },
    { kind: "message", id: "final", text: "实际输出。" },
  ] }));
  await expect(page.getByText("实际输出。", { exact: true })).toBeVisible();
  await page.waitForTimeout(20);
  await expect(page.locator(".stream-caret")).toHaveCount(0);
  expect(await page.locator(".conversation-message").evaluate(element => getComputedStyle(element).transform)).toBe("none");
  await page.evaluate(() => { (window as MotionWindow).motionProps.messages[0].streaming = false; });
  await expect(page.locator('.message-block[data-block-kind="thought"]')).not.toBeVisible();
  await page.getByRole("button", { name: "Process", exact: true }).click();
  await expect(page.getByText("检查内容。", { exact: true })).toBeVisible();
});

test("interrupting for reading keeps the newly opened tool output visible and respects explicit folds", async ({ page }) => {
  await mount(page, [{ id: "answer", role: "assistant", streaming: true, parts: [
    { kind: "thought", id: "thought", text: "确认来源内容。" },
    { kind: "tool", id: "read", title: "读取文件", status: "running", input: "src/styles.css", output: "正在读取的真实记录。" },
  ] }]);
  await page.getByRole("button", { name: /^1 tool used/ }).click();
  await page.getByRole("button", { name: "读取文件 Running", exact: true }).click();
  await expect(page.getByText("正在读取的真实记录。", { exact: true })).toBeVisible();
  await page.evaluate(() => {
    const message = (window as MotionWindow).motionProps.messages[0];
    message.streaming = false;
    message.interrupted = true;
    message.parts[1].status = "success";
  });
  await expect(page.getByRole("button", { name: /Process/ })).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("button", { name: /^1 tool used/ })).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText("正在读取的真实记录。", { exact: true })).toBeVisible();
  await expect(page.getByText("确认来源内容。", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: /Process/ }).click();
  await expect(page.getByText("正在读取的真实记录。", { exact: true })).not.toBeVisible();
  await page.evaluate(() => { (window as MotionWindow).motionProps.messages[0].parts[1].output += " 后续记录。"; });
  await expect(page.getByRole("button", { name: /Process/ })).toHaveAttribute("aria-expanded", "false");
});
