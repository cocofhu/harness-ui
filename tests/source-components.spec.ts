import { expect, test } from "@playwright/test";
import { createHash } from "node:crypto";
import type { Locator, Page } from "@playwright/test";

async function mountComponent(page: Page, name: string, props: Record<string, unknown>) {
  await page.goto("/#/");
  await page.evaluate(async ({ name, props }) => {
    const runtime = "/node_modules/.vite/deps/vue.js";
    const path = `/src/components/ui/${name}.vue`;
    const { createApp, h, reactive } = await import(runtime);
    const { default: component } = await import(path);
    const state = reactive(props);
    const events: Record<string, unknown[][]> = {};
    const app = document.querySelector<HTMLElement>("#app");
    if (app) app.style.display = "none";
    const root = document.createElement("main");
    root.id = "source-component-fixture";
    root.style.cssText = "position:fixed;inset:0;background:white;padding:60px;overflow:auto";
    document.body.append(root);
    createApp({
      render: () => h(component, {
        ...state,
        onSend: (...args: unknown[]) => (events.send ??= []).push(args),
      }),
    }).mount(root);
    Object.assign(window, { sourceFixture: { state, events } });
  }, { name, props });
  return page.locator("#source-component-fixture");
}

async function setProps(page: Page, props: Record<string, unknown>) {
  await page.evaluate(props => {
    Object.assign((window as unknown as { sourceFixture: { state: Record<string, unknown> } }).sourceFixture.state, props);
  }, props);
}

test("composer never sends a model removed from its available list", async ({ page }) => {
  const component = await mountComponent(page, "ChatComposer", {
    models: ["模型甲", "模型乙"], initialModel: "模型乙",
  });
  await expect(component.getByRole("button", { name: /Web search/ })).toHaveCount(0);
  await expect(component.getByRole("button", { name: "Select model", exact: true })).toContainText("模型乙");
  await setProps(page, { models: ["模型丙"] });
  await expect(component.getByRole("button", { name: "Select model", exact: true })).toContainText("模型丙");
  await component.getByRole("textbox").fill("  确认这份设计  ");
  await component.getByRole("button", { name: "Send message", exact: true }).click();
  expect(await page.evaluate(() => (window as any).sourceFixture.events.send[0][0]))
    .toMatchObject({ model: "模型丙", text: "确认这份设计" });
  expect(await page.evaluate(() => (window as any).sourceFixture.events.send[0][0]))
    .not.toHaveProperty("webSearch");
  await setProps(page, { models: [] });
  await expect(component.getByRole("button", { name: "Select model", exact: true })).toBeDisabled();
  await expect(component.getByRole("button", { name: "Select model", exact: true })).toContainText("No models");
  await component.getByRole("textbox").fill("不能使用不存在的模型发送");
  await expect(component.getByRole("button", { name: "Send message", exact: true })).toBeDisabled();
});

test("model selector handles removed options and does not invent connection metadata", async ({ page }) => {
  const component = await mountComponent(page, "ModelSelector", {
    modelValue: "a", options: [{ id: "a", name: "模型甲", provider: "提供商" }],
  });
  await expect(component).not.toContainText("Connected");
  await expect(component).not.toContainText("200K");
  await component.getByRole("button", { name: "Select model", exact: true }).click();
  await expect(component.getByRole("textbox", { name: "Search models" })).toBeVisible();
  await setProps(page, { options: [] });
  await expect(component.getByRole("button", { name: "Select model", exact: true })).toBeDisabled();
  await expect(component.getByRole("textbox", { name: "Search models" })).not.toBeVisible();
  await setProps(page, { options: [{ id: "b", name: "模型乙", provider: "提供商" }] });
  await expect(component.getByRole("button", { name: "Select model", exact: true })).toContainText("模型乙");
});


const providerAssetHashes: Record<string, string> = {
  claude: "2d6fda79eb18ddccca35b799eeb3cece0dfabc22520ce3b10abd25668df9fa93",
  openai: "7be72f1fea831d3ba81a545cee79b7e0ae69449d5d7837c9571ccbfb4aa1e00b",
  gemini: "8ab0a9bafec11f7e69bcb9fc4ffd8f1bc927d1ddcbbb6ff36dee5ae8b5a9d602",
  deepseek: "7a55a0a7391d116eba7d32807d6838478f9209f6034612941e74fbb14934e2ef",
};

async function expectProviderAsset(container: Locator, provider: string) {
  const mark = container.locator(`[data-provider-logo="${provider}"]`);
  await expect(mark).toBeVisible();
  const image = mark.locator("img");
  const source = await image.getAttribute("src");
  expect(source).toMatch(/^data:image\/svg\+xml;base64,/);
  expect(createHash("sha256").update(Buffer.from(source!.split(",")[1], "base64")).digest("hex"))
    .toBe(providerAssetHashes[provider]);
  await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
  return image;
}

for (const name of ["ChatComposer", "ChatConversation"]) {
  test(`${name} uses actual provider marks and keeps custom models neutral`, async ({ page }) => {
    const component = await mountComponent(page, name, {
      models: ["Claude Sonnet 4.6", "GPT-5.4", "Gemini 3.1 Pro", "私有模型"],
    });
    const trigger = component.getByRole("button", { name: "Select model", exact: true });
    await expectProviderAsset(trigger, "claude");
    await trigger.click();
    for (const [label, provider] of [["Claude Sonnet 4.6", "claude"], ["GPT-5.4", "openai"], ["Gemini 3.1 Pro", "gemini"]]) {
      await expectProviderAsset(page.getByRole("menuitemradio", { name: label, exact: true }), provider);
    }
    const custom = page.getByRole("menuitemradio", { name: "私有模型", exact: true });
    await expect(custom.locator('[data-provider-logo="unknown"]')).toBeVisible();
    await expect(custom.locator("img")).toHaveCount(0);
    await page.keyboard.press("ArrowDown");
    await expect(page.getByRole("menuitemradio", { name: "GPT-5.4", exact: true })).toBeFocused();
    await page.keyboard.press("Enter");
    const monochrome = await expectProviderAsset(trigger, "openai");
    await page.evaluate(() => document.documentElement.classList.add("dark"));
    await expect(monochrome).toHaveCSS("filter", "invert(1)");
    await trigger.click();
    await page.getByRole("menuitemradio", { name: "Gemini 3.1 Pro", exact: true }).click();
    const color = await expectProviderAsset(trigger, "gemini");
    await expect(color).toHaveCSS("filter", "none");
    await trigger.click();
    await page.getByRole("menuitemradio", { name: "私有模型", exact: true }).click();
    await expect(trigger.locator('[data-provider-logo="unknown"]')).toBeVisible();
    await expect(trigger.locator("img")).toHaveCount(0);
  });
}

test("model selector trusts the declared provider and does not brand a custom endpoint by its alias", async ({ page }) => {
  const component = await mountComponent(page, "ModelSelector", {
    modelValue: "private",
    options: [
      { id: "private", name: "GPT-5.4", provider: "私有服务" },
      { id: "claude", name: "工作模型", provider: "Anthropic" },
      { id: "openai", name: "推理模型", provider: "OpenAI" },
      { id: "gemini", name: "视觉模型", provider: "Google" },
      { id: "deepseek", name: "代码模型", provider: "DeepSeek" },
    ],
  });
  const trigger = component.getByRole("button", { name: "Select model", exact: true });
  await expect(trigger.locator('[data-provider-logo="unknown"]')).toBeVisible();
  await expect(trigger.locator("img")).toHaveCount(0);
  await trigger.click();
  for (const [label, provider] of [["工作模型", "claude"], ["推理模型", "openai"], ["视觉模型", "gemini"], ["代码模型", "deepseek"]]) {
    await expectProviderAsset(component.getByRole("option", { name: new RegExp(label) }), provider);
  }
  const search = component.getByRole("textbox", { name: "Search models" });
  await search.fill("工作模型");
  await search.press("Enter");
  const image = await expectProviderAsset(trigger, "claude");
  await page.evaluate(() => document.documentElement.classList.add("dark"));
  await expect(image).toHaveCSS("filter", "invert(1)");
});

for (const name of ["ChatComposer", "ChatConversation"]) {
  test(`${name} keeps the focused model visible in a long mobile menu`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const component = await mountComponent(page, name, {
      models: ["Claude Sonnet 4.6", ...Array.from({ length: 24 }, (_, index) => `私有模型 ${index + 1}`)],
    });
    await component.getByRole("button", { name: "Select model", exact: true }).click();
    await page.keyboard.press("End");
    const last = page.getByRole("menuitemradio", { name: "私有模型 24", exact: true });
    await expect(last).toBeFocused();
    await expect.poll(() => last.evaluate(element => {
      const item = element.getBoundingClientRect();
      const menu = element.parentElement!.getBoundingClientRect();
      return item.top >= menu.top - 1 && item.bottom <= menu.bottom + 1;
    })).toBe(true);
    await page.keyboard.press("Enter");
    const trigger = component.getByRole("button", { name: "Select model", exact: true });
    await expect(trigger).toBeFocused();
    await expect(trigger).toContainText("私有模型 24");
    await expect(trigger.locator('[data-provider-logo="unknown"]')).toBeVisible();
  });
}
