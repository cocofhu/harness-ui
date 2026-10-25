import { expect, test } from "@playwright/test";

const firstAssistant = '[data-message-id$="-sample-assistant"]';

test("the visible chat demo plays thinking, tool state, streaming output and completion", async ({ page }) => {
  await page.goto("/#/");
  const demo = page.locator(".home-chat-canvas .chat-conversation-demo");
  await expect(demo).toHaveAttribute("data-demo-state", "playing");
  await expect(demo.locator(".message-user")).toHaveCount(1);
  await expect(demo.getByRole("status").filter({ hasText: "Thinking" })).toBeVisible();
  await expect(demo.locator('.tools-block[data-state="running"] > .tools-toggle')).toBeVisible();
  await expect(demo.getByRole("status").filter({ hasText: "Writing" })).toBeVisible();
  const output = demo.locator(firstAssistant).locator('[data-block-kind="message"] .conversation-prose').last();
  await expect(output).toBeVisible();
  const partial = await output.innerText();
  const outputStartedAt = Date.now();
  await expect.poll(() => demo.locator(firstAssistant).locator('[data-block-kind="message"] .conversation-prose').last().innerText()).not.toBe(partial);
  await expect(output).toContainText("Keep the body readable, then refine the space between headings and paragraphs.");
  expect(Date.now() - outputStartedAt).toBeLessThan(1800);
  await expect(demo).toHaveAttribute("data-demo-state", "complete", { timeout: 20_000 });
  await expect(demo.locator(".message-user")).toHaveCount(4);
  await expect(demo.locator(".message-assistant")).toHaveCount(3);
  await expect(demo.getByRole("status")).toHaveCount(0);
  await expect(demo.locator(firstAssistant).getByRole("button", { name: /Process/ })).toHaveAttribute("aria-expanded", "false");
  await expect(demo.getByText("Use three levels: headings, body text, and supporting details.", { exact: true })).toBeVisible();
});

test("replaying the chat demo retains real drafts, files, models and submitted messages", async ({ page }) => {
  await page.goto("/#/");
  const demo = page.locator(".home-chat-canvas .chat-conversation-demo");
  await expect(demo).toHaveAttribute("data-demo-state", "playing");
  const input = demo.getByRole("textbox", { name: "Message", exact: true });
  await input.fill("保留真实草稿和附件");
  await expect(demo).toHaveAttribute("data-demo-state", "stopped");
  await demo.getByLabel("Choose files", { exact: true }).setInputFiles({ name: "brief.txt", mimeType: "text/plain", buffer: Buffer.from("实际附件") });
  await demo.getByRole("button", { name: "Select model", exact: true }).click();
  await demo.getByRole("menuitemradio", { name: "GPT-5.4", exact: true }).click();
  await page.getByRole("button", { name: "Play chat demo", exact: true }).click();
  await expect(input).toHaveValue("保留真实草稿和附件");
  await expect(demo.locator(".pending-file")).toHaveCount(1);
  await expect(demo.getByRole("button", { name: "Select model", exact: true })).toContainText("GPT-5.4");
  await input.fill("这是我实际提交的消息");
  await input.press("Enter");
  await expect(demo.getByText("这是我实际提交的消息", { exact: true })).toBeVisible();
  await expect(demo.locator(".pending-file")).toHaveCount(0);
  const assistants = await demo.locator(".message-assistant").count();
  await page.waitForTimeout(6500);
  await expect(demo.getByText("这是我实际提交的消息", { exact: true })).toBeVisible();
  await expect(demo.locator(".message-assistant")).toHaveCount(assistants);
});

test("leaving the chat demo or hiding the page cancels playback and does not auto resume", async ({ page }) => {
  await page.goto("/#/");
  const demo = page.locator(".home-chat-canvas .chat-conversation-demo");
  await expect(demo).toHaveAttribute("data-demo-state", "playing");
  await page.locator(".site-footer").scrollIntoViewIfNeeded();
  await expect(demo).toHaveAttribute("data-demo-state", "stopped");
  await demo.scrollIntoViewIfNeeded();
  await expect(demo).toHaveAttribute("data-demo-state", "stopped");
  await page.getByRole("button", { name: "Play chat demo", exact: true }).click();
  await expect(demo).toHaveAttribute("data-demo-state", "playing");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { configurable: true, get: () => true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(demo).toHaveAttribute("data-demo-state", "stopped");
  await expect(demo.locator(".conversation-arrival-leave-active")).toHaveCount(0);
  const frozen = await demo.locator(".conversation-transcript").innerText();
  await page.waitForTimeout(1400);
  expect(await demo.locator(".conversation-transcript").innerText()).toBe(frozen);
  await page.evaluate(() => {
    delete (document as unknown as Record<string, unknown>).hidden;
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(demo).toHaveAttribute("data-demo-state", "stopped");
});

test("reading a tool during playback keeps the clicked details open and stops all busy effects", async ({ page }) => {
  await page.goto("/#/");
  const demo = page.locator(".home-chat-canvas .chat-conversation-demo");
  const group = demo.locator('.tools-block[data-state="running"] > .tools-toggle');
  await expect(group).toContainText("Read page styles");
  // Hit the moving preview at its current position; pointerdown freezes its camera.
  const bounds = await group.boundingBox();
  expect(bounds).not.toBeNull();
  await page.mouse.click(bounds!.x + bounds!.width / 2, bounds!.y + bounds!.height / 2);
  const tool = demo.locator("button.tool-row").filter({ hasText: "Read page styles" });
  await expect(tool).toBeVisible();
  await tool.click();
  await expect(demo).toHaveAttribute("data-demo-state", "stopped");
  await expect(tool).toHaveAttribute("aria-expanded", "true");
  await expect(demo.getByRole("button", { name: /Process/ })).toHaveAttribute("aria-expanded", "true");
  await expect(demo.locator(".tool-output")).toContainText("src/styles.css");
  await expect(demo.locator(".working-icon, .generation-status")).toHaveCount(0);
  const content = await demo.locator(".conversation-transcript").innerText();
  await page.waitForTimeout(1400);
  expect(await demo.locator(".conversation-transcript").innerText()).toBe(content);
});

test("the collection and detail previews can replay the same real chat component", async ({ page }) => {
  await page.goto("/#/components");
  const card = page.locator('[data-component="chat-conversation"]').first();
  const demo = card.locator(".chat-conversation-demo");
  await expect(demo).toHaveAttribute("data-demo-state", "playing");
  await expect(demo.locator(".chat-demo-play")).toBeVisible();
  await page.goto("/#/components/chat-conversation");
  const detailDemo = page.locator(".large-demo .chat-conversation-demo");
  await expect(detailDemo).toHaveAttribute("data-demo-state", "playing");
  await page.getByRole("tab", { name: "Source", exact: true }).click();
  await expect(detailDemo).toHaveAttribute("data-demo-state", "stopped");
  await page.getByRole("tab", { name: "Preview", exact: true }).click();
  await expect(detailDemo).toHaveAttribute("data-demo-state", "stopped");
  await detailDemo.locator(".chat-demo-play").click();
  await expect(detailDemo).toHaveAttribute("data-demo-state", "playing");
});

test("reduced motion shows the finished sample without running a playback script", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#/");
  const demo = page.locator(".home-chat-canvas .chat-conversation-demo");
  await expect(demo).toHaveAttribute("data-demo-state", "complete");
  await expect(demo.getByText("Use three levels: headings, body text, and supporting details.", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Play chat demo", exact: true }).click();
  await expect(demo).toHaveAttribute("data-demo-state", "complete");
  await expect(demo.locator(".generation-status, .working-icon")).toHaveCount(0);
  expect(await demo.evaluate(element => element.getAnimations({ subtree: true }).filter(animation => animation.playState === "running").length)).toBe(0);
});

test("pausing streamed output holds its position and resumes the same conversation without replaying", async ({ page }) => {
  await page.goto("/#/");
  const canvas = page.locator(".home-chat-canvas");
  const demo = canvas.locator(".chat-conversation-demo");
  await canvas.scrollIntoViewIfNeeded();
  await expect(demo).toHaveAttribute("data-demo-state", "playing");
  const output = demo.locator(firstAssistant).locator('[data-block-kind="message"] .conversation-prose').last();
  await expect(output).toBeVisible();
  await demo.evaluate(element => {
    Object.assign(window, {
      pausedDemoUser: element.querySelector(".message-user"),
      pausedDemoAssistant: element.querySelector(".message-assistant"),
    });
    // Output lasts 700ms. Pause in this same browser turn rather than spend that
    // interval on another actionability/scroll round trip under a busy test run.
    const pause = element.closest(".home-chat-canvas")?.querySelector<HTMLButtonElement>(".home-chat-pause");
    if (pause?.getAttribute("aria-label") !== "Pause chat demo") throw new Error("流式演示在暂停前已结束");
    pause.click();
  });
  await expect(demo).toHaveAttribute("data-demo-state", "paused");
  const pausedText = await output.innerText();
  expect(pausedText).not.toContain("then refine the space between headings and paragraphs.");
  await expect(canvas.getByRole("button", { name: "Resume chat demo", exact: true })).toBeVisible();
  expect(await demo.locator(".chat-conversation").evaluate(element => getComputedStyle(element).animationPlayState)).toBe("paused");
  await page.waitForTimeout(500);
  expect(await output.innerText()).toBe(pausedText);
  expect(await demo.evaluate(element => element.getAnimations({ subtree: true }).filter(animation => animation.playState === "running").length)).toBe(0);
  await expect(demo.locator(".message-user")).toHaveCount(1);
  await canvas.getByRole("button", { name: "Resume chat demo", exact: true }).click();
  await expect(demo).toHaveAttribute("data-demo-state", "playing");
  await expect.poll(() => output.innerText()).not.toBe(pausedText);
  await expect(demo).toHaveAttribute("data-demo-state", "complete", { timeout: 20_000 });
  const finalText = await output.innerText();
  expect(finalText.replace(/\s+/g, "")).toContain(pausedText.replace(/\s+/g, ""));
  await expect(output).toContainText("Keep the body readable, then refine the space between headings and paragraphs.");
  expect(await demo.evaluate(element => {
    const saved = window as unknown as { pausedDemoUser: Element; pausedDemoAssistant: Element };
    return element.querySelector(".message-user") === saved.pausedDemoUser
      && element.querySelector(".message-assistant") === saved.pausedDemoAssistant;
  })).toBe(true);
  await expect(demo.locator(".message-user")).toHaveCount(4);
  await expect(demo.locator(".message-assistant")).toHaveCount(3);
});

test("editing while paused explicitly takes over without losing the draft or resuming the preset", async ({ page }) => {
  await page.goto("/#/");
  const canvas = page.locator(".home-chat-canvas");
  const demo = canvas.locator(".chat-conversation-demo");
  await canvas.scrollIntoViewIfNeeded();
  await expect(demo.locator(".generation-status .thinking-lamp")).toBeVisible();
  await canvas.getByRole("button", { name: "Pause chat demo", exact: true }).click();
  await expect(demo).toHaveAttribute("data-demo-state", "paused");
  const lampAnimation = await demo.locator(".thinking-lamp-core").evaluate(async element => {
    const animation = element.getAnimations()[0];
    await animation?.ready;
    return { playState: animation?.playState, time: Number(animation?.currentTime ?? 0) };
  });
  expect(lampAnimation.playState).toBe("paused");
  await page.waitForTimeout(500);
  const frozenLampTime = await demo.locator(".thinking-lamp-core").evaluate(element => Number(element.getAnimations()[0]?.currentTime ?? 0));
  expect(Math.abs(frozenLampTime - lampAnimation.time)).toBeLessThan(1);
  const input = demo.getByRole("textbox", { name: "Message", exact: true });
  await input.fill("暂停后写下的真实草稿");
  await expect(demo).toHaveAttribute("data-demo-state", "stopped");
  await expect(canvas.getByRole("button", { name: "Resume chat demo", exact: true })).toHaveCount(0);
  const transcript = await demo.locator(".conversation-transcript").innerText();
  const assistants = await demo.locator(".message-assistant").count();
  await page.waitForTimeout(500);
  await expect(input).toHaveValue("暂停后写下的真实草稿");
  expect(await demo.locator(".conversation-transcript").innerText()).toBe(transcript);
  await expect(demo.locator(".message-assistant")).toHaveCount(assistants);
  await expect(demo).toHaveAttribute("data-demo-state", "stopped");
});
