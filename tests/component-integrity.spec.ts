import { expect, test } from "@playwright/test";

test("expanded components remain fully inside their canvas without a nested preview scrollbar", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#/components");
  const card = page.locator(".component-card").filter({ has: page.locator(".activity-timeline") });
  const canvas = card.locator(".card-stage");
  const before = await canvas.evaluate(element => element.getBoundingClientRect().height);
  await card.getByRole("button", { name: /Environment ready/ }).click();
  await card.getByRole("button", { name: /Thinking process/ }).click();
  await card.getByRole("button", { name: /Generate preview/ }).click();
  await expect(card.getByText("The preview server is not running. Start the project and try again.", { exact: true })).toBeVisible();
  expect(await canvas.evaluate(element => element.getBoundingClientRect().height)).toBeGreaterThan(before);
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const cropped = await page.locator(".component-card").evaluateAll(cards => cards.flatMap(card => {
      const holder = card.querySelector<HTMLElement>(".demo-holder")!;
      const component = holder.firstElementChild!;
      const stage = card.querySelector(".card-stage")!.getBoundingClientRect();
      const content = component.getBoundingClientRect();
      return holder.scrollHeight > holder.clientHeight + 1 || content.bottom > stage.bottom - 1 || content.top < stage.top || content.left < stage.left || content.right > stage.right
        ? [card.querySelector("h3")!.textContent] : [];
    }));
    expect(cropped).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});
