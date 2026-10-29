import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import { readFileSync } from "node:fs";

type SelectorWindow = Window & {
  selectorProps: Record<string, any>;
  selectorEvents: string[];
  selectorEscapes: number;
  unmountSelector: () => void;
};
const options = [
  { value: "backlog", label: "Backlog", hint: "Queued" },
  { value: "paused", label: "Paused", disabled: true },
  { value: "progress", label: "In progress", hint: "Active" },
  { value: "done", label: "Done", hint: "Complete" },
];
async function mount(page: Page, props: Record<string, unknown> = {}, count = 1, containerStyle: Record<string, string> = {}) {
  await page.route("**/__selector_harness__", route => route.fulfill({
    contentType: "text/html",
    body: '<!doctype html><html lang="en"><head><script type="module" src="/@vite/client"></script></head><body style="margin:0;padding:16px;font-family:Arial,sans-serif"><div id="component"></div></body></html>',
  }));
  await page.goto("/__selector_harness__");
  await page.evaluate(async ({ props, count, containerStyle }) => {
    const { createApp, h, reactive } = await import("/node_modules/.vite/deps/vue.js");
    const { default: Selector } = await import("/src/components/ui/Selector.vue");
    const state = reactive(props);
    const events: string[] = [];
    const app = createApp({ render: () => h("div", [
      h("button", { id: "before", type: "button" }, "Before"),
      h("div", { id: "selector-container", style: { width: count > 1 ? "600px" : "280px", maxWidth: "100%", ...(count > 1 ? { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" } : {}), ...containerStyle } },
        Array.from({ length: count }, (_, index) => h(Selector, { ...state, ariaLabel: `Selector ${index + 1}`, "onUpdate:modelValue": (value: string) => events.push(value) }))),
      h("button", { id: "after", type: "button" }, "After"),
    ]) });
    Object.assign(window, { selectorProps: state, selectorEvents: events, selectorEscapes: 0, unmountSelector: () => app.unmount() });
    document.addEventListener("keydown", event => { if (event.key === "Escape") (window as SelectorWindow).selectorEscapes++; });
    app.mount("#component");
  }, { props, count, containerStyle });
}
async function setProps(page: Page, props: Record<string, unknown>) {
  await page.evaluate(props => Object.assign((window as SelectorWindow).selectorProps, props), props);
}
async function values(page: Page) { return page.evaluate(() => (window as SelectorWindow).selectorEvents); }
const searchBox = (page: Page) => page.getByRole("combobox", { name: "Search options…", exact: true });
async function activeText(page: Page) {
  const id = await page.locator('[aria-activedescendant]').getAttribute("aria-activedescendant");
  return id ? page.locator(`[id="${id}"]`).innerText() : "";
}

test("selector filters hints and values, emits a controlled value, and waits for the host update", async ({ page }) => {
  await mount(page, { options, modelValue: "progress", searchable: true });
  const trigger = page.getByRole("button", { name: "Selector 1", exact: true });
  await trigger.press("Enter");
  await expect(searchBox(page)).toBeFocused();
  expect(await values(page)).toEqual([]);
  await searchBox(page).fill("queued");
  await expect(page.getByRole("option")).toHaveCount(1);
  await expect(page.getByRole("option")).toContainText("Backlog");
  await searchBox(page).press("Enter");
  expect(await values(page)).toEqual(["backlog"]);
  await expect(trigger).toHaveText("In progress");
  await expect(trigger).toBeFocused();
  await setProps(page, { modelValue: "backlog" });
  await expect(trigger).toHaveText("Backlog");
  await trigger.click();
  await searchBox(page).fill("progress");
  await expect(page.getByRole("option")).toHaveCount(1);
  await expect(page.getByRole("option")).toContainText("In progress");
  await searchBox(page).press("Escape");
  await setProps(page, { modelValue: "removed" });
  await expect(trigger).toHaveText("Select an option");
  expect(await values(page)).toEqual(["backlog"]);
});

test("selector skips disabled rows, keeps IME editing, and returns Escape and Tab focus correctly", async ({ page }) => {
  await mount(page, { options });
  const trigger = page.getByRole("combobox", { name: "Selector 1", exact: true });
  await trigger.press("Home");
  await expect.poll(() => activeText(page)).toContain("Backlog");
  await trigger.press("ArrowDown");
  await expect.poll(() => activeText(page)).toContain("In progress");
  await trigger.press("End");
  await trigger.press("Enter");
  await expect(trigger).toHaveText("Done");
  await expect(trigger).toBeFocused();
  await trigger.press("Enter");
  await trigger.press("Escape");
  await expect(page.getByRole("listbox")).toHaveCount(0);
  expect(await page.evaluate(() => (window as SelectorWindow).selectorEscapes)).toBe(0);
  await setProps(page, { searchable: true });
  const searchTrigger = page.getByRole("button", { name: "Selector 1", exact: true });
  await searchTrigger.click();
  const input = searchBox(page);
  await input.fill("In ");
  await input.press("Space");
  await expect(input).toHaveValue("In  ");
  await input.dispatchEvent("keydown", { key: "Enter", keyCode: 229, isComposing: true, bubbles: true });
  await expect(input).toBeFocused();
  expect(await values(page)).toEqual(["done"]);
  await input.press("Tab");
  await expect(page.locator("#after")).toBeFocused();
  await expect(page.getByRole("listbox")).toHaveCount(0);
  await searchTrigger.click();
  await searchBox(page).press("Shift+Tab");
  await expect(page.locator("#before")).toBeFocused();
});

test("selector distinguishes loading and empty states, accepts custom values, and recovers from option changes", async ({ page }) => {
  await mount(page, { options: [], searchable: true, allowCustom: true, loading: true });
  const trigger = page.getByRole("button", { name: "Selector 1", exact: true });
  await trigger.click();
  await expect(page.getByRole("status")).toHaveText("Loading options…");
  await searchBox(page).fill("Release candidate");
  await expect(page.getByRole("option")).toHaveText("Use “Release candidate”");
  await searchBox(page).press("Enter");
  await expect(trigger).toHaveText("Release candidate");
  expect(await values(page)).toEqual(["Release candidate"]);
  await setProps(page, { allowCustom: false, loading: false, emptyText: "No statuses available" });
  await trigger.click();
  await expect(page.getByRole("status")).toHaveText("No statuses available");
  await expect(searchBox(page)).not.toHaveAttribute("aria-activedescendant");
  await setProps(page, { options });
  await expect(page.getByRole("option")).toHaveCount(4);
  await searchBox(page).press("ArrowDown");
  await expect.poll(() => activeText(page)).toContain("In progress");
  await setProps(page, { options: [{ value: "done", label: "Done" }] });
  await expect.poll(() => activeText(page)).toBe("Done");
  await searchBox(page).press("Enter");
  await expect(trigger).toHaveText("Done");
});

test("selector hands over a single accessible panel, dismisses outside, and closes when disabled or unmounted", async ({ page }) => {
  await mount(page, { options, searchable: true }, 2);
  const first = page.getByRole("button", { name: "Selector 1", exact: true });
  const second = page.getByRole("button", { name: "Selector 2", exact: true });
  await first.click();
  const oldPanel = await page.locator(".selector-panel:visible").elementHandle();
  await second.click();
  await expect(first).toHaveAttribute("aria-expanded", "false");
  await expect(second).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("listbox")).toHaveCount(1);
  if (oldPanel) expect(await oldPanel.evaluate(element => !element.isConnected || ((element as HTMLElement).inert && element.getAttribute("aria-hidden") === "true"))).toBe(true);
  await page.locator("#after").click();
  await expect(page.getByRole("listbox")).toHaveCount(0);
  await expect(page.locator("#after")).toBeFocused();
  await first.click();
  await setProps(page, { disabled: true });
  await expect(first).toBeDisabled();
  await expect(page.getByRole("listbox")).toHaveCount(0);
  expect(await values(page)).toEqual([]);
  await setProps(page, { disabled: false });
  await first.click();
  await page.evaluate(() => (window as SelectorWindow).unmountSelector());
  await expect(page.locator(".selector-panel")).toHaveCount(0);
});

test("selector escapes a clipped container and keeps a long active list inside a narrow viewport without scrolling the page", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 560 });
  await mount(page, {
    searchable: true, variant: "ghost", size: "sm", modelValue: "item-55",
    options: Array.from({ length: 60 }, (_, index) => ({ value: `item-${index}`, label: `Status ${index}` })),
  }, 1, { position: "fixed", right: "8px", bottom: "8px", width: "180px", height: "46px", overflow: "hidden" });
  await page.evaluate(() => { document.body.style.minHeight = "1400px"; });
  const trigger = page.getByRole("button", { name: "Selector 1", exact: true });
  await trigger.click();
  await expect(searchBox(page)).toBeFocused();
  await expect.poll(async () => {
    const panel = await page.locator(".selector-panel").boundingBox();
    const anchor = await trigger.boundingBox();
    return Boolean(panel && anchor && panel.x >= 8 && panel.x + panel.width <= 312 && panel.y >= 8 && panel.y + panel.height <= anchor.y - 5);
  }).toBe(true);
  expect(await page.locator(".selector-panel").evaluate(element => element.parentElement === document.body)).toBe(true);
  expect(await page.locator(".selector-list").evaluate(element => element.scrollTop)).toBeGreaterThan(0);
  await searchBox(page).press("ArrowDown");
  await expect.poll(() => activeText(page)).toBe("Status 56");
  await expect.poll(() => page.evaluate(() => {
    const id = document.querySelector(".selector-search")!.getAttribute("aria-activedescendant")!;
    const row = document.getElementById(id)!.getBoundingClientRect();
    const list = document.querySelector(".selector-list")!.getBoundingClientRect();
    return row.top >= list.top && row.bottom <= list.bottom;
  })).toBe(true);
  expect(await page.evaluate(() => ({ scroll: window.scrollY, overflow: document.documentElement.scrollWidth > innerWidth }))).toEqual({ scroll: 0, overflow: false });
});

test("selector source copies the standalone component and inspecting it retains the selected value", async ({ page }) => {
  await page.goto("/#/components/selector");
  const trigger = page.getByRole("button", { name: "Task status", exact: true });
  await trigger.click();
  await page.getByRole("option", { name: /Done/ }).click();
  await expect(trigger).toHaveText("Done");
  await page.getByRole("tab", { name: "Source", exact: true }).click();
  await expect(page.getByRole("listbox")).toHaveCount(0);
  await page.getByRole("button", { name: "Copy code", exact: true }).click();
  const source = readFileSync("src/components/ui/Selector.vue", "utf8");
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(source);
  await page.getByRole("tab", { name: "Preview", exact: true }).click();
  await expect(trigger).toHaveText("Done");
});

test("filtering an upward selector keeps its side and interpolates the panel height", async ({ page }) => {
  await page.setViewportSize({ width: 640, height: 600 });
  await mount(page, { options, searchable: true }, 1, { position: "fixed", top: "420px", left: "16px", width: "280px" });
  await page.getByRole("button", { name: "Selector 1", exact: true }).click();
  const panel = page.locator(".selector-panel");
  await panel.evaluate(element => Promise.allSettled(element.getAnimations().map(animation => animation.finished)));
  const before = await panel.boundingBox();
  await searchBox(page).fill("Done");
  const samples = await panel.evaluate(async element => {
    const samples: { height: number; gap: number }[] = [];
    const start = performance.now();
    while (performance.now() - start < 260) {
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      const box = element.getBoundingClientRect();
      const trigger = document.querySelector(".selector-trigger")!.getBoundingClientRect();
      samples.push({ height: box.height, gap: trigger.top - box.bottom });
    }
    return samples;
  });
  const after = await panel.boundingBox();
  expect(after!.height).toBeLessThan(before!.height - 60);
  expect(samples.some(sample => sample.height > after!.height + 2 && sample.height < before!.height - 2)).toBe(true);
  expect(samples.every(sample => sample.gap >= 4 && sample.gap <= 8)).toBe(true);
  await expect(searchBox(page)).toBeFocused();
  await expect(page.getByRole("option")).toHaveCount(1);
});

test("rapid reopening reverses the same panel from its current pose without flashing back to transparent", async ({ page }) => {
  await mount(page, { options });
  await page.getByRole("combobox", { name: "Selector 1", exact: true }).click();
  await page.locator(".selector-panel").evaluate(element => Promise.allSettled(element.getAnimations().map(animation => animation.finished)));
  const reversal = await page.evaluate(async () => {
    const trigger = document.querySelector<HTMLButtonElement>(".selector-trigger")!;
    const panel = document.querySelector<HTMLElement>(".selector-panel")!;
    trigger.click();
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
    const leaving = panel.getAnimations().find(animation => animation.playState === "running")!;
    leaving.pause();
    leaving.currentTime = 60;
    const before = Number(getComputedStyle(panel).opacity);
    trigger.click();
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    const after = Number(getComputedStyle(panel).opacity);
    const same = panel === document.querySelector(".selector-panel");
    const interactive = !panel.inert && panel.getAttribute("aria-hidden") !== "true";
    await Promise.allSettled(panel.getAnimations().map(animation => animation.finished));
    return { before, after, same, interactive, settled: Number(getComputedStyle(panel).opacity) };
  });
  expect(reversal.before).toBeGreaterThan(.15);
  expect(reversal.before).toBeLessThan(.95);
  expect(reversal.after).toBeGreaterThanOrEqual(reversal.before - .02);
  expect(reversal.same).toBe(true);
  expect(reversal.interactive).toBe(true);
  expect(reversal.settled).toBe(1);
  await expect(page.getByRole("listbox")).toBeVisible();
});

test("one highlight glides between stable rows and reduced motion settles every layer immediately", async ({ page }) => {
  await mount(page, { options, searchable: true });
  const trigger = page.getByRole("button", { name: "Selector 1", exact: true });
  await trigger.click();
  const panel = page.locator(".selector-panel");
  await panel.evaluate(element => Promise.allSettled(element.getAnimations({ subtree: true }).map(animation => animation.finished)));
  const first = page.getByRole("option").first();
  const last = page.getByRole("option").last();
  await first.hover();
  const highlight = page.locator(".selector-highlight");
  await highlight.evaluate(element => Promise.allSettled(element.getAnimations().map(animation => animation.finished)));
  const before = await page.getByRole("option").evaluateAll(elements => elements.map(element => element.getBoundingClientRect().toJSON()));
  const from = await highlight.evaluate(element => new DOMMatrix(getComputedStyle(element).transform).m42);
  const target = await last.evaluate(element => (element as HTMLElement).offsetTop);
  await last.hover();
  const movement = await highlight.evaluate(async element => {
    const values: number[] = [];
    const start = performance.now();
    while (performance.now() - start < 230) {
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      values.push(new DOMMatrix(getComputedStyle(element).transform).m42);
    }
    return values;
  });
  expect(movement.some(value => value > from + 1 && value < target - 1)).toBe(true);
  expect(movement.at(-1)).toBeCloseTo(target, 0);
  expect(await page.getByRole("option").evaluateAll(elements => elements.map(element => element.getBoundingClientRect().toJSON()))).toEqual(before);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await first.hover();
  await expect.poll(() => highlight.evaluate(element => new DOMMatrix(getComputedStyle(element).transform).m42)).toBe(0);
  expect(await panel.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
  await searchBox(page).press("Escape");
  await expect(panel).not.toBeVisible();
  await trigger.click();
  await expect(panel).toHaveCSS("opacity", "1");
  expect(await panel.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
});
