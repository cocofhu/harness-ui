import { expect, test } from "@playwright/test";

test("hero controls keep a primary landing-point cover and a stable readable ghost link", async ({ page }) => {
  await page.goto("/#/");
  await page.locator(".home-hero-actions").evaluate(element => Promise.all(element.getAnimations().map(animation => animation.finished)));
  for (const selector of [".home-primary", ".home-secondary"]) {
    const link = page.locator(selector);
    expect((await link.boundingBox())?.height).toBe(36);
    expect(await link.evaluate(element => getComputedStyle(element).fontSize)).toBe("14px");
    await expect(link).toHaveCSS("border-width", "0px");
    await expect(link).toHaveCSS("box-shadow", "none");
  }
  const primary = page.locator(".home-primary");
  const primaryLabel = primary.locator(":scope > span:not(.hover-ink)");
  const primaryFrame = async () => ({ button: await primary.boundingBox(), label: await primaryLabel.boundingBox(), svg: await primary.locator("svg").boundingBox() });
  const primaryBefore = await primaryFrame();
  await primary.hover({ position: { x: 12, y: 9 } });
  await expect(primary).toHaveClass(/is-hover-ink/);
  const geometry = await primary.evaluate(element => ({
    x: parseFloat((element as HTMLElement).style.getPropertyValue("--ink-x")),
    y: parseFloat((element as HTMLElement).style.getPropertyValue("--ink-y")),
    diameter: parseFloat((element as HTMLElement).style.getPropertyValue("--ink-d")),
    borderX: parseFloat(getComputedStyle(element).borderLeftWidth),
    borderY: parseFloat(getComputedStyle(element).borderTopWidth),
  }));
  expect(geometry.x).toBeCloseTo(12 + geometry.borderX, 0);
  expect(geometry.y).toBeCloseTo(9 + geometry.borderY, 0);
  expect(geometry.diameter).toBeCloseTo(Math.hypot(primaryBefore.button!.width - geometry.x, 36 - geometry.y) * 2, 1);
  await expect.poll(() => primary.locator(".hover-ink").evaluate(ink => new DOMMatrix(getComputedStyle(ink).transform).a)).toBe(1);
  expect(await primaryFrame()).toEqual(primaryBefore);
  await page.mouse.move(0, 0);
  await expect(primary).toHaveClass(/is-leave-ink/);
  await expect.poll(() => primary.evaluate(element => (element as HTMLElement).style.getPropertyValue("--ink-d"))).toBe("0px");
  await expect(primary).toHaveCSS("background-color", "rgb(123, 97, 255)");

  const secondary = page.locator(".home-secondary");
  const secondaryLabel = secondary.locator(":scope > span:not(.hover-ink)");
  const secondaryFrame = async () => ({ button: await secondary.boundingBox(), label: await secondaryLabel.boundingBox(), svg: await secondary.locator("svg").boundingBox() });
  const secondaryBefore = await secondaryFrame();
  await expect(secondary).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await secondary.hover({ position: { x: 12, y: 9 } });
  await expect(secondary).not.toHaveClass(/is-hover-ink/);
  await expect(secondary.locator(".hover-ink")).toHaveCSS("width", "0px");
  const textColor = await page.locator(".home-hero h1").evaluate(element => getComputedStyle(element).color);
  await expect(secondary).toHaveCSS("color", textColor);
  await expect(secondaryLabel).toBeVisible();
  await expect(secondaryLabel).toHaveText("Browse components");
  expect(await secondaryFrame()).toEqual(secondaryBefore);
});

test("hero controls keep keyboard focus and reduced motion navigation on mobile", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  const repositoryUrl = "https://github.com/cocofhu/harness-ui";
  await page.context().route(repositoryUrl, route => route.fulfill({
    contentType: "text/html",
    body: "<!doctype html><html><head><title>Harness UI repository</title></head><body>Repository</body></html>",
  }));
  await page.goto("/#/");
  const primary = page.locator(".home-primary");
  const secondary = page.locator(".home-secondary");
  await primary.focus();
  await expect(primary).toBeFocused();
  expect(await primary.evaluate(element => element.matches(":focus-visible"))).toBe(true);
  await expect(primary).toHaveCSS("outline-style", "solid");
  await expect(primary).toHaveCSS("outline-width", "2px");
  expect(await primary.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
  await primary.press("Tab");
  await expect(secondary).toBeFocused();
  expect(await secondary.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await secondary.press("Enter");
  await expect(page).toHaveURL(/#\/components$/);
  await page.goto("/#/");
  const [repository] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator(".home-primary").click(),
  ]);
  await expect(repository).toHaveURL(repositoryUrl);
  await expect(page).toHaveURL(/#\/$/);
  await expect(page.locator(".home-page")).toBeVisible();
  await repository.close();
});

test("home icons stay idle until a single glyph is hovered or clicked", async ({ page }) => {
  await page.goto("/#/");
  const board = page.locator(".home-icon-board");
  await board.scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1800);
  await expect(board.locator('svg[data-icon-motion="once"]')).toHaveCount(0);
  await expect(board.locator(".is-playing")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Play icon animation", exact: true })).toHaveCount(0);
  const cell = board.getByRole("button", { name: "Play Folder icon", exact: true });
  const before = { cell: await cell.boundingBox(), svg: await cell.locator("svg").boundingBox() };
  await cell.hover();
  await expect(cell.locator("svg")).toHaveAttribute("data-icon-motion", "once");
  await expect(board.locator('svg[data-icon-motion="once"]')).toHaveCount(1);
  await page.waitForTimeout(140);
  expect({ cell: await cell.boundingBox(), svg: await cell.locator("svg").boundingBox() }).toEqual(before);
  expect(await cell.locator("svg").evaluate(svg => svg.getAnimations().length)).toBe(0);
  await page.mouse.move(0, 0);
  await expect.poll(() => board.locator('svg[data-icon-motion="once"]').count()).toBe(0);
  await cell.click();
  await expect(board.locator(".is-playing")).toHaveCount(1);
  await expect(board.locator('svg[data-icon-motion="once"]')).toHaveCount(1);
});

test("home source switching preserves the real tab selection and copies its actual example", async ({ page }) => {
  await page.goto("/#/");
  const craft = page.locator(".home-craft-section");
  await craft.scrollIntoViewIfNeeded();
  const preview = page.locator("#home-preview-panel");
  const running = preview.getByRole("tab", { name: "Running", exact: true });
  await running.click();
  await expect(running).toHaveAttribute("aria-selected", "true");
  const height = await craft.locator(".craft-visual").evaluate(element => element.getBoundingClientRect().height);
  const sourceTab = craft.getByRole("tab", { name: "Source", exact: true });
  await sourceTab.click();
  await expect(page.locator("#home-source-panel")).toBeVisible();
  await expect(page.locator("#home-source-panel")).toContainText("import SlidingTabs");
  expect(await preview.evaluate(element => element.inert)).toBe(true);
  await page.getByRole("button", { name: "Copy usage example", exact: true }).click();
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain("<SlidingTabs />");
  await sourceTab.focus();
  await sourceTab.press("ArrowLeft");
  await expect(craft.getByRole("tab", { name: "Preview", exact: true })).toBeFocused();
  await expect(preview).toBeVisible();
  await expect(running).toHaveAttribute("aria-selected", "true");
  expect(await craft.locator(".craft-visual").evaluate(element => element.getBoundingClientRect().height)).toBeCloseTo(height, 2);
});

test("reduced motion keeps home icon playback static", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#/");
  await page.locator(".home-icon-board").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Play Folder icon", exact: true }).click();
  expect(await page.locator(".home-icon-board").evaluate(board => board.getAnimations({ subtree: true }).length)).toBe(0);
});
