import { chromium, defineConfig, devices } from "@playwright/test";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

// Reuse an installed Chromium when this environment has a different browser revision.
const browserCache =
  process.env.PLAYWRIGHT_BROWSERS_PATH ||
  join(homedir(), ".cache", "ms-playwright");
const installedChromium = existsSync(browserCache)
  ? readdirSync(browserCache)
      .filter((name) => /^chromium-\d+$/.test(name))
      .sort()
      .reverse()
      .map((name) => join(browserCache, name, "chrome-linux64", "chrome"))
      .find((path) => existsSync(path))
  : undefined;
const executablePath =
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
  (existsSync(chromium.executablePath())
    ? chromium.executablePath()
    : installedChromium);

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 2 : 3,
  reporter: "list",
  timeout: 30_000,
  expect: { timeout: 7_000 },
  use: {
    baseURL: "http://127.0.0.1:5185",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    permissions: ["clipboard-read", "clipboard-write"],
    launchOptions: executablePath ? { executablePath } : {},
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
      },
    },
  ],
  webServer: {
    command: "npm run dev -- --port 5185 --strictPort",
    url: "http://127.0.0.1:5185",
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
