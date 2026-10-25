import { expect, test, type Locator, type Page } from "@playwright/test";

test.use({ viewport: { width: 1440, height: 1000 } });

async function openShowcase(page: Page) {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  const clockStart = new Date("2026-01-01T00:00:00Z");
  await page.clock.install({ time: clockStart });
  await page.clock.pauseAt(new Date(clockStart.getTime() + 1000));
  await page.goto("/#/");
  const canvas = page.locator(".home-chat-canvas");
  await canvas.scrollIntoViewIfNeeded();
  await expect(canvas).toHaveAttribute("data-playback", "playing");
  return { canvas, camera: canvas.locator(".home-chat-camera"), demo: canvas.locator(".chat-conversation-demo") };
}

async function advanceTo(page: Page, camera: Locator, elapsed: number) {
  const current = Number(await camera.getAttribute("data-camera-time"));
  // Include one frame so assertions read a rendered seek, rather than a timer
  // callback just before its corresponding requestAnimationFrame.
  await page.clock.runFor(Math.max(0, elapsed - current) + 20);
}

async function cameraPose(camera: Locator) {
  return camera.evaluate(element => {
    const transform = getComputedStyle(element).transform;
    const matrix = new DOMMatrixReadOnly(transform === "none" ? undefined : transform);
    return {
      transform,
      elapsed: Number((element as HTMLElement).dataset.cameraTime),
      x: matrix.m41,
      y: matrix.m42,
      scale: Math.hypot(matrix.m11, matrix.m12, matrix.m13),
    };
  });
}

async function scenePose(canvas: Locator) {
  return canvas.evaluate(element => [
    ".home-chat-camera", ".home-chat-window", ".home-chat-window-bar",
    ".chat-conversation", ".conversation-bottom", ".message-user", ".user-bubble", ".message-assistant",
  ].map(selector => {
    const target = element.querySelector(selector);
    if (!target) return { selector, missing: true };
    const style = getComputedStyle(target);
    return {
      selector,
      transform: style.transform,
      opacity: style.opacity,
      filter: style.filter,
      background: style.backgroundColor,
      border: style.borderTopColor,
      shadow: style.boxShadow,
    };
  }));
}

async function expectInFrame(subject: Locator, frame: Locator) {
  await expect(subject).toBeVisible();
  const bounds = await subject.boundingBox();
  const viewport = await frame.boundingBox();
  expect(bounds).not.toBeNull();
  expect(viewport).not.toBeNull();
  // A transformed bounding box encloses all four projected corners. Shadows
  // are intentionally excluded; only the subject must remain readable.
  expect(bounds!.x).toBeGreaterThanOrEqual(viewport!.x - 1);
  expect(bounds!.y).toBeGreaterThanOrEqual(viewport!.y - 1);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(viewport!.x + viewport!.width + 1);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(viewport!.y + viewport!.height + 1);
}

async function expectReadingHold(page: Page, canvas: Locator, camera: Locator, at: number, duration = 300) {
  await advanceTo(page, camera, at);
  // The demo clock seeks camera tracks, while a newly sent bubble uses native
  // document time. Settle only that arrival before measuring the reading hold.
  await canvas.evaluate(element => element.getAnimations({ subtree: true })
    .filter(animation => animation.id === "message-send-arrival").forEach(animation => animation.finish()));
  const pose = await scenePose(canvas);
  await page.clock.runFor(duration);
  expect(await scenePose(canvas)).toEqual(pose);
}

async function expectNaturalAnswer(canvas: Locator) {
  const scene = await canvas.evaluate(element => {
    const chatWindow = element.querySelector<HTMLElement>(".home-chat-window")!;
    const assistant = element.querySelector<HTMLElement>(".message-assistant")!;
    const style = getComputedStyle(assistant);
    return {
      layers: [element.querySelector(".home-chat-camera")!, chatWindow, assistant].map(node => {
        const computed = getComputedStyle(node);
        const matrix = new DOMMatrixReadOnly(computed.transform === "none" ? undefined : computed.transform);
        return { is2D: matrix.is2D, skewX: matrix.m21, skewY: matrix.m12, scaleX: matrix.m11, scaleY: matrix.m22, rotate: computed.rotate };
      }),
      relativeScale: (assistant.getBoundingClientRect().width / assistant.offsetWidth)
        / (chatWindow.getBoundingClientRect().width / chatWindow.offsetWidth),
      assistant: {
        transform: style.transform, scale: style.scale, shadow: style.boxShadow,
        background: style.backgroundColor, radius: style.borderRadius,
      },
    };
  });
  for (const layer of scene.layers) {
    expect(layer.is2D).toBe(true);
    expect(layer.rotate).toBe("none");
    expect(Math.abs(layer.skewX)).toBeLessThan(.000001);
    expect(Math.abs(layer.skewY)).toBeLessThan(.000001);
    expect(layer.scaleX).toBeGreaterThan(0);
    expect(layer.scaleX).toBeCloseTo(layer.scaleY, 6);
  }
  // The answer inherits the window's fit, with no independent enlargement or card skin.
  expect(scene.relativeScale).toBeCloseTo(1, 2);
  expect(scene.assistant).toEqual({
    transform: "none", scale: "none", shadow: "none",
    background: "rgba(0, 0, 0, 0)", radius: "0px",
  });
}

async function rememberConversation(demo: Locator) {
  await demo.evaluate(element => {
    Object.assign(window, {
      cameraTestCore: element.querySelector(".chat-conversation"),
      cameraTestInput: element.querySelector("textarea[aria-label=\"Message\"]"),
      cameraTestUser: element.querySelector(".message-user"),
    });
  });
}

async function expectSameConversation(demo: Locator) {
  expect(await demo.evaluate(element => {
    const saved = window as unknown as Record<string, Element>;
    return element.querySelector(".chat-conversation") === saved.cameraTestCore
      && element.querySelector("textarea[aria-label=\"Message\"]") === saved.cameraTestInput
      && element.querySelector(".message-user") === saved.cameraTestUser;
  })).toBe(true);
}

test("the real bubble and answer stay readable while the window and answer retain their natural orientation and proportions", async ({ page }) => {
  const { canvas, camera, demo } = await openShowcase(page);
  const frame = canvas.locator(".home-chat-viewport");
  const chatWindow = canvas.locator(".home-chat-window");
  const bubble = demo.locator(".user-bubble").first();
  await expect(page.getByText("从一句话，开始。", { exact: true })).toHaveCount(0);

  await advanceTo(page, camera, 1000);
  await expect(canvas).toHaveAttribute("data-shot", "question");
  await expectInFrame(bubble, frame);
  const opening = await bubble.evaluate(element => {
    const rect = element.getBoundingClientRect();
    const viewport = element.closest(".home-chat-viewport")!.getBoundingClientRect();
    return {
      magnification: rect.width / (element as HTMLElement).offsetWidth,
      offsetX: rect.x + rect.width / 2 - viewport.x - viewport.width / 2,
      offsetY: rect.y + rect.height / 2 - viewport.y - viewport.height / 2,
    };
  });
  expect(opening.magnification).toBeGreaterThan(1.8);
  expect(Math.abs(opening.offsetX)).toBeLessThan(24);
  expect(Math.abs(opening.offsetY)).toBeLessThan(24);
  for (const chrome of [canvas.locator(".home-chat-window-bar"), demo.locator(".conversation-bottom")]) {
    expect(await chrome.evaluate(element => Number(getComputedStyle(element).opacity))).toBeLessThan(.05);
  }
  await rememberConversation(demo);
  // The opening hold ends at 1350ms, so sample wholly within its reading time.
  await expectReadingHold(page, canvas, camera, 1000, 220);

  await advanceTo(page, camera, 3500);
  await expect(canvas).toHaveAttribute("data-shot", "process");
  await expectInFrame(chatWindow, frame);
  await expectInFrame(demo.locator('.tools-block[data-state="running"] > .tools-toggle'), frame);
  await expectNaturalAnswer(canvas);
  await demo.locator('[data-message-id$="-sample-assistant"]').evaluate(element => {
    (window as unknown as Record<string, Element>).cameraTestAssistant = element;
  });
  await expectReadingHold(page, canvas, camera, 3600);

  await advanceTo(page, camera, 5000);
  await expectNaturalAnswer(canvas);

  await advanceTo(page, camera, 6500);
  await expect(canvas).toHaveAttribute("data-shot", "answer");
  const answer = demo.locator('[data-message-id$="-sample-assistant"] [data-block-kind="message"] .conversation-prose').last();
  await expect(answer).toContainText("Keep the body readable, then refine the space between headings and paragraphs.");
  await expectInFrame(answer, frame);
  await expectNaturalAnswer(canvas);
  const focus = await demo.evaluate(element => {
    const assistant = getComputedStyle(element.querySelector(".message-assistant")!);
    const composer = getComputedStyle(element.querySelector(".conversation-bottom")!);
    return {
      assistant: { transform: assistant.transform, opacity: Number(assistant.opacity), filter: assistant.filter },
      composer: { transform: composer.transform, opacity: Number(composer.opacity), filter: composer.filter },
    };
  });
  expect(focus.assistant.opacity).toBeGreaterThan(focus.composer.opacity);
  expect(focus.assistant.filter).not.toBe(focus.composer.filter);
  await expectReadingHold(page, canvas, camera, 6800);

  await advanceTo(page, camera, 8700);
  await expect(canvas).toHaveAttribute("data-shot", "answer");
  expect((await cameraPose(camera)).transform).toBe("none");
  await expectInFrame(chatWindow, frame);
  expect(await demo.locator(".conversation-bottom").evaluate(element => getComputedStyle(element).opacity)).toBe("1");
  await expect(demo.locator(".message-user")).toHaveCount(3);

  await advanceTo(page, camera, 22060);
  await expect(canvas).toHaveAttribute("data-playback", "complete");
  await expect(demo.locator(".message-user")).toHaveCount(4);
  await expect(demo.locator(".message-assistant")).toHaveCount(3);
  await expectSameConversation(demo);
  expect(await demo.locator('[data-message-id$="-sample-assistant"]').evaluate(element =>
    element === (window as unknown as Record<string, Element>).cameraTestAssistant,
  )).toBe(true);
  await expect(demo.locator('[data-message-id$="-sample-assistant"]').getByRole("button", { name: /Process/ })).toHaveAttribute("aria-expanded", "false");
});

test("pause freezes every rendered layer, camera time and shot bars, then resumes from that time", async ({ page }) => {
  const { canvas, camera, demo } = await openShowcase(page);
  await advanceTo(page, camera, 1800);
  await rememberConversation(demo);
  await canvas.getByRole("button", { name: "Pause chat demo", exact: true }).click();
  await expect(canvas).toHaveAttribute("data-playback", "paused");
  const paused = await cameraPose(camera);
  const layers = await scenePose(canvas);
  const bars = await canvas.locator(".home-chat-shots i").evaluateAll(elements =>
    elements.map(element => getComputedStyle(element).transform),
  );
  await page.clock.runFor(1700);
  expect(await cameraPose(camera)).toEqual(paused);
  expect(await scenePose(canvas)).toEqual(layers);
  expect(await canvas.locator(".home-chat-shots i").evaluateAll(elements =>
    elements.map(element => getComputedStyle(element).transform),
  )).toEqual(bars);

  await canvas.getByRole("button", { name: "Resume chat demo", exact: true }).click();
  await page.clock.runFor(700);
  const resumed = await cameraPose(camera);
  expect(resumed.elapsed - paused.elapsed).toBeGreaterThanOrEqual(670);
  expect(resumed.elapsed - paused.elapsed).toBeLessThanOrEqual(730);
  expect(resumed.transform).not.toBe(paused.transform);
  await expect(canvas).toHaveAttribute("data-playback", "playing");
  await expectSameConversation(demo);
});

test("a real pointer holds its tool target until activation, then the camera returns while details and drafts remain", async ({ page }) => {
  const { canvas, camera, demo } = await openShowcase(page);
  await advanceTo(page, camera, 4500);
  await rememberConversation(demo);
  const group = demo.locator(".tools-block > .tools-toggle");
  await expect(demo.locator(".tools-block")).toHaveAttribute("data-state", "running");
  await expect(group).toHaveAttribute("aria-expanded", "false");
  const bounds = await group.boundingBox();
  expect(bounds).not.toBeNull();

  // Use a native down/up pair: programmatic click would omit the pointer hold
  // and would not verify that a moving target remains under the pointer.
  await page.mouse.move(bounds!.x + bounds!.width / 2, bounds!.y + bounds!.height / 2);
  await page.mouse.down();
  await page.clock.resume();
  await expect(camera).toHaveAttribute("data-camera-state", "held");
  const held = await cameraPose(camera);
  const heldLayers = await scenePose(canvas);
  await page.waitForTimeout(120);
  expect(await cameraPose(camera)).toEqual(held);
  expect(await scenePose(canvas)).toEqual(heldLayers);
  await page.mouse.up();
  await expect(group).toHaveAttribute("aria-expanded", "true");
  await expect(canvas).toHaveAttribute("data-playback", "stopped");
  await expect(camera).toHaveAttribute("data-camera-state", "idle");
  expect((await cameraPose(camera)).transform).toBe("none");

  const tool = demo.locator("button.tool-row").filter({ hasText: "Read page styles" });
  await tool.click();
  await expect(tool).toHaveAttribute("aria-expanded", "true");
  await expect(demo.locator(".tool-output")).toContainText("src/styles.css");
  const input = demo.getByRole("textbox", { name: "Message", exact: true });
  await input.fill("镜头回正后保留的真实草稿");
  await expect(camera).toHaveAttribute("data-camera-state", "idle");
  await page.waitForTimeout(500);
  await expect(input).toHaveValue("镜头回正后保留的真实草稿");
  await expect(tool).toHaveAttribute("aria-expanded", "true");
  await expect(canvas).toHaveAttribute("data-playback", "stopped");
  await expectSameConversation(demo);
});

test("scrolling the transcript stops playback and restores the surrounding controls from defocus", async ({ page }) => {
  const { canvas, camera, demo } = await openShowcase(page);
  await advanceTo(page, camera, 4500);
  await rememberConversation(demo);
  const composer = demo.locator(".conversation-bottom");
  expect(await composer.evaluate(element => Number(getComputedStyle(element).opacity))).toBeLessThan(1);
  expect(await composer.evaluate(element => getComputedStyle(element).filter)).not.toMatch(/^(none|blur\(0px\))$/);
  const transcript = demo.locator(".conversation-scroller");
  const bounds = await transcript.boundingBox();
  expect(bounds).not.toBeNull();
  await page.mouse.move(bounds!.x + bounds!.width / 2, bounds!.y + bounds!.height / 2);
  await page.clock.resume();
  await page.mouse.wheel(0, 70);
  await expect(canvas).toHaveAttribute("data-playback", "stopped");
  await expect(camera).toHaveAttribute("data-camera-state", "idle");
  expect((await cameraPose(camera)).transform).toBe("none");
  await expect(composer).toHaveCSS("opacity", "1");
  await expect(composer).toHaveCSS("filter", "none");
  const stoppedTime = await camera.getAttribute("data-camera-time");
  const stoppedText = await demo.locator(".conversation-transcript").innerText();
  await page.waitForTimeout(500);
  await expect(camera).toHaveAttribute("data-camera-time", stoppedTime!);
  expect(await demo.locator(".conversation-transcript").innerText()).toBe(stoppedText);
  await expect(demo.locator(".working-icon, .generation-status")).toHaveCount(0);
  await expectSameConversation(demo);
});

test("stopping a replay with an unsent draft never activates send or clears the draft and attachment", async ({ page }) => {
  const { canvas, camera, demo } = await openShowcase(page);
  await advanceTo(page, camera, 3500);
  const input = demo.getByRole("textbox", { name: "Message", exact: true });
  await input.fill("保留这条尚未发送的消息");
  await demo.getByLabel("Choose files", { exact: true }).setInputFiles({
    name: "draft.txt", mimeType: "text/plain", buffer: Buffer.from("未发送附件"),
  });
  await canvas.getByRole("button", { name: "Play chat demo", exact: true }).click();
  await advanceTo(page, camera, 3900);
  await expect(canvas).toHaveAttribute("data-playback", "playing");
  await expect(input).toHaveValue("保留这条尚未发送的消息");
  const primary = demo.locator(".composer-primary");
  await expect(primary).toHaveAttribute("aria-label", "Stop generating");
  const bounds = await primary.boundingBox();
  expect(bounds).not.toBeNull();
  const users = await demo.locator(".message-user").count();

  await page.mouse.move(bounds!.x + bounds!.width / 2, bounds!.y + bounds!.height / 2);
  await page.mouse.down();
  // Native mousedown also focuses the button. Neither capture nor focus may
  // morph stop into send before the matching click reaches the primary action.
  await expect(primary).toHaveAttribute("aria-label", "Stop generating");
  await page.clock.resume();
  await page.mouse.up();
  await expect(canvas).toHaveAttribute("data-playback", "stopped");
  await expect(primary).toHaveAttribute("aria-label", "Send message");
  await expect(camera).toHaveAttribute("data-camera-state", "idle");
  await page.waitForTimeout(500);
  await expect(input).toHaveValue("保留这条尚未发送的消息");
  await expect(demo.locator(".pending-file")).toHaveCount(1);
  await expect(demo.locator(".message-user")).toHaveCount(users);
  await expect(demo.locator(".message-user").filter({ hasText: "保留这条尚未发送的消息" })).toHaveCount(0);
  await expect(demo.locator(".working-icon, .generation-status")).toHaveCount(0);
});

test("mobile keeps each shot's subject readable, restores composer controls and respects reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const { canvas, camera, demo } = await openShowcase(page);
  const frame = canvas.locator(".home-chat-viewport");
  for (const [elapsed, shot] of [[1000, "question"], [3500, "process"], [5000, "process"], [6500, "answer"], [8700, "answer"]] as const) {
    await advanceTo(page, camera, elapsed);
    await expect(canvas).toHaveAttribute("data-shot", shot);
    if (shot === "question") await expectInFrame(demo.locator(".user-bubble").first(), frame);
    else if (elapsed === 6500) {
      await expectInFrame(demo.locator('[data-message-id$="-sample-assistant"] [data-block-kind="message"] .conversation-prose').last(), frame);
      await expect(demo.locator(".jump-latest")).toBeHidden();
    }
    else await expectInFrame(canvas.locator(".home-chat-window"), frame);
    if (shot !== "question") await expectNaturalAnswer(canvas);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  }
  const positions = await canvas.evaluate(element => {
    const viewport = element.querySelector(".home-chat-viewport")!.getBoundingClientRect();
    const input = element.querySelector("textarea")!.getBoundingClientRect();
    const action = element.querySelector(".composer-primary")!.getBoundingClientRect();
    return { top: viewport.top, bottom: viewport.bottom, inputTop: input.top, inputBottom: input.bottom, actionTop: action.top, actionBottom: action.bottom };
  });
  expect(positions.inputTop).toBeGreaterThanOrEqual(positions.top);
  expect(positions.inputBottom).toBeLessThanOrEqual(positions.bottom);
  expect(positions.actionTop).toBeGreaterThanOrEqual(positions.top);
  expect(positions.actionBottom).toBeLessThanOrEqual(positions.bottom);

  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(canvas).toHaveAttribute("data-playback", "complete");
  await canvas.getByRole("button", { name: "Play chat demo", exact: true }).click();
  await page.clock.runFor(900);
  await expect(canvas).toHaveAttribute("data-playback", "complete");
  expect((await cameraPose(camera)).transform).toBe("none");
  expect(await camera.evaluate(element => element.getAnimations().length)).toBe(0);
  await expect(demo.locator(".working-icon, .generation-status")).toHaveCount(0);
});
