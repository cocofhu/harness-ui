import { expect, test, type Locator, type Page } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 1000 } });

async function openWorkspace(page: Page) {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  const start = new Date("2026-01-01T00:00:00Z");
  await page.clock.install({ time: start });
  await page.clock.pauseAt(new Date(start.getTime() + 1000));
  await page.goto("/#/");
  const canvas = page.locator(".home-chat-canvas");
  await canvas.scrollIntoViewIfNeeded();
  await expect(canvas).toHaveAttribute("data-playback", "playing");
  return { canvas, camera: canvas.locator(".home-chat-camera"), preview: canvas.locator(".home-workspace-preview"), demo: canvas.locator(".chat-conversation-demo") };
}

async function advanceTo(page: Page, camera: Locator, time: number) {
  const elapsed = Number(await camera.getAttribute("data-camera-time"));
  await page.clock.runFor(Math.max(0, time - elapsed) + 20);
}

const openAction = (demo: Locator) => demo.getByRole("button", { name: "Open preview", exact: true });
const filterTab = (preview: Locator, label: string) => preview.getByRole("tab", { name: new RegExp(`^${label}`) });
const historyHeading = (preview: Locator) => preview.locator('[data-group-id="history"] > .task-group-heading');

test("the longer conversation opens its demo on the right in one shared workspace and exercises its filters and folds", async ({ page }) => {
  const { canvas, camera, preview, demo } = await openWorkspace(page);
  await advanceTo(page, camera, 11100);
  await expect(openAction(demo)).toBeVisible();
  await expect(canvas).not.toHaveClass(/has-preview/);
  await expect(demo.getByText("Build a task panel with filters and collapsible groups.", { exact: true })).toBeVisible();
  await advanceTo(page, camera, 13200);
  await expect(canvas).toHaveClass(/has-preview/);
  await expect(canvas).toHaveAttribute("data-shot", "preview");
  await expect(preview).toBeVisible();
  const left = (await canvas.locator(".home-chat-window").boundingBox())!;
  const right = (await preview.boundingBox())!;
  expect(left.x).toBeLessThan(right.x);
  expect(left.x + left.width).toBeCloseTo(right.x, 0);
  expect(left.y).toBeCloseTo(right.y, 0);
  expect(left.height).toBeCloseTo(right.height, 0);
  const skins = await canvas.evaluate(element => [".home-chat-window", ".home-workspace-preview"].map(selector => {
    const style = getComputedStyle(element.querySelector(selector)!);
    const colors = style.boxShadow.match(/rgba?\([^)]+\)/g) ?? [];
    return {
      radius: style.borderRadius,
      transparentShadow: style.boxShadow === "none" || colors.length > 0 && colors.every(color => /^rgba\([^,]+,[^,]+,[^,]+,\s*0(?:\.0+)?\)$/.test(color)),
    };
  }));
  expect(skins).toEqual([{ radius: "0px", transparentShadow: true }, { radius: "0px", transparentShadow: true }]);
  await expect(canvas.locator(".home-chat-window")).toHaveCSS("width", "440px");
  await expect(filterTab(preview, "All")).toHaveAttribute("aria-selected", "true");

  await advanceTo(page, camera, 14900);
  await expect(filterTab(preview, "Running")).toHaveAttribute("aria-selected", "true");
  await expect(preview.locator(".task-nav-row")).toHaveCount(2);
  await advanceTo(page, camera, 16200);
  await expect(filterTab(preview, "All")).toHaveAttribute("aria-selected", "true");
  await expect(preview.locator(".task-nav-row")).toHaveCount(6);
  await advanceTo(page, camera, 17200);
  await expect(historyHeading(preview)).toHaveAttribute("aria-expanded", "false");
  await expect(historyHeading(preview)).toBeInViewport();
  await advanceTo(page, camera, 18200);
  await expect(historyHeading(preview)).toHaveAttribute("aria-expanded", "true");
  await expect(historyHeading(preview)).toBeInViewport();
  await advanceTo(page, camera, 19200);
  await expect(filterTab(preview, "Needs input")).toHaveAttribute("aria-selected", "true");
  await expect(preview.locator(".task-nav-row")).toHaveCount(1);
  await advanceTo(page, camera, 22100);
  await expect(canvas).toHaveAttribute("data-playback", "complete");
  await expect(demo.locator(".message-user")).toHaveCount(4);
  await expect(demo.locator(".message-assistant")).toHaveCount(3);
});

test("opening the message action early, closing and reopening preserves the real preview and restores focus", async ({ page }) => {
  const { canvas, camera, preview, demo } = await openWorkspace(page);
  await advanceTo(page, camera, 11100);
  await openAction(demo).click();
  await page.clock.resume();
  await expect(canvas).toHaveAttribute("data-playback", "stopped");
  await expect(preview).toBeVisible();
  await preview.evaluate(element => { (window as unknown as Record<string, Element>).savedWorkspace = element.querySelector(".workspace-demo-preview")!; });
  await filterTab(preview, "Running").click();
  await expect(filterTab(preview, "Running")).toHaveAttribute("aria-selected", "true");
  await preview.getByRole("button", { name: "Close preview", exact: true }).click();
  await expect(preview).toBeHidden();
  await expect(openAction(demo)).toBeFocused();
  await openAction(demo).press("Enter");
  await expect(preview).toBeVisible();
  await expect(filterTab(preview, "Running")).toHaveAttribute("aria-selected", "true");
  expect(await preview.evaluate(element => element.querySelector(".workspace-demo-preview") === (window as unknown as Record<string, Element>).savedWorkspace)).toBe(true);
});

test("pausing while the workspace opens freezes its real widths and layers and resumes the same opening", async ({ page }) => {
  const { canvas, camera } = await openWorkspace(page);
  await advanceTo(page, camera, 12400);
  const openingPose = () => canvas.evaluate(element => [".home-chat-window", ".home-workspace-preview"].map(selector => {
    const node = element.querySelector(selector)!;
    const style = getComputedStyle(node);
    const rect = node.getBoundingClientRect();
    return { width: style.width, marginRight: style.marginRight, opacity: style.opacity, transform: style.transform, visibility: style.visibility, x: rect.x, y: rect.y };
  }));
  await canvas.getByRole("button", { name: "Pause chat demo", exact: true }).click();
  await expect(canvas).toHaveAttribute("data-playback", "paused");
  const time = await camera.getAttribute("data-camera-time");
  const held = await openingPose();
  await page.clock.runFor(1600);
  expect(await openingPose()).toEqual(held);
  await expect(camera).toHaveAttribute("data-camera-time", time!);
  await canvas.getByRole("button", { name: "Resume chat demo", exact: true }).click();
  await page.clock.runFor(1000);
  await expect(canvas).toHaveAttribute("data-playback", "playing");
  await expect(canvas.locator(".home-chat-window")).toHaveCSS("width", "440px");
  await expect(canvas.locator(".home-workspace-preview")).toHaveCSS("opacity", "1");
});

test("a real preview interaction takes over and replay preserves a real draft and attachment", async ({ page }) => {
  const { canvas, camera, preview, demo } = await openWorkspace(page);
  await advanceTo(page, camera, 13200);
  await filterTab(preview, "Completed").click();
  await expect(canvas).toHaveAttribute("data-playback", "stopped");
  const transcript = await demo.locator(".conversation-transcript").innerText();
  await page.clock.runFor(10000);
  await expect(filterTab(preview, "Completed")).toHaveAttribute("aria-selected", "true");
  expect(await demo.locator(".conversation-transcript").innerText()).toBe(transcript);
  await preview.getByRole("button", { name: "Close preview", exact: true }).click();
  await page.clock.resume();
  await expect(preview).toBeHidden();
  const input = demo.getByRole("textbox", { name: "Message", exact: true });
  await input.fill("打开预览后保留的真实草稿");
  await demo.getByLabel("Choose files", { exact: true }).setInputFiles({ name: "brief.txt", mimeType: "text/plain", buffer: Buffer.from("真实附件") });
  await canvas.getByRole("button", { name: "Play chat demo", exact: true }).click();
  await expect(canvas).toHaveAttribute("data-playback", "playing");
  await expect(input).toHaveValue("打开预览后保留的真实草稿");
  await expect(demo.locator(".pending-file")).toHaveCount(1);
});

for (const width of [320, 390]) {
  test(`on a phone the preview covers the chat without horizontal overflow and returns to the conversation (${width}px)`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    const { canvas, camera, preview, demo } = await openWorkspace(page);
    await advanceTo(page, camera, 13200);
    await expect(preview).toBeVisible();
    await expect(canvas.locator(".home-chat-window")).toBeHidden();
    const bounds = (await preview.boundingBox())!;
    expect(bounds.x).toBeGreaterThanOrEqual(0);
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);

    if (width === 320) {
      const tabs = preview.getByRole("tab");
      await expect(tabs).toHaveCount(4);
      for (const label of ["All", "Running", "Needs input", "Completed"]) {
        await expect(filterTab(preview, label)).toBeVisible();
      }
      const labels = await tabs.evaluateAll(buttons => buttons.map(button => {
        const label = button.querySelector("span:not(.sliding-tab-count)")!;
        const range = document.createRange();
        range.selectNodeContents(label);
        const text = range.getBoundingClientRect();
        const control = button.getBoundingClientRect();
        return {
          text: { left: text.left, right: text.right, top: text.top, bottom: text.bottom },
          control: { left: control.left, right: control.right, top: control.top, bottom: control.bottom },
        };
      }));
      for (const { text, control } of labels) {
        expect(text.right - text.left).toBeGreaterThan(0);
        expect(text.left).toBeGreaterThanOrEqual(control.left - .5);
        expect(text.right).toBeLessThanOrEqual(control.right + .5);
        expect(text.top).toBeGreaterThanOrEqual(control.top - .5);
        expect(text.bottom).toBeLessThanOrEqual(control.bottom + .5);
      }
      for (let index = 0; index < labels.length; index++) {
        for (const other of labels.slice(index + 1)) {
          const text = labels[index]!.text;
          const overlapX = Math.min(text.right, other.text.right) - Math.max(text.left, other.text.left);
          const overlapY = Math.min(text.bottom, other.text.bottom) - Math.max(text.top, other.text.top);
          expect(overlapX <= .5 || overlapY <= .5).toBe(true);
        }
      }
      await filterTab(preview, "Running").click();
      await expect(filterTab(preview, "Running")).toHaveAttribute("aria-selected", "true");
      await expect(preview.locator(".task-nav-row")).toHaveCount(2);
    }

    await preview.getByRole("button", { name: "Back to chat", exact: true }).click();
    await page.clock.resume();
    await expect(preview).toBeHidden();
    await expect(canvas.locator(".home-chat-window")).toBeVisible();
    await expect(canvas).toHaveAttribute("data-playback", "stopped");
    await expect(openAction(demo)).toBeFocused();
  });
}

test("generic message actions emit only their IDs, support the keyboard and respect disabled state", async ({ page }) => {
  await page.route("**/__message_actions__", route => route.fulfill({ contentType: "text/html", body: '<!doctype html><html lang="zh-CN"><head><script type="module" src="/@vite/client"></script></head><body><div id="chat"></div></body></html>' }));
  await page.goto("/__message_actions__");
  await page.evaluate(async () => {
    const { createApp, h, reactive } = await import("/node_modules/.vite/deps/vue.js");
    const { default: ChatConversation } = await import("/src/components/ui/ChatConversation.vue");
    const props = reactive({ modelValue: "保留草稿", disabled: false, messages: [{ id: "result", role: "assistant", text: "实际结果。", actions: [{ id: "open", label: "打开成果" }, { id: "blocked", label: "暂不可用", disabled: true }] }] });
    const events: unknown[] = [];
    Object.assign(window, { actionProps: props, actionEvents: events });
    createApp({ render: () => h(ChatConversation, { ...props, onMessageAction: (value: unknown) => events.push(value) }) }).mount("#chat");
  });
  const action = page.getByRole("button", { name: "打开成果", exact: true });
  await action.focus();
  await action.press("Enter");
  await action.press("Space");
  expect(await page.evaluate(() => (window as unknown as { actionEvents: unknown[] }).actionEvents)).toEqual([{ messageId: "result", actionId: "open" }, { messageId: "result", actionId: "open" }]);
  await expect(page.getByRole("textbox", { name: "Message", exact: true })).toHaveValue("保留草稿");
  const blocked = page.getByRole("button", { name: "暂不可用", exact: true });
  await expect(blocked).toBeDisabled();
  await blocked.dispatchEvent("click");
  await page.evaluate(() => { (window as unknown as { actionProps: { disabled: boolean } }).actionProps.disabled = true; });
  await expect(action).toBeDisabled();
  await action.dispatchEvent("click");
  expect(await page.evaluate(() => (window as unknown as { actionEvents: unknown[] }).actionEvents)).toHaveLength(2);
});
