import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";

test("home exposes the actual chat conversation and opens its component page", async ({ page }) => {
  await page.goto("/#/");
  const chat = page.locator(".home-chat-canvas");
  const input = chat.getByRole("textbox", { name: "Message", exact: true });
  await expect(input).toBeVisible();
  await input.fill("把首页做成清晰的两栏布局");
  await input.press("Enter");
  await expect(chat.getByText("把首页做成清晰的两栏布局", { exact: true })).toBeVisible();
  await expect(input).toHaveValue("");
  await page.locator(".home-chat-heading").getByRole("link", { name: /View component/ }).click();
  await expect(page).toHaveURL(/#\/components\/chat-conversation$/);
  await expect(page.locator(".detail-heading h1")).toContainText("Chat Conversation");
  await expect(page.locator(".large-demo").getByRole("textbox", { name: "Message", exact: true })).toBeVisible();
});

test("chat source is complete, copied exactly, and inspecting it retains a real draft", async ({ page }) => {
  await page.goto("/#/components/chat-conversation");
  const input = page.locator(".large-demo").getByRole("textbox", { name: "Message", exact: true });
  await input.fill("切换源码时保留这段草稿");
  await page.locator(".preview-tabs").getByRole("tab", { name: "Source", exact: true }).click();
  await expect(page.locator(".source-filename")).toHaveText("ChatConversation.vue");
  await page.getByRole("button", { name: "Copy code", exact: true }).click();
  const source = readFileSync(new URL("../src/components/ui/ChatConversation.vue", import.meta.url), "utf8");
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(source);
  expect(source).not.toMatch(/(?:from\s*|import\s*\()["']\.{1,2}\//);
  await page.locator(".preview-tabs").getByRole("tab", { name: "Preview", exact: true }).click();
  await expect(input).toHaveValue("切换源码时保留这段草稿");
});
