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
  const oldPanel = await page.locator(".selector-panel").elementHandle();
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
