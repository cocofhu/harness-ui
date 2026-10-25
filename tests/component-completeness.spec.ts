import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

type HarnessWindow = Window & {
  componentProps: Record<string, any>;
  componentEvents: { name: string; args: any[] }[];
  unmountComponent: () => void;
};
async function mount(page: Page, name: string, props: Record<string, unknown> = {}) {
  await page.route("**/__component_harness__", route => route.fulfill({
    contentType: "text/html",
    body: '<!doctype html><html lang="zh-CN"><head><script type="module" src="/@vite/client"></script></head><body style="margin:0;padding:16px;font-family:Arial,sans-serif"><div id="component"></div></body></html>',
  }));
  await page.goto("/__component_harness__");
  await page.evaluate(async ({ name, props }) => {
    const { createApp, h, reactive } = await import("/node_modules/.vite/deps/vue.js");
    const { default: Component } = await import(`/src/components/ui/${name}.vue`);
    const state = reactive(props);
    const events: { name: string; args: unknown[] }[] = [];
    const record = (event: string) => (...args: unknown[]) => events.push({ name: event, args: JSON.parse(JSON.stringify(args)) });
    const app = createApp({ render: () => h(Component, {
      ...state,
      "onUpdate:modelValue": record("model"),
      "onUpdate:answers": record("answers"),
      "onUpdate:expanded": record("expanded"),
      onChange: record("change"), onSelect: record("select"), onCreate: record("create"),
      onSubmit: record("submit"), onReset: record("reset"), onToggle: record("toggle"),
      "onTool-toggle": record("tool-toggle"), onActivate: record("activate"),
    }) });
    Object.assign(window, { componentProps: state, componentEvents: events, unmountComponent: () => app.unmount() });
    app.mount("#component");
  }, { name, props });
}
async function setProps(page: Page, values: Record<string, unknown>) {
  await page.evaluate(values => Object.assign((window as HarnessWindow).componentProps, values), values);
}
async function events(page: Page, name: string) {
  return page.evaluate(name => (window as HarnessWindow).componentEvents.filter(event => event.name === name), name);
}

const tabs = [
  { value: "a", label: "全部" },
  { value: "b", label: "暂停", disabled: true },
  { value: "c", label: "已完成" },
];

test("sliding tabs skip disabled options, wrap with keys and recover when data changes", async ({ page }) => {
  await mount(page, "SlidingTabs", { items: tabs });
  const first = page.getByRole("tab", { name: "全部", exact: true });
  const last = page.getByRole("tab", { name: "已完成", exact: true });
  await expect(first).toHaveAttribute("aria-selected", "true");
  await first.focus();
  await first.press("ArrowRight");
  await expect(last).toBeFocused();
  await expect(last).toHaveAttribute("aria-selected", "true");
  await last.press("ArrowRight");
  await expect(first).toBeFocused();
  await expect(page.getByRole("tab", { name: "暂停", exact: true })).toBeDisabled();
  await setProps(page, { items: [{ value: "c", label: "已完成", count: 12 }] });
  await expect(page.getByRole("tab")).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tab")).toHaveAttribute("tabindex", "0");
  await expect.poll(async () => {
    const selected = await page.getByRole("tab").boundingBox();
    const indicator = await page.locator(".sliding-tabs-indicator").boundingBox();
    return Boolean(selected && indicator && Math.abs(selected.width - indicator.width) < 1);
  }).toBe(true);
  await setProps(page, { items: [] });
  await expect(page.getByRole("tab")).toHaveCount(0);
  await expect(page.locator(".sliding-tabs-indicator")).toHaveCSS("opacity", "0");
});

test("controlled tabs retain a keyboard entry for missing or disabled values without inventing selection", async ({ page }) => {
  await mount(page, "SlidingTabs", { items: tabs, modelValue: "missing" });
  const first = page.getByRole("tab", { name: "全部", exact: true });
  await expect(first).toHaveAttribute("tabindex", "0");
  await expect(page.locator('[role="tab"][aria-selected="true"]')).toHaveCount(0);
  await first.focus();
  await first.press("End");
  await expect(page.getByRole("tab", { name: "已完成", exact: true })).toBeFocused();
  expect((await events(page, "model")).at(-1)?.args).toEqual(["c"]);
  await setProps(page, { modelValue: "c" });
  await expect(page.getByRole("tab", { name: "已完成", exact: true })).toHaveAttribute("aria-selected", "true");
  await setProps(page, { modelValue: "b" });
  await expect(page.getByRole("tab", { name: "暂停", exact: true })).toHaveAttribute("aria-selected", "false");
  await setProps(page, { modelValue: undefined });
  await expect(first).toHaveAttribute("aria-selected", "true");
});

const groups = [
  { id: "empty", label: "空组", items: [] },
  { id: "running", label: "正在执行", items: [{ id: "x", label: "当前任务", status: "running" }, { id: "blocked", label: "暂不可用", disabled: true }, { id: "z", label: "另一个任务" }] },
  { id: "history", label: "历史执行", items: [{ id: "history-item", label: "之前的任务", status: "completed" }] },
];

test("grouped tasks emit real create/select actions and respect controlled selection and disabled state", async ({ page }) => {
  await mount(page, "GroupedTaskList", { groups, modelValue: "x" });
  await page.getByRole("button", { name: "New task", exact: true }).click();
  expect(await events(page, "create")).toHaveLength(1);
  await expect(page.getByText("Ready", { exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: "另一个任务", exact: true }).click();
  await expect(page.getByRole("button", { name: "当前任务，Running", exact: true })).toHaveAttribute("aria-current", "true");
  expect((await events(page, "model")).at(-1)?.args).toEqual(["z"]);
  expect((await events(page, "select")).at(-1)?.args[1].id).toBe("running");
  await setProps(page, { modelValue: "z" });
  await expect(page.getByRole("button", { name: "另一个任务", exact: true })).toHaveAttribute("aria-current", "true");
  await expect(page.getByRole("button", { name: "暂不可用", exact: true })).toBeDisabled();
  await setProps(page, { disabled: true });
  await expect(page.getByRole("button", { name: "New task", exact: true })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Collapse 正在执行", exact: true })).toBeDisabled();
});

test("grouped tasks recover selection after removals and navigate only visible enabled rows", async ({ page }) => {
  await mount(page, "GroupedTaskList", { groups });
  const heading = page.getByRole("button", { name: "Collapse 正在执行", exact: true });
  await expect(page.getByRole("button", { name: "当前任务，Running", exact: true })).toHaveAttribute("aria-current", "true");
  await heading.focus();
  await heading.press("ArrowDown");
  const current = page.getByRole("button", { name: "当前任务，Running", exact: true });
  await expect(current).toBeFocused();
  await current.press("ArrowDown");
  await expect(page.getByRole("button", { name: "另一个任务", exact: true })).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(page.getByRole("button", { name: "Expand 正在执行", exact: true })).toBeFocused();
  await expect(current).not.toBeVisible();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("button", { name: "Collapse 历史执行", exact: true })).toBeFocused();
  await setProps(page, { groups: [groups[2]] });
  await expect(page.getByRole("button", { name: "之前的任务，Completed", exact: true })).toHaveAttribute("aria-current", "true");
  await setProps(page, { groups: [] });
  await expect(page.locator(".task-nav-row")).toHaveCount(0);
});

test("grouped new-request hover covers from the pointer without shifting the row or glyph frame", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await mount(page, "GroupedTaskList", { groups });
  const action = page.getByRole("button", { name: "New task", exact: true });
  const geometry = () => action.evaluate(element => [element, element.querySelector("svg")!, element.querySelector("span:last-child")!].map(part => {
    const { x, y, width, height } = part.getBoundingClientRect();
    return { x, y, width, height };
  }));
  const before = await geometry();
  await action.hover({ position: { x: 11, y: 14 } });
  await expect(action).toHaveClass(/is-active/);
  const wave = action.locator(".task-create-wave");
  await expect(wave).toHaveCSS("transition-duration", "0.35s");
  await page.waitForTimeout(100);
  expect(await geometry()).toEqual(before);
  expect(await action.locator("svg").evaluate(element => element.getAnimations().length)).toBe(0);
  expect(await action.locator(".task-create-pen").evaluate(element => element.getAnimations().length)).toBe(1);
  const coverage = await wave.evaluate(async element => {
    await Promise.allSettled(element.getAnimations().map(animation => animation.finished));
    const circle = element.getBoundingClientRect();
    const row = element.parentElement!.getBoundingClientRect();
    return { covered: circle.left <= row.left && circle.right >= row.right && circle.top <= row.top && circle.bottom >= row.bottom, clipped: getComputedStyle(element.parentElement!).overflow };
  });
  expect(coverage).toEqual({ covered: true, clipped: "clip" });
  await page.mouse.move(0, 0);
  await expect(action).not.toHaveClass(/is-active/);
  await expect(wave).toHaveCSS("width", "0px");
  await page.keyboard.press("Tab");
  await action.focus();
  await expect(action).toHaveClass(/is-active/);
  await action.press("Enter");
  await action.press("Space");
  expect(await events(page, "create")).toHaveLength(2);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => action.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
});

test("grouped new-request suppresses blocked ink and clears it on blur, hide, and touch", async ({ page }) => {
  await mount(page, "GroupedTaskList", { groups });
  const action = page.getByRole("button", { name: "New task", exact: true });
  await action.hover();
  await expect(action).toHaveClass(/is-active/);
  await setProps(page, { createDisabled: true });
  await expect(action).toBeDisabled();
  await expect(action).not.toHaveClass(/is-active/);
  await action.evaluate(element => (element as HTMLButtonElement).click());
  await setProps(page, { createDisabled: false, "aria-disabled": "true" });
  await action.evaluate(element => (element as HTMLButtonElement).click());
  await expect(action).not.toHaveClass(/is-active/);
  await setProps(page, { "aria-disabled": "false", "aria-busy": "true" });
  await action.evaluate(element => (element as HTMLButtonElement).click());
  expect(await events(page, "create")).toHaveLength(0);
  await setProps(page, { "aria-busy": "false" });
  await page.mouse.move(0, 0);
  await action.hover();
  await expect(action).toHaveClass(/is-active/);
  await page.evaluate(() => window.dispatchEvent(new Event("blur")));
  await expect(action).not.toHaveClass(/is-active/);
  await action.dispatchEvent("pointerenter", { pointerType: "mouse", clientX: 24, clientY: 24 });
  await expect(action).toHaveClass(/is-active/);
  await page.evaluate(() => { Object.defineProperty(document, "hidden", { configurable: true, value: true }); document.dispatchEvent(new Event("visibilitychange")); });
  await expect(action).not.toHaveClass(/is-active/);
  await action.dispatchEvent("pointerenter", { pointerType: "touch", clientX: 24, clientY: 24 });
  await expect(action).not.toHaveClass(/is-active/);
});

test("activity data distinguishes running/pending/failure and only real output has disclosure", async ({ page }) => {
  await mount(page, "ActivityTimeline", { tools: [
    { id: "one", label: "读取文件", status: "running" },
    { id: "two", label: "等待预览", status: "pending" },
  ] });
  await expect(page.locator(".activity-heading")).toContainText("In progress");
  await expect(page.locator(".activity-tool-toggle")).toHaveCount(2);
  await expect(page.getByRole("button", { name: /读取文件/ })).toHaveCount(0);
  await expect(page.locator(".tool-state").nth(0)).toHaveText("In progress");
  await expect(page.locator(".tool-state").nth(1)).toHaveText("Queued");
  await setProps(page, { tools: [{ id: "one", label: "读取文件", status: "failed", output: "文件不存在" }] });
  await expect(page.locator(".activity-heading")).toContainText("Finished");
  await expect(page.locator(".failed-count")).toHaveText("1 failed");
  const row = page.getByRole("button", { name: /读取文件/ });
  await row.click();
  await expect(page.getByText("文件不存在", { exact: true })).toBeVisible();
  await setProps(page, { tools: [] });
  await expect(row).toHaveCount(0);
  await setProps(page, { tools: [{ id: "one", label: "读取文件", status: "success", output: "新的输出" }] });
  await expect(page.getByRole("button", { name: /读取文件/ })).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(".failed-count")).toHaveCount(0);
});

test("activity disclosures survive rapid reversal and disable prevents state changes", async ({ page }) => {
  await mount(page, "ActivityTimeline");
  const environment = page.getByRole("button", { name: /Environment ready/ });
  await environment.click();
  const panel = page.locator(`#${await environment.getAttribute("aria-controls")}`);
  await page.waitForTimeout(80);
  const halfway = await environment.evaluate(button => {
    const panel = document.getElementById(button.getAttribute("aria-controls")!);
    const height = panel!.getBoundingClientRect().height;
    (button as HTMLButtonElement).click();
    return height;
  });
  expect(halfway).toBeGreaterThan(0);
  expect(await panel.evaluate(element => element.getBoundingClientRect().height)).toBeLessThanOrEqual(halfway + 4);
  await environment.click();
  await expect(environment).toHaveAttribute("aria-expanded", "true");
  await expect.poll(() => panel.evaluate(element => (element as HTMLElement).style.height)).toBe("");
  await expect(panel).not.toHaveAttribute("inert", "");
  await setProps(page, { disabled: true });
  await expect(environment).toBeDisabled();
  await environment.dispatchEvent("click");
  await expect(environment).toHaveAttribute("aria-expanded", "true");
});

const questions = [
  { id: "one", prompt: "先做什么？", options: [{ id: "a", label: "先做页面" }, { id: "blocked", label: "暂不开放", disabled: true }] },
  { id: "two", prompt: "选择风格？", options: [{ id: "quiet", label: "简洁" }, { id: "bold", label: "鲜明" }] },
];

test("clarification uses the source question deck then retains history and the choice bubble", async ({ page }) => {
  await mount(page, "ClarificationCard", { questions, initialAnswers: { unknown: "stale", one: "blocked" } });
  await expect(page.getByRole("button", { name: "Confirm choices", exact: true })).toHaveCount(0);
  await expect(page.getByRole("radio", { name: "暂不开放", exact: true })).toBeDisabled();
  await page.getByRole("radio", { name: "先做页面", exact: true }).check();
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByRole("radio", { name: "简洁", exact: true }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: "鲜明", exact: true })).toBeChecked();
  await expect(page.getByRole("button", { name: "Confirm choices", exact: true })).toBeEnabled();
  expect((await events(page, "answers")).at(-1)?.args[0]).toEqual({ one: "a", two: "bold" });
  await page.locator("form").evaluate(form => { (form as HTMLFormElement).requestSubmit(); (form as HTMLFormElement).requestSubmit(); });
  expect(await events(page, "submit")).toHaveLength(1);
  await expect(page.locator(".clarification-summary")).toBeFocused();
  await expect(page.locator(".history-heading")).toContainText("Questions · 2 questions");
  await expect(page.locator(".history-heading")).toContainText("Read only");
  await expect(page.locator(".history-option.selected")).toHaveCount(2);
  await expect(page.locator(".summary-answer")).toHaveCount(2);
  await expect(page.getByRole("button", { name: "Reset choices", exact: true })).toHaveCount(0);
  await setProps(page, { questions: [{ id: "new", prompt: "下一步？", options: [{ id: "review", label: "检查结果" }] }] });
  await expect(page.getByRole("radio", { name: "检查结果", exact: true })).not.toBeChecked();
  await expect(page.getByRole("button", { name: "Confirm choices", exact: true })).toBeDisabled();
});

test("clarification handles deep answer updates and disabled public reset boundaries", async ({ page }) => {
  await mount(page, "ClarificationCard", { questions, initialAnswers: { one: "a", two: "quiet" } });
  await page.evaluate(() => { (window as HarnessWindow).componentProps.initialAnswers.two = "bold"; });
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await expect(page.getByRole("radio", { name: "鲜明", exact: true })).toBeChecked();
  await setProps(page, { disabled: true });
  await expect(page.getByRole("radio", { name: "鲜明", exact: true })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Confirm choices", exact: true })).toBeDisabled();
  await setProps(page, { disabled: false });
  await page.getByRole("button", { name: "Confirm choices", exact: true }).click();
  await setProps(page, { disabled: true });
  await page.locator(".clarification-card").evaluate(element => (element as any).__vueParentComponent.exposed.reset());
  await expect(page.locator(".clarification-summary")).toBeVisible();
  expect(await events(page, "reset")).toHaveLength(0);
  await setProps(page, { disabled: false });
  await page.locator(".clarification-card").evaluate(element => (element as any).__vueParentComponent.exposed.reset());
  await expect(page.getByRole("radio", { name: "先做页面", exact: true })).toBeFocused();
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await expect(page.getByRole("button", { name: "Confirm choices", exact: true })).toBeDisabled();
  expect(await events(page, "reset")).toHaveLength(1);
});

test("clarification supports multiple answers and a genuinely read-only history branch", async ({ page }) => {
  const multiple = [{ id: "features", prompt: "先检查哪些内容？", allowMultiple: true, options: [{ id: "layout", label: "布局" }, { id: "type", label: "文字" }, { id: "blocked", label: "暂不可选", disabled: true }] }];
  await mount(page, "ClarificationCard", { questions: multiple, readOnly: true, initialAnswers: { features: ["layout", "blocked"] } });
  await expect(page.locator(".history-option.selected")).toHaveCount(2);
  await expect(page.getByRole("checkbox")).toHaveCount(0);
  await expect(page.locator("form")).toHaveCount(0);
  await setProps(page, { readOnly: false, initialAnswers: {} });
  await page.getByRole("checkbox", { name: "布局", exact: true }).check();
  await page.getByRole("checkbox", { name: "文字", exact: true }).check();
  await expect(page.getByRole("checkbox", { name: "暂不可选", exact: true })).toBeDisabled();
  expect((await events(page, "answers")).at(-1)?.args[0]).toEqual({ features: ["layout", "type"] });
  await page.getByRole("button", { name: "Confirm choices", exact: true }).click();
  expect((await events(page, "submit"))[0]?.args[0].map((answer: any) => answer.label)).toEqual(["布局", "文字"]);
  await expect(page.locator(".summary-labels > span")).toHaveCount(2);
});
