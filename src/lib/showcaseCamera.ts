export const SHOWCASE_DURATION = 22000;

type Styles = Record<string, string | number>;
type Layer = {
  node: HTMLElement;
  properties: string[];
  original: Map<string, { value: string; priority: string }>;
  animation?: Animation;
};
type Rect = { x: number; y: number; width: number; height: number };
const ease = "cubic-bezier(.22,.75,.16,1)";
const cssName = (name: string) => name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
const frame = (at: number, styles: Styles): Keyframe => ({ ...styles, offset: at / SHOWCASE_DURATION, easing: ease });

/** A single demo clock directs the actual bubble, window and answer; no cloned UI. */
export function createShowcaseCamera(element: HTMLElement, reducedMotion: () => boolean) {
  const viewport = element.parentElement!;
  const layers = new Map<string, Layer>();
  let held = false;
  let returning = false;
  let time = SHOWCASE_DURATION;
  let compact = window.innerWidth <= 700;
  let questionNode: HTMLElement | null = null;
  let question: Rect | undefined;
  let cameraFrames: Keyframe[] | undefined;

  function restore(layer: Layer) {
    layer.original.forEach(({ value, priority }, property) => {
      if (value) layer.node.style.setProperty(property, value, priority);
      else layer.node.style.removeProperty(property);
    });
  }
  function cancelAll(restoreStyles: boolean) {
    layers.forEach(layer => {
      layer.animation?.cancel();
      layer.animation = undefined;
      if (restoreStyles) restore(layer);
    });
  }
  function bind(name: string, node: HTMLElement | null, frames: Keyframe[]) {
    const previous = layers.get(name);
    if (previous?.node === node) return;
    if (previous) { previous.animation?.cancel(); restore(previous); layers.delete(name); }
    if (!node) return;
    const properties = [...new Set(frames.flatMap(value => Object.keys(value)
      .filter(key => !["offset", "easing", "composite"].includes(key)).map(cssName)))];
    const original = new Map(properties.map(property => [property, {
      value: node.style.getPropertyValue(property), priority: node.style.getPropertyPriority(property),
    }]));
    const animation = node.animate(frames, { duration: SHOWCASE_DURATION, fill: "both" });
    animation.pause();
    animation.currentTime = time;
    layers.set(name, { node, properties, original, animation });
  }
  function localRect(node: HTMLElement): Rect {
    let x = 0, y = 0;
    for (let current: HTMLElement | null = node; current && current !== element; current = current.offsetParent as HTMLElement | null) {
      x += current.offsetLeft;
      y += current.offsetTop;
    }
    for (let current = node.parentElement; current && current !== element; current = current.parentElement) {
      x -= current.scrollLeft;
      y -= current.scrollTop;
    }
    return { x, y, width: node.offsetWidth, height: node.offsetHeight };
  }
  function buildCameraFrames() {
    const width = element.offsetWidth, height = element.offsetHeight;
    const vw = viewport.clientWidth, vh = viewport.clientHeight;
    const bubble = question ?? { x: width - 264, y: 60, width: 244, height: 47 };
    const zoom = Math.min(compact ? 1.45 : 2.15, (vw - (compact ? 36 : 100)) / bubble.width, (vh - 100) / bubble.height);
    const intro = new DOMMatrix().translate(
      vw / 2 - (vw - width) / 2 - zoom * (bubble.x + bubble.width / 2),
      vh * .48 - (vh - height) / 2 - zoom * (bubble.y + bubble.height / 2),
    ).scale(zoom).toString();
    const process = "none";
    return [frame(0, { transform: intro, opacity: 0 }), frame(300, { transform: intro, opacity: 1 }),
      frame(1350, { transform: intro, opacity: 1 }), frame(2400, { transform: process, opacity: 1 }),
      frame(7400, { transform: process, opacity: 1 }),
      frame(8500, { transform: "none", opacity: 1 }), frame(SHOWCASE_DURATION, { transform: "none", opacity: 1 })];
  }
  function chromeFrames(baseOpacity: number) {
    return [frame(0, { opacity: 0, filter: "blur(0px)" }), frame(1500, { opacity: 0, filter: "blur(0px)" }),
      frame(2400, { opacity: 1, filter: "blur(0px)" }), frame(4200, { opacity: 1, filter: "blur(0px)" }),
      frame(5300, { opacity: baseOpacity, filter: "blur(3px)" }), frame(7400, { opacity: baseOpacity, filter: "blur(3px)" }),
      frame(8500, { opacity: 1, filter: "blur(0px)" }), frame(SHOWCASE_DURATION, { opacity: 1, filter: "blur(0px)" })];
  }
  function sync() {
    const bubble = element.querySelector<HTMLElement>('[data-message-id$="-sample-user"] .user-bubble');
    if (bubble && time < 1350) {
      const rect = localRect(bubble);
      if (bubble !== questionNode || !question || rect.x !== question.x || rect.y !== question.y
        || rect.width !== question.width || rect.height !== question.height) {
        questionNode = bubble;
        question = rect;
        cameraFrames = buildCameraFrames();
        (layers.get("camera")?.animation?.effect as KeyframeEffect | null)?.setKeyframes(cameraFrames);
      }
    }
    cameraFrames ??= buildCameraFrames();
    bind("camera", element, cameraFrames);
    const chatWindow = element.querySelector<HTMLElement>(".home-chat-window");
    if (chatWindow && !layers.has("window")) {
      const style = getComputedStyle(chatWindow);
      bind("window", chatWindow, [frame(0, { borderColor: "transparent", boxShadow: "0 0 0 0 transparent" }),
        frame(1450, { borderColor: "transparent", boxShadow: "0 0 0 0 transparent" }),
        frame(2400, { borderColor: style.borderTopColor, boxShadow: style.boxShadow }),
        frame(11900, { borderColor: style.borderTopColor, boxShadow: style.boxShadow }),
        frame(13100, { borderColor: "transparent", boxShadow: "0 0 0 0 transparent" }),
        frame(SHOWCASE_DURATION, { borderColor: "transparent", boxShadow: "0 0 0 0 transparent" })]);
    }
    bind("bar", element.querySelector(".home-chat-window-bar"), chromeFrames(.35));
    bind("composer", element.querySelector(".conversation-bottom"), chromeFrames(.27));
    const user = element.querySelector<HTMLElement>('[data-message-id$="-sample-user"]');
    bind("user", user, [frame(0, { opacity: 1, filter: "blur(0px)" }), frame(4200, { opacity: 1, filter: "blur(0px)" }),
      frame(5300, { opacity: .32, filter: "blur(2px)" }), frame(7400, { opacity: .32, filter: "blur(2px)" }),
      frame(8500, { opacity: 1, filter: "blur(0px)" }), frame(SHOWCASE_DURATION, { opacity: 1, filter: "blur(0px)" })]);
    bind("question-text", bubble?.querySelector(".conversation-prose") ?? null, [
      frame(0, { clipPath: "inset(0 100% 0 0)" }), frame(180, { clipPath: "inset(0 100% 0 0)" }),
      frame(850, { clipPath: "inset(0 0% 0 0)" }), frame(SHOWCASE_DURATION, { clipPath: "inset(0 0% 0 0)" })]);
    const assistant = element.querySelector<HTMLElement>('[data-message-id$="-sample-assistant"]');
    // Keep the real answer at its normal size and orientation; only its surroundings recede.
    bind("answer", assistant, [frame(0, { opacity: 1, filter: "blur(0px)" }),
      frame(SHOWCASE_DURATION, { opacity: 1, filter: "blur(0px)" })]);
    const vw = viewport.clientWidth;
    const overlay = window.innerWidth <= 900;
    const closedWidth = Math.min(760, vw - (compact ? 16 : 0));
    const openWidth = overlay ? Math.min(760, vw - 16) : 440;
    const closed = { width: `${closedWidth}px`, marginRight: `${(vw - closedWidth) / 2}px`, opacity: 1, visibility: "visible" };
    const opened = { width: `${openWidth}px`, marginRight: `${overlay ? (vw - openWidth) / 2 : vw - openWidth}px`, opacity: overlay ? 0 : 1, visibility: overlay ? "hidden" : "visible" };
    bind("workspace-window", chatWindow, [frame(0, closed), frame(11900, closed),
      frame(13100, opened), frame(SHOWCASE_DURATION, opened)]);
    bind("workspace-preview", element.querySelector(".home-workspace-preview"), [
      frame(0, { opacity: 0, transform: "translateX(32px)", visibility: "hidden" }),
      frame(11899, { opacity: 0, transform: "translateX(32px)", visibility: "hidden" }),
      frame(11900, { opacity: 0, transform: "translateX(32px)", visibility: "visible" }),
      frame(13100, { opacity: 1, transform: "none", visibility: "visible" }),
      frame(SHOWCASE_DURATION, { opacity: 1, transform: "none", visibility: "visible" }),
    ]);
    layers.forEach((layer, name) => {
      if (!layer.node.isConnected) { layer.animation?.cancel(); restore(layer); layers.delete(name); }
    });
  }
  function seek(elapsed: number) {
    time = Math.min(SHOWCASE_DURATION, Math.max(0, elapsed));
    if (held) return;
    if (reducedMotion()) { reset(); return; }
    if (returning) { cancelAll(true); layers.clear(); returning = false; }
    element.dataset.cameraScene = time < 1350 ? "question-closeup" : time < 2400 ? "reveal" : time < 4200 ? "process" : time < 5600 ? "focus" : time < 7400 ? "answer" : time < 8500 ? "return" : time < 11900 ? "conversation" : time < 13100 ? "open-preview" : "preview";
    sync();
    layers.forEach(layer => { if (layer.animation) layer.animation.currentTime = time; });
    element.dataset.cameraTime = `${Math.round(time)}`;
    element.dataset.cameraState = time === SHOWCASE_DURATION ? "complete" : "tracking";
  }
  function snapshots() {
    return [...layers.values()].filter(layer => layer.node.isConnected).map(layer => {
      const style = getComputedStyle(layer.node);
      return { layer, styles: Object.fromEntries(layer.properties.map(property => [property, style.getPropertyValue(property)])) };
    });
  }
  function hold() {
    const frozen = snapshots();
    cancelAll(false);
    frozen.forEach(({ layer, styles }) => Object.entries(styles).forEach(([property, value]) => layer.node.style.setProperty(property, value)));
    held = true;
    returning = false;
    element.dataset.cameraState = "held";
  }
  function release() {
    if (!held) return;
    const frozen = snapshots();
    cancelAll(true);
    layers.forEach(layer => layer.node.getAnimations().forEach(animation => {
      if (animation instanceof CSSTransition) { try { animation.finish(); } catch { animation.cancel(); } }
    }));
    held = false;
    if (reducedMotion()) { reset(); return; }
    returning = true;
    element.dataset.cameraState = "returning";
    let remaining = frozen.length;
    if (!remaining) { reset(); return; }
    frozen.forEach(({ layer, styles }) => {
      const target = getComputedStyle(layer.node);
      const end = Object.fromEntries(layer.properties.map(property => [property, target.getPropertyValue(property)]));
      layer.animation = layer.node.animate([styles, end], { duration: 380, easing: ease });
      layer.animation.onfinish = () => {
        if (--remaining === 0) {
          layers.clear();
          returning = false;
          element.dataset.cameraState = "idle";
        }
      };
    });
  }
  function reset() {
    cancelAll(true);
    layers.clear();
    held = false;
    returning = false;
    cameraFrames = undefined;
    questionNode = null;
    question = undefined;
    element.dataset.cameraTime = `${Math.round(time)}`;
    element.dataset.cameraState = "idle";
  }
  function replay() { reset(); seek(0); }
  function resize() {
    const elapsed = time;
    const wasHeld = held || returning;
    reset();
    compact = window.innerWidth <= 700;
    if (!wasHeld) seek(elapsed);
  }
  return { seek, hold, release, reset, replay, resize, destroy: reset };
}
