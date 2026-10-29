import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import { readFileSync } from "node:fs";

const components = [
  ["chat-conversation", "Chat Conversation"],
  ["chat-composer", "Chat Composer"],
  ["model-selector", "Model Selector"],
  ["thinking-indicator", "Thinking Indicator"],
  ["status-badge", "Status Badge"],
  ["activity-timeline", "Activity Timeline"],
  ["clarification-card", "Clarification Card"],
  ["sliding-tabs", "Sliding Tabs"],
  ["selector", "Selector"],
  ["grouped-task-list", "Grouped Task List"],
] as const;

async function openComponent(page: Page, slug: string) {
  await page.goto(`/#/components/${slug}`);
  await expect(page.locator(".large-demo > :first-child")).toBeVisible();
}

async function expectNoHorizontalOverflow(page: Page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true);
}

test(`all ${components.length} components render in the collection and their own detail pages without browser errors`, async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/#/components");
  await expect(page.locator(".component-card")).toHaveCount(components.length);
  await expect(page.locator(".demo-holder > *")).toHaveCount(components.length);
  for (const [slug, name] of components) {
    await openComponent(page, slug);
    await expect(page.locator(".detail-heading h1")).toContainText(name);
  }
  expect(errors).toEqual([]);
});

test("removed and unknown component routes return to the actual collection", async ({ page }) => {
  for (const slug of ["agent-card", "task-progress", "tool-call", "approval-card", "artifact-card", "command-menu", "code-block", "missing-component", "file-tree", "hover-action"]) {
    await page.goto(`/#/components/${slug}`);
    await expect(page).toHaveURL(/#\/components$/);
    await expect(page.locator(".component-card")).toHaveCount(components.length);
    await expect(page.locator(".home-page")).toHaveCount(0);
  }
});

test("category and text filters combine, show an empty state, and can be cleared", async ({
  page,
}) => {
  await page.goto("/#/components");
  await page
    .getByRole("group", { name: "Component categories" })
    .getByRole("button", { name: "Workflow", exact: true })
    .click();
  await expect(page.locator(".component-card")).toHaveCount(1);
  await page.getByRole("textbox", { name: "Filter components" }).fill("Activity Timeline");
  await expect(page.locator(".component-card")).toHaveCount(1);
  await expect(page.locator(".component-card h3")).toHaveText("Activity Timeline");
  await page
    .getByRole("textbox", { name: "Filter components" })
    .fill("no-such-component-123");
  await expect(page.locator(".component-card")).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "No components found" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Browse all components" }).click();
  await expect(page.locator(".component-card")).toHaveCount(components.length);
  await expect(page.getByRole("textbox", { name: "Filter components" })).toHaveValue("");
  await page.getByRole("textbox", { name: "Filter components" }).fill("fold");
  await expect(page.locator(".component-card")).toHaveCount(2);
  await expect(page.locator(".component-card .card-title-row h3")).toHaveText(["Activity Timeline", "Grouped Task List"]);
});

test("the home page introduces the project and links to the component collection", async ({
  page,
}) => {
  await page.goto("/#/");
  const home = page.locator(".home-page");
  await expect(home).toBeVisible();
  await expect(home.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator(".sidebar")).not.toBeVisible();
  await expect(
    page.locator('.site-header a[href="#/components"]').first(),
  ).toBeVisible();
  await home.getByRole("link", { name: /Browse components/ }).first().click();
  await expect(page).toHaveURL(/#\/components$/);
  await expect(page.locator(".component-card")).toHaveCount(components.length);
});

test("the collection and previews have no saved-item controls", async ({
  page,
}) => {
  await page.goto("/#/components");
  await expect(page.locator(".sidebar-link").first()).toBeVisible();
  await expect(page.locator(".component-card")).toHaveCount(components.length);
  await expect(page.getByRole("button", { name: /favorites|收藏/i })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /favorites|收藏/i })).toHaveCount(0);
  await openComponent(page, "chat-composer");
  await expect(page.getByRole("button", { name: /favorites|收藏/i })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /favorites|收藏/i })).toHaveCount(0);
});

test("theme choice survives refresh and switching back updates the page theme", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await page.getByRole("button", { name: "Switch to dark theme", exact: true }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.getByRole("button", { name: "Switch to light theme", exact: true }).click();
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).not.toHaveClass(/dark/);
});

test("the header has no global search, shortcut dialog, component count or New badges", async ({ page }) => {
  for (const route of ["/#/", "/#/components", "/#/components/chat-composer"]) {
    await page.goto(route);
    await expect(page.locator(".global-search")).toHaveCount(0);
    await expect(page.locator(".site-header").getByRole("button", { name: "Search components", exact: true })).toHaveCount(0);
    await expect(page.locator('.top-nav a[href="#/components"]')).toHaveText("Components");
    await expect(page.getByText("New", { exact: true })).toHaveCount(0);
    for (const shortcut of ["Control+k", "Meta+k"]) {
      await page.keyboard.press(shortcut);
      await expect(page.getByRole("dialog", { name: "Search components", exact: true })).toHaveCount(0);
    }
  }
});

test("source tab displays the real Vue component and copies its exact contents", async ({
  page,
}) => {
  await openComponent(page, "chat-composer");
  await page
    .locator(".preview-tabs")
    .getByRole("tab", { name: "Source", exact: true })
    .click();
  const viewer = page.locator(".detail-preview .source-code");
  await expect(viewer).toContainText('<script setup lang="ts">');
  await expect(viewer).toContainText("defineEmits");
  await expect(viewer).toContainText("<style scoped>");
  await expect(page.locator(".source-filename")).toHaveText("ChatComposer.vue");
  await page.getByRole("button", { name: "Copy code", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("Component source copied");
  const source = readFileSync(
    new URL("../src/components/ui/ChatComposer.vue", import.meta.url),
    "utf8",
  );
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toBe(source);
});

test("detail tabs support keyboard switching, preserve a draft and attachment, and replay resets the preview", async ({ page }) => {
  await openComponent(page, "chat-composer");
  const preview = page.getByRole("tabpanel", { name: "Preview", exact: true });
  const draft = preview.getByRole("textbox", { name: "Message the assistant", exact: true });
  await draft.fill("请保留这份尚未发送的草稿。");
  await preview.getByLabel("Choose files").setInputFiles({ name: "draft.txt", mimeType: "text/plain", buffer: Buffer.from("待处理资料") });
  const tabs = page.getByRole("tablist", { name: "Component preview and source", exact: true });
  const previewTab = tabs.getByRole("tab", { name: "Preview", exact: true });
  const sourceTab = tabs.getByRole("tab", { name: "Source", exact: true });
  await previewTab.focus();
  await previewTab.press("ArrowRight");
  await expect(sourceTab).toBeFocused();
  await expect(sourceTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: "Source", exact: true })).toContainText("defineEmits");
  await expect.poll(() => page.locator("#component-preview-panel").evaluate(element => element.inert)).toBe(true);
  await sourceTab.press("Home");
  await expect(previewTab).toBeFocused();
  await expect(draft).toHaveValue("请保留这份尚未发送的草稿。");
  await expect(preview.locator(".file-chip")).toContainText("draft.txt");
  await expect.poll(() => preview.evaluate(element => (element as HTMLElement).inert)).toBe(false);
  await previewTab.press("End");
  await expect(sourceTab).toBeFocused();
  await sourceTab.press("ArrowLeft");
  await expect(previewTab).toHaveAttribute("aria-selected", "true");
  await page.getByRole("button", { name: "Replay demo", exact: true }).click();
  await expect(draft).toHaveValue("");
  await expect(preview.locator(".file-chip")).toHaveCount(0);
});

test("composer validates input, attaches a file, selects a model, and sends a message", async ({
  page,
}) => {
  await openComponent(page, "chat-composer");
  const demo = page.locator(".large-demo");
  const input = demo.getByRole("textbox", { name: "Message the assistant" });
  const send = demo.getByRole("button", { name: "Send message", exact: true });
  await expect(send).toBeDisabled();
  await input.fill("Build a clear dashboard");
  await input.press("Shift+Enter");
  await expect(input).toHaveValue("Build a clear dashboard\n");
  await demo.getByLabel("Choose files").setInputFiles({
    name: "brief.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("A concise product brief."),
  });
  await expect(demo.locator(".file-chip")).toContainText("brief.txt");
  const modelTrigger = demo.getByRole("button", { name: "Select model", exact: true });
  await modelTrigger.click();
  const model = page.getByRole("menuitemradio").last();
  const modelName = (await model.innerText()).trim();
  await model.click();
  await expect(modelTrigger).toContainText(modelName);
  await expect(modelTrigger).toHaveAttribute("aria-expanded", "false");
  await send.click();
  await expect(demo.getByText("Message sent", { exact: true })).toHaveCount(0);
  await expect(input).toHaveValue("");
  await expect(demo.locator(".file-chip")).toHaveCount(0);
  await expect(send).toBeDisabled();
});

test("model selector searches, changes selection, and closes its popup", async ({
  page,
}) => {
  await openComponent(page, "model-selector");
  const demo = page.locator(".large-demo");
  const trigger = demo.getByRole("button", {
    name: "Select model",
    exact: true,
  });
  await trigger.click();
  const search = demo.getByRole("textbox", {
    name: "Search models",
    exact: true,
  });
  await expect(search).toBeFocused();
  await search.fill("OpenAI");
  await expect(demo.getByRole("option")).toHaveCount(1);
  const modelName = (await demo.getByRole("option").innerText()).split(
    "\n",
  )[0]!;
  await demo.getByRole("option").click();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toContainText(modelName);
  await trigger.click();
  await expect(demo.getByRole("option", { selected: true })).toContainText(
    modelName,
  );
  await demo.getByRole("textbox", { name: "Search models" }).press("Escape");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});

test("thinking remains a single-line status and all six status examples are read-only", async ({ page }) => {
  await openComponent(page, "thinking-indicator");
  const thinking = page.locator(".large-demo .thinking-indicator");
  await expect(thinking).toHaveAttribute("role", "status");
  await expect(thinking).toHaveText("Thinking");
  await expect(thinking.locator(".thinking-lamp")).toHaveAttribute("aria-hidden", "true");
  await expect(thinking.getByRole("button")).toHaveCount(0);
  await openComponent(page, "status-badge");
  const examples = page.locator(".large-demo .status-examples");
  await expect(examples.locator(".status-badge")).toHaveText(["Running", "Queued", "Needs input", "Completed", "Failed", "Cancelled"]);
  await expect(examples.locator("button, [role='button'], [aria-pressed]")).toHaveCount(0);
});

test("390px mobile collection, navigation, search and source detail avoid horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/components");
  await expect(page.locator(".component-card")).toHaveCount(components.length);
  await expectNoHorizontalOverflow(page);
  const menu = page.locator(".mobile-menu");
  await expect(menu).toHaveAccessibleName("Open navigation");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(menu).toHaveAccessibleName("Close navigation");
  await page
    .locator(".sidebar")
    .getByRole("button", { name: /Navigation/ })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(".component-card")).toHaveCount(3);
  await expectNoHorizontalOverflow(page);
  await page
    .getByRole("button", { name: "View Sliding Tabs details", exact: true })
    .click();
  await expect(page.locator(".detail-heading h1")).toContainText("Sliding Tabs");
  await expectNoHorizontalOverflow(page);
  await page
    .locator(".preview-tabs")
    .getByRole("tab", { name: "Source", exact: true })
    .click();
  await expect(page.locator(".source-filename")).toHaveText("SlidingTabs.vue");
  await expectNoHorizontalOverflow(page);
  await page.goto("/#/components");
  await page.getByRole("textbox", { name: "Filter components", exact: true }).fill("Sliding Tabs");
  await expect(page.locator(".component-card")).toHaveCount(1);
  await expectNoHorizontalOverflow(page);
});

test("skip link focuses main content without changing the current component route", async ({
  page,
}) => {
  await openComponent(page, "sliding-tabs");
  const detailUrl = page.url();
  const skipLink = page.getByRole("link", {
    name: "Skip to main content",
    exact: true,
  });
  await skipLink.focus();
  await expect(skipLink).toBeVisible();
  await skipLink.click();
  await expect(page.locator("#main-content")).toBeFocused();
  await expect(page).toHaveURL(detailUrl);
  await expect(page.locator(".detail-heading h1")).toContainText("Sliding Tabs");
});

test("returning from a detail page through All Components scrolls the collection below the sticky header", async ({
  page,
}) => {
  await openComponent(page, "sliding-tabs");
  await page
    .locator(".sidebar")
    .getByRole("button", { name: /^All components/ })
    .click();
  await expect(page).toHaveURL(/#\/components$/);
  await expect(page.locator(".component-card")).toHaveCount(components.length);
  await expect
    .poll(
      async () =>
        page.evaluate(() => {
          const collection = document.getElementById("components");
          const header = document.querySelector(".site-header");
          if (!collection || !header) return false;
          const top = collection.getBoundingClientRect().top;
          return (
            top >= header.getBoundingClientRect().bottom - 2 &&
            top < window.innerHeight
          );
        }),
      {
        message:
          "The collection heading should be visible below the sticky header.",
      },
    )
    .toBe(true);
});

test("motion: category highlight runs a real transition and settles on the new selection", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/#/components");
  await expect(page.locator(".component-card")).toHaveCount(components.length);
  const motion = await page.evaluate(async () => {
    await document.fonts.ready;
    const tabs = document.querySelector<HTMLElement>(".category-tabs")!;
    const highlight = tabs.querySelector<HTMLElement>(".tab-highlight")!;
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    await Promise.allSettled(highlight.getAnimations().map((animation) => animation.finished));
    const before = getComputedStyle(highlight).transform;
    const workflow = [...tabs.querySelectorAll<HTMLButtonElement>("button")].find((button) => button.textContent?.trim() === "Workflow")!;
    workflow.click();
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    const animations = highlight.getAnimations();
    const runningProperties = animations.filter((animation) => animation.playState === "running")
      .map((animation) => "transitionProperty" in animation ? String(animation.transitionProperty) : "");
    await Promise.allSettled(animations.map((animation) => animation.finished));
    return { before, after: getComputedStyle(highlight).transform, runningProperties };
  });
  expect(motion.runningProperties).toContain("transform");
  expect(motion.after).not.toBe(motion.before);
  await expect(page.locator(".category-tabs button.active")).toHaveText("Workflow");
  await expect(page.locator(".component-card")).toHaveCount(1);
});

test("motion: reduced motion skips animated highlights and model transitions while selection still works", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#/components");
  await page.getByRole("group", { name: "Component categories" }).getByRole("button", { name: "Workflow", exact: true }).click();
  await expect(page.locator(".component-card")).toHaveCount(1);
  const tabMotion = await page.locator(".tab-highlight").evaluate(async (element) => {
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    return {
      durations: getComputedStyle(element).transitionDuration.split(",").map(Number.parseFloat),
      running: element.getAnimations().filter((animation) => animation.playState === "running").length,
    };
  });
  expect(tabMotion.durations.every((duration) => duration <= 0.001)).toBe(true);
  expect(tabMotion.running).toBe(0);

  await openComponent(page, "model-selector");
  const modelDemo = page.locator(".large-demo");
  const trigger = modelDemo.getByRole("button", { name: "Select model", exact: true });
  await trigger.click();
  await expect(modelDemo.locator(".model-menu")).toBeVisible();
  const popupMotion = await modelDemo.locator(".model-menu").evaluate(async (element) => {
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    return {
      durations: getComputedStyle(element).transitionDuration.split(",").map(Number.parseFloat),
      running: element.getAnimations().filter((animation) => animation.playState === "running").length,
    };
  });
  expect(popupMotion.durations.every((duration) => duration <= 0.001)).toBe(true);
  expect(popupMotion.running).toBe(0);
  await modelDemo.getByRole("textbox", { name: "Search models", exact: true }).fill("OpenAI");
  const option = modelDemo.getByRole("option");
  const modelName = (await option.innerText()).split("\n")[0]!;
  await option.click();
  await expect(trigger).toContainText(modelName);
  await expect(trigger).toHaveAttribute("aria-expanded", "false");

  await openComponent(page, "thinking-indicator");
  const thinking = page.locator(".large-demo .thinking-indicator");
  await expect(thinking).toContainText("Thinking");
  expect(await thinking.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);

  await openComponent(page, "status-badge");
  const badges = page.locator(".large-demo .status-badge");
  await expect(badges).toHaveCount(6);
  expect(await badges.evaluateAll(elements => elements.reduce((count, element) => count + element.getAnimations({ subtree: true }).length, 0))).toBe(0);

  await openComponent(page, "grouped-task-list");
  const action = page.locator(".large-demo").getByRole("button", { name: "New task", exact: true });
  await action.hover();
  await expect(action).toHaveClass(/is-active/);
  await expect.poll(() => action.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);

  await page.goto("/#/icons");
  const trash = page.getByRole("button", { name: "View Delete source", exact: true });
  await trash.hover();
  await page.getByRole("button", { name: "Play Delete animation", exact: true }).click();
  await expect(trash.locator("svg")).toHaveAttribute("data-icon-motion", "idle");
  expect(await trash.evaluate((element) => element.getAnimations({ subtree: true }).length)).toBe(0);
});

test("activity sections and nested tool output fold independently and expose failures", async ({ page }) => {
  await openComponent(page, "activity-timeline");
  const demo = page.locator(".large-demo");
  const environment = demo.getByRole("button", { name: /Environment ready/ });
  const tools = demo.getByRole("button", { name: /3 tools used/ });
  await expect(environment).toHaveAttribute("aria-expanded", "false");
  await expect(tools).toHaveAttribute("aria-expanded", "true");
  await expect(tools).toContainText("1 failed");
  await environment.focus();
  await environment.press("Enter");
  await expect(demo.getByText("Connect workspace", { exact: true })).toBeVisible();
  const failedTool = demo.getByRole("button", { name: /Generate preview/ });
  await failedTool.click();
  await expect(failedTool).toHaveAttribute("aria-expanded", "true");
  await expect(demo.locator(".failed-output")).toContainText("The preview server is not running");
  await tools.click();
  await expect(failedTool).not.toBeVisible();
  await expect(environment).toHaveAttribute("aria-expanded", "true");
  await tools.click();
  await expect(demo.locator(".failed-output")).toBeVisible();
  await environment.press("Space");
  await expect(environment).toHaveAttribute("aria-expanded", "false");
  await expect(demo.getByText("Connect workspace", { exact: true })).not.toBeVisible();
  const environmentPanel = demo.locator(`[id="${await environment.getAttribute("aria-controls")}"]`);
  await expect(environmentPanel).toHaveAttribute("aria-hidden", "true");
  await expect.poll(() => environmentPanel.evaluate((element) => (element as HTMLElement).inert)).toBe(true);
});

test("clarification uses the source question deck and keeps submitted choices in chat history", async ({ page }) => {
  await openComponent(page, "clarification-card");
  const demo = page.locator(".large-demo");
  await expect(demo.getByRole("radio")).toHaveCount(2);
  await demo.getByRole("radio", { name: "Refine the interactions", exact: true }).check();
  await demo.getByRole("button", { name: "Next", exact: true }).click();
  await expect(demo.getByRole("radio", { name: "Refine the interactions", exact: true })).toHaveCount(0);
  await demo.getByRole("radio", { name: "Quiet and spacious", exact: true }).check();
  await demo.getByRole("button", { name: "Confirm choices", exact: true }).click();
  await expect(demo.getByText("Questions · 2 questions", { exact: true })).toBeVisible();
  await expect(demo.getByText("Read only", { exact: true })).toBeVisible();
  await expect(demo.getByRole("radio")).toHaveCount(0);
  await expect(demo.locator(".summary-labels > span")).toHaveText([
    "Refine the interactions", "Quiet and spacious",
  ]);
  await expect(demo.getByLabel("Your choices", { exact: true })).toBeFocused();
  await expect(demo.locator(".history-option.selected")).toHaveCount(2);
});

test("sliding tabs animate the selected surface and support arrow, Home, and End keys", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await openComponent(page, "sliding-tabs");
  const tabs = page.locator(".large-demo").getByRole("tablist", { name: "Task status" });
  const running = tabs.getByRole("tab", { name: "Running", exact: true });
  const motion = await tabs.evaluate(async (element) => {
    await document.fonts.ready;
    const surface = element.querySelector<HTMLElement>(".sliding-tabs-indicator")!;
    await Promise.allSettled(surface.getAnimations().map((animation) => animation.finished));
    const before = getComputedStyle(surface).transform;
    [...element.querySelectorAll<HTMLButtonElement>("button")].find((button) => button.textContent?.trim() === "Running")!.click();
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    const transitions = surface.getAnimations();
    const moving = transitions.some((animation) => "transitionProperty" in animation && animation.transitionProperty === "transform");
    await Promise.allSettled(transitions.map((animation) => animation.finished));
    return { moving, before, after: getComputedStyle(surface).transform };
  });
  expect(motion.moving).toBe(true);
  expect(motion.after).not.toBe(motion.before);
  await expect(running).toHaveAttribute("aria-selected", "true");
  await running.focus();
  await running.press("ArrowRight");
  await expect(tabs.getByRole("tab", { name: "Needs input" })).toBeFocused();
  await page.keyboard.press("End");
  await expect(tabs.getByRole("tab", { name: "Completed" })).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("Home");
  await expect(tabs.getByRole("tab", { name: "All", exact: true })).toBeFocused();
  await expect(tabs.locator('[tabindex="0"]')).toHaveCount(1);
});

test("grouped tasks retain selection across folding and acknowledge a new request", async ({ page }) => {
  await openComponent(page, "grouped-task-list");
  const demo = page.locator(".large-demo");
  const selected = demo.getByRole("button", { name: "Organize brand assets，Needs input", exact: true });
  await selected.click();
  await expect(selected).toHaveAttribute("aria-current", "true");
  await expect(demo.locator('[aria-current="true"]')).toHaveCount(1);
  const group = demo.getByRole("button", { name: "Collapse In progress", exact: true });
  await group.click();
  await expect(selected).not.toBeVisible();
  await expect(demo.getByRole("button", { name: "Collapse Automations", exact: true })).toHaveAttribute("aria-expanded", "true");
  await demo.getByRole("button", { name: "Expand In progress", exact: true }).press("Enter");
  await expect(selected).toBeVisible();
  await expect(selected).toHaveAttribute("aria-current", "true");
  await demo.getByRole("button", { name: "New task", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("New task selected");
});

test("icon gallery renders 141 SVGs and plays only the hovered or selected icon", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/#/icons");
  const grid = page.locator(".icon-gallery-grid");
  await expect(grid.locator(".icon-gallery-glyph > svg")).toHaveCount(141);
  await expect(grid.getByRole("button", { name: /^Play .+ animation$/ })).toHaveCount(140);
  await expect(page.getByRole("button", { name: "Play all", exact: true })).toHaveCount(0);
  await expect(grid.locator('.icon-gallery-glyph > svg[data-icon-motion="once"]')).toHaveCount(0);
  const trash = grid.getByRole("button", { name: "View Delete source", exact: true });
  const glyph = trash.locator("svg");
  await trash.hover();
  await expect(glyph).toHaveAttribute("data-icon-motion", "once");
  expect(await glyph.evaluate((element) => ({ root: element.getAnimations().length, parts: element.getAnimations({ subtree: true }).length }))).toEqual({ root: 0, parts: 1 });
  await page.mouse.move(0, 0);
  await expect(glyph).toHaveAttribute("data-icon-motion", "idle");
  const framesBefore = await grid.locator(".icon-gallery-glyph > svg").evaluateAll((icons) => icons.map((svg) => {
    const { x, y, width, height } = svg.getBoundingClientRect();
    return { x, y, width, height };
  }));
  await grid.getByRole("button", { name: "Play Delete animation", exact: true }).click();
  await expect(glyph).toHaveAttribute("data-icon-motion", "once");
  await expect(grid.locator('.icon-gallery-glyph > svg[data-icon-motion="once"]')).toHaveCount(1);
  await page.waitForTimeout(120);
  expect(await grid.locator(".icon-gallery-glyph > svg").evaluateAll((icons) => icons.map((svg) => {
    const { x, y, width, height } = svg.getBoundingClientRect();
    return { x, y, width, height };
  }))).toEqual(framesBefore);
  const motion = await grid.locator(".icon-gallery-glyph > svg").evaluateAll((icons) => icons.map((svg) => ({
    name: svg.getAttribute("data-icon"),
    frame: svg.getAnimations().length,
    parts: svg.getAnimations({ subtree: true }).length,
  })));
  expect(motion.every((icon) => icon.frame === 0)).toBe(true);
  expect(motion.filter((icon) => icon.parts > 0).map(icon => icon.name)).toEqual(["trash"]);
  expect(motion.find((icon) => icon.name === "qq")?.parts).toBe(0);
});

test("icon search, empty state, SVG copying, and Vue source inspector work together", async ({ page }) => {
  await page.goto("/#/icons");
  const search = page.getByRole("searchbox", { name: "Search icons", exact: true });
  await search.fill("trash");
  await expect(page.locator(".icon-gallery-tile")).toHaveCount(1);
  await page.getByRole("button", { name: "Copy Delete SVG", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("Copied Delete SVG");
  expect(await page.evaluate(async () => {
    const parsed = new DOMParser().parseFromString(await navigator.clipboard.readText(), "image/svg+xml");
    return parsed.documentElement.tagName === "svg" && !parsed.querySelector("parsererror") && !!parsed.querySelector("path");
  })).toBe(true);
  const trigger = page.getByRole("button", { name: "View Delete source", exact: true });
  await trigger.click();
  const inspector = page.getByRole("dialog", { name: "Delete", exact: true });
  await expect(inspector).toBeVisible();
  await expect(inspector.locator(".source-code")).toContainText("<svg");
  await expect(inspector.locator(".source-code")).toContainText("@keyframes");
  await inspector.getByRole("button", { name: "Copy code", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("Copied Delete Vue component");
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain("@keyframes agentIcon_trash_liftLid");
  await inspector.getByRole("button", { name: "SVG", exact: true }).click();
  await expect(inspector.locator(".source-code")).not.toContainText("@keyframes");
  await page.keyboard.press("Escape");
  await expect(inspector).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await search.fill("no-icon-xyz");
  await expect(page.locator(".icon-gallery-empty")).toContainText("No icons match");
  await page.getByRole("button", { name: /View all icons/ }).click();
  await expect(page.locator(".icon-gallery-tile")).toHaveCount(141);
});

test("sidebar hover plays glyph parts while the row, text, count, and SVG frame stay still", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/#/docs/introduction");
  await expect(page.locator(".docs-page h1")).toBeVisible();
  await page.waitForFunction(() => document.querySelector(".page-view")?.getAnimations().length === 0);
  const rows = page.locator(".sidebar-link");
  for (let index = 0; index < await rows.count(); index++) {
    const row = rows.nth(index);
    await page.mouse.move(1400, 200);
    const geometry = () => row.evaluate((element) => [element, ...element.children].map((part) => {
      const { x, y, width, height } = part.getBoundingClientRect();
      return { x, y, width, height };
    }));
    const before = await geometry();
    await row.hover();
    await expect(row.locator("svg")).toHaveAttribute("data-icon-motion", "once");
    await page.waitForTimeout(120);
    expect(await geometry()).toEqual(before);
    expect(await row.locator("svg").evaluate((svg) => ({
      frame: svg.getAnimations().length,
      parts: svg.getAnimations({ subtree: true }).length,
    }))).toMatchObject({ frame: 0 });
    expect(await row.locator("svg").evaluate((svg) => svg.getAnimations({ subtree: true }).length)).toBeGreaterThan(0);
  }
});

test("quick start copies commands and examples with stable local feedback", async ({ page }) => {
  await page.goto("/#/docs/introduction");
  const command = page.getByRole("button", { name: "Copy install command", exact: true });
  await command.click();
  await expect(command.locator("svg")).toHaveAttribute("data-icon", "check");
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe("npm install lucide-vue-next");
  const copyExample = page.getByRole("button", { name: "Copy example", exact: true });
  await copyExample.scrollIntoViewIfNeeded();
  const before = await copyExample.boundingBox();
  await copyExample.click();
  await expect(copyExample).toHaveCount(0);
  const copied = page.locator(".docs-example-header button");
  await expect(copied).toHaveText("Copied");
  expect(await copied.boundingBox()).toEqual(before);
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain('<ChatComposer @send="console.log" />');
  await expect(page.getByRole("status")).toHaveText("Example copied");
});

test("mobile navigation excludes hidden links from focus and returns focus after Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/docs/introduction");
  const drawer = page.getByRole("complementary", { name: "Component navigation", includeHidden: true });
  await expect.poll(() => drawer.evaluate((element) => (element as HTMLElement).inert)).toBe(true);
  const menu = page.getByRole("button", { name: "Open navigation", exact: true });
  await menu.click();
  await expect.poll(() => drawer.evaluate((element) => (element as HTMLElement).inert)).toBe(false);
  await expect.poll(() => page.locator("main").evaluate((element) => element.inert)).toBe(true);
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open navigation", exact: true })).toBeFocused();
  await expect.poll(() => drawer.evaluate((element) => (element as HTMLElement).inert)).toBe(true);
  await expect.poll(() => page.locator("main").evaluate((element) => element.inert)).toBe(false);
  await expectNoHorizontalOverflow(page);
});


test("folding can reverse repeatedly without jumping to zero height", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  for (const [slug, selector, panelSelector] of [
    ["activity-timeline", ".activity-section-toggle", ".activity-fold"],
    ["grouped-task-list", ".task-group-heading", ".task-group-body"],
  ]) {
    await openComponent(page, slug!);
    const jumps = await page.locator(".large-demo").locator(selector!).first().evaluate(async (element, panelSelector) => {
      const button = element as HTMLButtonElement;
      const panel = document.querySelector(`.large-demo ${panelSelector}`)!;
      const changes: number[] = [];
      for (let index = 0; index < 8; index++) {
        const before = panel.getBoundingClientRect().height;
        button.click();
        await Promise.resolve();
        await Promise.resolve();
        changes.push(Math.abs(panel.getBoundingClientRect().height - before));
        await new Promise((resolve) => setTimeout(resolve, 90));
      }
      return changes;
    }, panelSelector!);
    expect(Math.max(...jumps), `${slug} should continue from its current height`).toBeLessThan(3);
  }
});

test("collection copy and icon display names use English while technical search still works", async ({ page }) => {
  await page.goto("/#/components");
  await expect(page.locator(".component-card")).toHaveCount(components.length);
  await expect(page.locator(".section-heading h1")).toHaveText("Components");
  await expect(page.locator(".category-tabs")).toContainText("Conversation");
  await expect(page.locator(".category-tabs")).toContainText("Agents");
  const names = await page.locator(".card-title-row h3").allTextContents();
  expect(names).toHaveLength(components.length);
  expect(names.every((name) => /[A-Za-z]/.test(name) && !/\p{Script=Han}/u.test(name))).toBe(true);
  const composerCard = page.locator(".component-card").filter({ has: page.locator(".card-title-row h3", { hasText: "Chat Composer" }) });
  await expect(composerCard.getByRole("textbox", { name: "Message the assistant", exact: true })).toHaveAttribute("placeholder", "What would you like to build?");
  await expect(page.locator(".component-card").filter({ has: page.locator(".clarification-card") }).getByRole("button", { name: "Next", exact: true })).toBeVisible();
  await page.goto("/#/icons");
  const tiles = page.locator(".icon-gallery-tile");
  await expect(tiles).toHaveCount(141);
  const labels = await page.locator(".icon-gallery-tile-name").allTextContents();
  expect(labels.every((label) => /[A-Za-z]/.test(label) && !/\p{Script=Han}/u.test(label))).toBe(true);
  const search = page.getByRole("searchbox", { name: "Search icons", exact: true });
  await search.fill("Delete");
  await expect(tiles).toHaveCount(1);
  await expect(page.getByRole("button", { name: "View Delete source", exact: true })).toBeVisible();
  await search.fill("trash");
  await expect(tiles).toHaveCount(1);
  await expect(page.getByRole("button", { name: "View Delete source", exact: true })).toBeVisible();
});
