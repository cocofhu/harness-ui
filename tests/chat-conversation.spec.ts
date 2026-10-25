import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

type ChatWindow = Window & {
  chatProps: Record<string, any>;
  chatEvents: { name: string; value?: any }[];
};
async function mount(page: Page, props: Record<string, unknown> = {}) {
  await page.route("**/__chat_harness__", route => route.fulfill({
    contentType: "text/html",
    body: '<!doctype html><html lang="zh-CN"><head><script type="module" src="/@vite/client"></script></head><body style="margin:0;padding:16px;font-family:Arial,sans-serif"><div id="chat"></div></body></html>',
  }));
  await page.goto("/__chat_harness__");
  await page.evaluate(async props => {
    const { createApp, h, reactive } = await import("/node_modules/.vite/deps/vue.js");
    const { default: ChatConversation } = await import("/src/components/ui/ChatConversation.vue");
    const state = reactive(props);
    const events: { name: string; value?: unknown }[] = [];
    Object.assign(window, { chatProps: state, chatEvents: events });
    createApp({ render: () => h(ChatConversation, {
      ...state,
      onSend: (value: { text: string; model: string; files: File[] }) => events.push({ name: "send", value: { ...value, files: value.files.map(file => ({ name: file.name, type: file.type, size: file.size })) } }),
      onStop: () => events.push({ name: "stop" }),
      "onUpdate:modelValue": (value: string) => events.push({ name: "draft", value }),
      "onUpdate:model": (value: string) => events.push({ name: "model", value }),
    }) }).mount("#chat");
  }, props);
}
async function update(page: Page, props: Record<string, unknown>) {
  await page.evaluate(props => Object.assign((window as ChatWindow).chatProps, props), props);
}
async function events(page: Page, name: string) {
  return page.evaluate(name => (window as ChatWindow).chatEvents.filter(event => event.name === name), name);
}

test("local conversation submits only the actual user message without generating a reply", async ({ page }) => {
  await mount(page);
  await expect(page.locator(".conversation-message")).toHaveCount(3);
  await expect(page.getByRole("button", { name: "Send message", exact: true })).toBeDisabled();
  await page.getByRole("textbox", { name: "Message", exact: true }).fill("  这是我的实际输入  ");
  await page.getByRole("textbox", { name: "Message", exact: true }).press("Enter");
  await expect(page.locator(".message-user").last()).toHaveText("这是我的实际输入");
  await expect(page.getByRole("textbox", { name: "Message", exact: true })).toHaveValue("");
  expect((await events(page, "send"))[0]?.value).toEqual({ text: "这是我的实际输入", model: "Claude Sonnet 4.6", files: [] });
  await page.waitForTimeout(500);
  await expect(page.locator(".message-assistant")).toHaveCount(1);
  await expect(page.getByText("Thinking…", { exact: true })).toHaveCount(0);
});

test("controlled messages and draft stay controlled, and stop remains a request to the host", async ({ page }) => {
  await mount(page, { messages: [], modelValue: "外部草稿", model: "外部模型", models: ["外部模型"] });
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  await expect(page.locator(".conversation-message")).toHaveCount(0);
  await expect(page.getByRole("textbox", { name: "Message", exact: true })).toHaveValue("外部草稿");
  expect((await events(page, "draft")).at(-1)?.value).toBe("");
  await update(page, { modelValue: "", busy: true, messages: [{ id: "user", role: "user", text: "外部草稿" }] });
  await expect(page.getByText("外部草稿", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Stop generating", exact: true }).click();
  expect(await events(page, "stop")).toHaveLength(1);
  await expect(page.getByRole("button", { name: "Stop generating", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Send message", exact: true })).toHaveCount(0);
  await update(page, { busy: false, disabled: true });
  await expect(page.getByRole("textbox", { name: "Message", exact: true })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Add attachments", exact: true })).toBeDisabled();
});

test("IME and multiline input do not send until an unmodified Enter", async ({ page }) => {
  await mount(page, { messages: [] });
  const input = page.getByRole("textbox", { name: "Message", exact: true });
  await input.fill("正在输入中文");
  await input.dispatchEvent("compositionstart");
  await input.press("Enter");
  expect(await events(page, "send")).toHaveLength(0);
  await input.dispatchEvent("compositionend");
  await input.press("Shift+Enter");
  expect(await events(page, "send")).toHaveLength(0);
  await input.press("Enter");
  expect(await events(page, "send")).toHaveLength(1);
});

test("attachments can be removed, previewed and submitted as real File objects", async ({ page }) => {
  await mount(page);
  const image = { name: "示意图.png", mimeType: "image/png", buffer: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aL1sAAAAASUVORK5CYII=", "base64") };
  const document = { name: "说明.md", mimeType: "text/markdown", buffer: Buffer.from("真实附件") };
  await page.getByLabel("Choose files", { exact: true }).setInputFiles([image, document]);
  await expect(page.locator(".pending-file")).toHaveCount(2);
  await page.getByRole("button", { name: "Remove 说明.md", exact: true }).click();
  await page.getByRole("button", { name: "Preview 示意图.png", exact: true }).click();
  await expect(page.getByRole("dialog", { name: "Image preview", exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Image preview", exact: true })).not.toBeVisible();
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  expect((await events(page, "send"))[0]?.value.files).toEqual([{ name: "示意图.png", type: "image/png", size: image.buffer.length }]);
  await expect(page.locator(".pending-file")).toHaveCount(0);
  await expect(page.locator(".message-user").last().getByRole("button", { name: "Preview 示意图.png", exact: true })).toBeVisible();
});

test("model menu supports keyboard, controlled selection, option removal and disabled state", async ({ page }) => {
  await mount(page, { model: "模型甲", models: ["模型甲", "模型乙"], messages: [] });
  const trigger = page.getByRole("button", { name: "Select model", exact: true });
  await trigger.focus();
  await trigger.press("ArrowDown");
  await expect(page.getByRole("menuitemradio", { name: "模型甲", exact: true })).toBeFocused();
  await page.keyboard.press("End");
  await page.keyboard.press("Enter");
  expect((await events(page, "model")).at(-1)?.value).toBe("模型乙");
  await expect(trigger).toContainText("模型甲");
  await expect(trigger).toBeFocused();
  await update(page, { model: "模型乙" });
  await expect(trigger).toContainText("模型乙");
  await trigger.click();
  await update(page, { models: ["模型甲"] });
  await expect(page.getByRole("menu")).toHaveCount(0);
  await expect(trigger).toContainText("Select model");
  await page.getByRole("textbox", { name: "Message", exact: true }).fill("草稿");
  await expect(page.getByRole("button", { name: "Send message", exact: true })).toBeDisabled();
  await update(page, { model: undefined });
  await expect(trigger).toContainText("模型甲");
  await expect(page.getByRole("button", { name: "Send message", exact: true })).toBeEnabled();
  await update(page, { disabled: true });
  await expect(trigger).toBeDisabled();
});

test("ordered process parts keep final prose visible and expose genuine tool failure output", async ({ page }) => {
  const parts = [
    { kind: "thought", id: "think", text: "先检查来源。" },
    { kind: "message", id: "progress", text: "已开始检查。" },
    { kind: "tool", id: "read", title: "读取文件", status: "success" },
    { kind: "tool", id: "preview", title: "打开预览", status: "failed", input: "http://localhost:3000", output: "服务未启动。" },
    { kind: "message", id: "final", text: "检查结果保留在这里。" },
  ];
  await mount(page, { messages: [{ id: "answer", role: "assistant", parts }] });
  await expect(page.getByText("检查结果保留在这里。", { exact: true })).toBeVisible();
  await expect(page.getByText("已开始检查。", { exact: true })).not.toBeVisible();
  await page.getByRole("button", { name: /Process/ }).click();
  await expect(page.getByText("已开始检查。", { exact: true })).toBeVisible();
  await expect(page.getByText("先检查来源。", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Thinking process", exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: /^2 tools used/ }).click();
  await expect(page.locator("div.tool-row")).toHaveText("读取文件Done");
  await expect(page.getByRole("button", { name: "打开预览 Failed", exact: true })).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText("服务未启动。", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: /Process/ }).click();
  await expect(page.getByText("服务未启动。", { exact: true })).not.toBeVisible();
  await expect(page.getByText("检查结果保留在这里。", { exact: true })).toBeVisible();
});

test("streaming follows only near the bottom and leaves a reader's scroll position alone", async ({ page }) => {
  const messages = Array.from({ length: 18 }, (_, index) => ({ id: String(index), role: index % 2 ? "assistant" : "user", text: `第 ${index + 1} 条消息。\n这是供回看的一段正文。` }));
  await mount(page, { messages });
  const rail = page.getByRole("region", { name: "Messages", exact: true });
  await expect.poll(() => rail.evaluate(element => element.scrollHeight - element.scrollTop - element.clientHeight)).toBeLessThan(2);
  await rail.evaluate(element => { element.scrollTop = 0; element.dispatchEvent(new Event("scroll")); });
  await expect(page.getByRole("button", { name: "Jump to latest message", exact: true })).toBeVisible();
  await update(page, { messages: [...messages, { id: "live", role: "assistant", text: "新的流式内容。", streaming: true }] });
  await expect(rail).toHaveJSProperty("scrollTop", 0);
  await page.getByRole("button", { name: "Jump to latest message", exact: true }).click();
  await expect.poll(() => rail.evaluate(element => element.scrollHeight - element.scrollTop - element.clientHeight)).toBeLessThan(2);
  await page.evaluate(() => { (window as ChatWindow).chatProps.messages.at(-1).text += "\n" + "继续输出。\n".repeat(10); });
  await expect.poll(() => rail.evaluate(element => element.scrollHeight - element.scrollTop - element.clientHeight)).toBeLessThan(2);
});

test("chat prose renders common formatting as safe nodes and stays readable on a phone", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mount(page, { messages: [{ id: "safe", role: "assistant", text: '**加粗正文**\n\n- 第一条\n- 第二条\n\n```html\n<img src=x onerror=alert(1)>\n```\n\n[危险](javascript:alert) [安全](https://example.com)\n\n<script>window.untrusted=true</script>' }] });
  await expect(page.locator(".conversation-prose strong")).toHaveText("加粗正文");
  await expect(page.locator(".conversation-prose li")).toHaveCount(2);
  await expect(page.locator(".conversation-prose pre code")).toContainText("<img");
  await expect(page.locator(".conversation-prose img, .conversation-prose script")).toHaveCount(0);
  await expect(page.locator(".conversation-prose a")).toHaveCount(1);
  await expect(page.getByRole("link", { name: "安全", exact: true })).toHaveAttribute("href", "https://example.com");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.locator(".conversation-prose")).toHaveCSS("font-size", "15px");
  const send = page.getByRole("button", { name: "Send message", exact: true });
  await page.getByRole("textbox", { name: "Message", exact: true }).fill("保持稳定");
  const before = await send.boundingBox();
  await send.hover();
  await page.waitForTimeout(80);
  expect(await send.boundingBox()).toEqual(before);
});

test("opening a long process keeps its reading anchor through animation and streaming updates", async ({ page }) => {
  const history = Array.from({ length: 8 }, (_, index) => ({ id: `history-${index}`, role: "user", text: `历史消息 ${index}\n${"可回看的正文。\n".repeat(5)}` }));
  const answer = { id: "answer", role: "assistant", parts: [
    { kind: "message", id: "earlier", text: "过程记录。\n".repeat(150) },
    { kind: "thought", id: "thought", text: "检查实际数据。" },
    { kind: "message", id: "final", text: "最终结果。" },
  ] };
  await mount(page, { messages: [...history, answer] });
  const rail = page.getByRole("region", { name: "Messages", exact: true });
  await expect.poll(() => rail.evaluate(element => element.scrollHeight - element.scrollTop - element.clientHeight)).toBeLessThan(2);
  const process = page.getByRole("button", { name: "Process", exact: true });
  const initial = { scroll: await rail.evaluate(element => element.scrollTop), top: (await process.boundingBox())!.y };
  await process.click();
  await page.waitForTimeout(350);
  expect(await rail.evaluate(element => element.scrollTop)).toBeCloseTo(initial.scroll, 0);
  expect((await process.boundingBox())!.y).toBeCloseTo(initial.top, 0);
  await page.evaluate(() => { (window as ChatWindow).chatProps.messages.at(-1).parts[0].text += "新增过程正文。\n".repeat(50); });
  await page.waitForTimeout(100);
  expect(await rail.evaluate(element => element.scrollTop)).toBeCloseTo(initial.scroll, 0);
  await expect(page.getByRole("button", { name: "Jump to latest message", exact: true })).toBeVisible();
  // A genuine native wheel scroll may opt back into following at the bottom.
  await rail.hover();
  await page.mouse.wheel(0, 100000);
  await expect.poll(() => rail.evaluate(element => element.scrollHeight - element.scrollTop - element.clientHeight)).toBeLessThan(2);
  await page.evaluate(() => { (window as ChatWindow).chatProps.messages.at(-1).parts.at(-1).text += "\n继续输出。\n".repeat(10); });
  await expect.poll(() => rail.evaluate(element => element.scrollHeight - element.scrollTop - element.clientHeight)).toBeLessThan(2);
});

test("a long model menu scrolls focused options into its own visible bounds", async ({ page }) => {
  const models = Array.from({ length: 40 }, (_, index) => `模型 ${index + 1}`);
  await mount(page, { models, model: "模型 40" });
  await page.getByRole("button", { name: "Select model", exact: true }).click();
  const menu = page.getByRole("menu", { name: "Available models", exact: true });
  const last = page.getByRole("menuitemradio", { name: "模型 40", exact: true });
  await expect(last).toBeFocused();
  const withinMenu = async () => {
    const container = (await menu.boundingBox())!;
    const option = (await page.locator('[role="menuitemradio"]:focus').boundingBox())!;
    return option.y >= container.y && option.y + option.height <= container.y + container.height;
  };
  expect((await menu.boundingBox())!.height).toBeLessThanOrEqual(240);
  expect(await withinMenu()).toBe(true);
  await page.keyboard.press("Home");
  await expect(page.getByRole("menuitemradio", { name: "模型 1", exact: true })).toBeFocused();
  expect(await withinMenu()).toBe(true);
  await page.keyboard.press("End");
  expect(await withinMenu()).toBe(true);
  await page.keyboard.press("Enter");
  expect((await events(page, "model")).at(-1)?.value).toBe("模型 40");
});

test("many attachments and a long draft preserve usable messages and send controls on a phone", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mount(page, { style: { "--chat-height": "360px" } });
  await page.getByLabel("Choose files", { exact: true }).setInputFiles(Array.from({ length: 24 }, (_, index) => ({ name: `较长的说明文档-${index + 1}.txt`, mimeType: "text/plain", buffer: Buffer.from(`附件 ${index}`) })));
  await page.getByRole("textbox", { name: "Message", exact: true }).fill("多行草稿。\n".repeat(30));
  const bounds = await page.locator(".chat-conversation").evaluate(element => {
    const root = element.getBoundingClientRect();
    const pending = element.querySelector<HTMLElement>(".pending-attachments")!;
    const send = element.querySelector<HTMLElement>(".send-action")!.getBoundingClientRect();
    return { rootBottom: root.bottom, pendingHeight: pending.clientHeight, pendingOverflow: pending.scrollHeight > pending.clientHeight, railHeight: element.querySelector<HTMLElement>(".conversation-scroller")!.clientHeight, sendBottom: send.bottom };
  });
  expect(bounds.pendingHeight).toBeGreaterThan(0);
  expect(bounds.pendingHeight).toBeLessThanOrEqual(120);
  expect(bounds.pendingOverflow).toBe(true);
  expect(bounds.railHeight).toBeGreaterThanOrEqual(98);
  expect(bounds.sendBottom).toBeLessThan(bounds.rootBottom);
  await page.getByRole("button", { name: "Remove 较长的说明文档-24.txt", exact: true }).click();
  await expect(page.locator(".pending-file")).toHaveCount(23);
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  expect((await events(page, "send"))[0]?.value.files).toHaveLength(23);
  await expect(page.locator(".message-user").last().locator(".message-file")).toHaveCount(23);
});

test("external attachments accept safe relative URLs while rejecting executable URL protocols", async ({ page }) => {
  await page.route("**/api/example.png", route => route.fulfill({ contentType: "image/png", body: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aL1sAAAAASUVORK5CYII=", "base64") }));
  await mount(page, { messages: [{ id: "files", role: "user", attachments: [
    { name: "图片.png", mimeType: "image/png", url: "/api/example.png" },
    { name: "说明.txt", mimeType: "text/plain", url: "/api/example.txt" },
    { name: "无效地址", mimeType: "image/png", url: "javascript:alert(1)" },
  ] }] });
  await expect(page.getByRole("link", { name: "说明.txt", exact: true })).toHaveAttribute("href", "/api/example.txt");
  await expect(page.getByRole("link", { name: "无效地址", exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: "Preview 图片.png", exact: true }).click();
  await expect(page.getByRole("dialog", { name: "Image preview", exact: true }).getByRole("img", { name: "图片.png", exact: true })).toHaveAttribute("src", "/api/example.png");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Preview 图片.png", exact: true })).toBeFocused();
});
