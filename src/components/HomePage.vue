<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { Github } from "lucide-vue-next";
import SlidingTabs from "./ui/SlidingTabs.vue";
import ChatConversationDemo from "./ChatConversationDemo.vue";
import WorkspaceDemoPreview from "./WorkspaceDemoPreview.vue";
import type { WorkspaceShowcaseStep } from "./WorkspaceDemoPreview.vue";
import type { ChatDemoState } from "./ChatConversationDemo.vue";
import AnimatedIcon from "./AnimatedIcon.vue";
import { vReveal } from "../lib/motion";
import { vHoverInk } from "../lib/hoverInkDirective";
import { copyText } from "../lib/storage";
import { iconEntries, iconLabel } from "../data/icons";
import { catalog } from "../data/catalog";
import { createShowcaseCamera, SHOWCASE_DURATION } from "../lib/showcaseCamera";

const emit = defineEmits<{
  notify: [message: string];
}>();
const chatDemo = ref<{ play: () => void; pause: () => void; resume: () => void; stop: () => void }>();
const workspaceDemo = ref<{ showcaseStep: (step: WorkspaceShowcaseStep) => void; showcaseTick: (elapsed: number) => void }>();
const previewOpen = ref(false);
const previewMounted = ref(false);
const chatDemoState = ref<ChatDemoState>("ready");
const cameraElement = ref<HTMLElement>();
const shotProgress = ref<HTMLElement>();
const currentShot = ref(3);
const activeIcon = ref("");
const individualEpochs = ref<Record<string, number>>({});
const craftMode = ref<"preview" | "source">("preview");
const craftTabs = ref<HTMLElement>();
const copied = ref(false);
const copyEpoch = ref(0);
const previewCompleted = ref(false);
const icons = ["folder", "copy", "robot", "workflow", "settings", "search", "terminal", "sun", "refresh"];
const animatedIconCount = iconEntries.filter(icon => icon.animated).length;
const snippet = `<script setup lang="ts">\nimport SlidingTabs from './ui/SlidingTabs.vue'\n<\/script>\n\n<template>\n  <SlidingTabs />\n</template>`;
let disposed = false;
let copyTimer: ReturnType<typeof setTimeout> | undefined;
let previewTimer: ReturnType<typeof setTimeout> | undefined;
let iconTimer: ReturnType<typeof setTimeout> | undefined;
let media: MediaQueryList | undefined;
let camera: ReturnType<typeof createShowcaseCamera> | undefined;
let lastElapsed = SHOWCASE_DURATION;
let cameraInteraction = false;
let releaseFrame = 0;
let releaseSecondFrame = 0;
let closeFocusFrame = 0;
let previewTrigger: HTMLElement | undefined;
const pausedAnimations = new Set<Animation>();
function pauseVisuals() {
  cameraElement.value?.getAnimations({ subtree: true }).forEach(animation => {
    if (animation.playState === "running") {
      animation.pause(); pausedAnimations.add(animation);
    }
  });
}

function settleTransitions(resume = false, includeRunning = true) {
  if (!resume && includeRunning) cameraElement.value?.getAnimations({ subtree: true }).forEach(animation => {
    if (animation.playState === "running") pausedAnimations.add(animation);
  });
  pausedAnimations.forEach(animation => {
    if (animation.playState === "paused" || !resume && animation.playState === "running") {
      if (resume) animation.play();
      else { try { animation.finish(); } catch { animation.cancel(); } }
    }
  });
  pausedAnimations.clear();
}

function onChatState(state: ChatDemoState) {
  const previous = chatDemoState.value;
  chatDemoState.value = state;
  if (state === "playing" && previous !== "paused") {
    settleTransitions();
    previewOpen.value = false;
    cameraInteraction = false;
    camera?.replay();
  } else if (state === "playing") settleTransitions(true);
  else if (state === "paused") pauseVisuals();
  else if (state === "stopped") {
    if (cameraInteraction) { pauseVisuals(); camera?.hold(); }
    else { settleTransitions(); camera?.reset(); }
  }
  else if (state === "complete") {
    camera?.seek(SHOWCASE_DURATION);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      previewMounted.value = true;
      previewOpen.value = true;
    }
  }
}
function openDemo() {
  cancelAnimationFrame(closeFocusFrame);
  previewTrigger = cameraElement.value?.querySelector<HTMLElement>('[data-message-action="open-task-demo"]')
    ?? (document.activeElement instanceof HTMLElement ? document.activeElement : undefined);
  previewMounted.value = true;
  previewOpen.value = true;
}
async function closeDemo() {
  cancelAnimationFrame(closeFocusFrame);
  chatDemo.value?.stop();
  previewOpen.value = false;
  finishCameraInteraction();
  await nextTick();
  let frames = 0;
  const restoreFocus = () => {
    closeFocusFrame = 0;
    if (disposed || previewOpen.value || document.hidden || !previewTrigger?.isConnected) return;
    // Mobile chat stays hidden until the held camera pose has been released.
    if (++frames < 3 || getComputedStyle(previewTrigger).visibility !== "visible") {
      if (frames < 10) closeFocusFrame = requestAnimationFrame(restoreFocus);
      return;
    }
    const focused = document.activeElement;
    if (focused instanceof HTMLElement && focused !== document.body
      && !focused.closest(".home-workspace-preview")) return;
    previewTrigger.focus({ preventScroll: true });
  };
  closeFocusFrame = requestAnimationFrame(restoreFocus);
}
function previewStep(step: WorkspaceShowcaseStep) {
  previewMounted.value = true;
  void nextTick(() => workspaceDemo.value?.showcaseStep(step));
}
function onChatTimeline(elapsed: number) {
  if (disposed) return;
  lastElapsed = elapsed;
  camera?.seek(elapsed);
  if (chatDemoState.value === "playing" && !cameraInteraction) workspaceDemo.value?.showcaseTick(elapsed);
  const boundaries = [0, 1900, 5500, 11900, 19600, SHOWCASE_DURATION];
  const shot = elapsed < 1900 ? 0 : elapsed < 5500 ? 1 : elapsed < 11900 ? 2 : elapsed < 19600 ? 3 : 4;
  currentShot.value = shot;
  const progress = Math.min(1, Math.max(0, (elapsed - boundaries[shot]!) / (boundaries[shot + 1]! - boundaries[shot]!)));
  shotProgress.value?.querySelectorAll<HTMLElement>("i").forEach((bar, index) => {
    bar.style.transform = `scaleX(${index < shot ? 1 : index === shot ? progress : 0})`;
  });
}
function clearCameraRelease() {
  cancelAnimationFrame(releaseFrame);
  cancelAnimationFrame(releaseSecondFrame);
}
function holdCamera(event: Event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  if (target.closest(".home-workspace-preview")) {
    if (!event.isTrusted) return;
    clearCameraRelease();
    cameraInteraction = true;
    camera?.hold();
    chatDemo.value?.stop();
    if (event.type === "focusin") finishCameraInteraction();
    return;
  }
  if (!target.closest(".chat-demo-core")) return;
  if (target.closest(".stop-action") && (event.type === "focusin"
    || event instanceof KeyboardEvent && ![" ", "Enter"].includes(event.key))) return;
  if (event instanceof KeyboardEvent && !target.closest(".conversation-bottom")
    && !["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Enter"].includes(event.key)) return;
  if (event.type === "focusin" && !target.closest(".conversation-bottom")) return;
  clearCameraRelease();
  cameraInteraction = true;
  camera?.hold();
  if (event.type === "focusin" || event instanceof KeyboardEvent && event.key === "Tab") finishCameraInteraction();
}
function finishCameraInteraction() {
  if (!cameraInteraction) return;
  clearCameraRelease();
  // Let pointerup/click and the component's own fold handler finish at the held pose.
  releaseFrame = requestAnimationFrame(() => {
    releaseSecondFrame = requestAnimationFrame(() => {
      if (disposed || !cameraInteraction || chatDemoState.value === "playing" || chatDemoState.value === "paused") return;
      cameraInteraction = false;
      // Settle only effects paused before the click. New send/fold animations
      // belong to the user's action and must keep their full duration.
      settleTransitions(false, false);
      camera?.release();
    });
  });
}
function resizeCamera() {
  camera?.resize();
}
function toggleChatPlayback() {
  if (chatDemoState.value === "playing") chatDemo.value?.pause();
  else if (chatDemoState.value === "paused") chatDemo.value?.resume();
  else chatDemo.value?.play();
}

function playIcon(name: string) {
  clearTimeout(iconTimer);
  individualEpochs.value[name] = (individualEpochs.value[name] || 0) + 1;
  activeIcon.value = name;
  iconTimer = setTimeout(() => { activeIcon.value = ""; }, 1200);
}
function stopIcon() {
  clearTimeout(iconTimer);
  activeIcon.value = "";
}
function onVisibilityChange() {
  if (document.hidden) stopIcon();
}
function onMotionChange() {
  if (media?.matches) { stopIcon(); camera?.reset(); }
}
async function copyExample() {
  try {
    await copyText(snippet);
    if (disposed) return;
    copied.value = true;
    copyEpoch.value++;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copied.value = false; }, 2200);
    emit("notify", "Usage example copied");
  } catch {
    if (!disposed) emit("notify", "Select the code to copy it manually");
  }
}
function completePreview() {
  previewCompleted.value = true;
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => { previewCompleted.value = false; }, 1800);
}
function setCraftMode(mode: "preview" | "source") {
  craftMode.value = mode;
}
async function craftKeydown(event: KeyboardEvent) {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  setCraftMode(event.key === "Home" ? "preview" : event.key === "End" ? "source" : craftMode.value === "preview" ? "source" : "preview");
  await nextTick();
  craftTabs.value?.querySelector<HTMLButtonElement>('[aria-selected="true"]')?.focus();
}

onMounted(() => {
  media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onMotionChange);
  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("resize", resizeCamera);
  if (cameraElement.value) {
    camera = createShowcaseCamera(cameraElement.value, () => Boolean(media?.matches));
    onChatTimeline(lastElapsed);
  }
});
onBeforeUnmount(() => {
  disposed = true;
  clearTimeout(copyTimer);
  clearTimeout(previewTimer);
  stopIcon();
  clearCameraRelease();
  cancelAnimationFrame(closeFocusFrame);
  settleTransitions();
  camera?.destroy();
  media?.removeEventListener("change", onMotionChange);
  document.removeEventListener("visibilitychange", onVisibilityChange);
  window.removeEventListener("resize", resizeCamera);
});
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <h1><span class="hero-title-reveal"><span>Build better</span><span>agent interfaces.</span></span></h1>
      <p class="hero-description">Harness UI is a collection of Vue components and animated icons. Explore real interactions, then make the source your own.</p>
      <div class="home-hero-actions">
        <a v-hover-ink href="https://github.com/cocofhu/harness-ui" target="_blank" rel="noopener noreferrer" class="home-button home-primary"><span>Get started</span><AnimatedIcon name="arrow-right" :size="16" /></a>
        <a v-hover-ink="{ enabled: false }" href="#/components" class="home-button home-secondary"><span>Browse components</span><AnimatedIcon name="arrow-right" :size="16" /></a>
      </div>
      <div class="hero-smallprint">
        <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M2 4h4l6 10 6-10h4L12 22Z" fill="#42b883" /><path d="M6 4h4l2 3 2-3h4L12 14Z" fill="#35495e" /></svg>
        Vue 3 <span>·</span> <a href="#/components">{{ catalog.length }} components</a><span>·</span><a href="#/icons">{{ animatedIconCount }} animated icons</a><span>·</span><a href="https://github.com/cocofhu/harness-ui" target="_blank" rel="noopener noreferrer" class="hero-github"><Github :size="14" aria-hidden="true" />GitHub</a>
      </div>
    </section>

    <section class="home-chat-section" aria-label="Chat conversation preview">
      <div class="home-demo-intro"><div><h2>See it in action.</h2><p>Explore chat, task navigation, and an interactive preview in one workspace.</p></div><a href="#/components" class="home-text-link">Browse all {{ catalog.length }} components <AnimatedIcon name="arrow-right" :size="16" /></a></div>
      <div class="home-chat-canvas" :class="{ 'is-paused': chatDemoState === 'paused', 'has-preview': previewOpen }" :data-playback="chatDemoState" :data-shot="['question', 'process', 'answer', 'preview', 'complete'][currentShot]">
        <div class="home-chat-heading">
          <a href="#/components/chat-conversation">View component <AnimatedIcon name="arrow-right" :size="17" /></a>
        </div>
        <div class="home-chat-viewport">
          <div ref="cameraElement" class="home-chat-camera" @pointerdown.capture="holdCamera" @pointerup="finishCameraInteraction" @pointercancel="finishCameraInteraction" @click="finishCameraInteraction" @keydown.capture="holdCamera" @keyup="finishCameraInteraction" @focusin.capture="holdCamera" @wheel.capture.passive="holdCamera" @wheel.passive="finishCameraInteraction" @touchmove.capture.passive="holdCamera" @touchmove.passive="finishCameraInteraction">
            <aside class="home-workspace-preview" :inert="!previewOpen || undefined" :aria-hidden="!previewOpen" @keydown.esc.stop.prevent="closeDemo">
              <WorkspaceDemoPreview ref="workspaceDemo" :active="previewMounted" @close="closeDemo" />
            </aside>
            <div class="home-chat-window">
              <div class="home-chat-window-bar"><span class="window-dots" aria-hidden="true"><i /><i /><i /></span><span>Chat conversation</span><span class="window-demo-label">Demo</span></div>
              <ChatConversationDemo ref="chatDemo" workspace :controls="false" @state-change="onChatState" @timeline="onChatTimeline" @open-preview="openDemo" @preview-step="previewStep" />
            </div>
          </div>
        </div>
        <div class="home-chat-controls">
          <button type="button" class="home-chat-play" aria-label="Play chat demo" @click="chatDemo?.play()"><AnimatedIcon name="refresh" :size="14" />Replay</button>
          <div ref="shotProgress" class="home-chat-shots" aria-hidden="true"><span v-for="shot in 5" :key="shot"><i /></span></div>
          <button type="button" class="home-chat-pause" :aria-label="chatDemoState === 'playing' ? 'Pause chat demo' : chatDemoState === 'paused' ? 'Resume chat demo' : 'Replay chat demo'" :title="chatDemoState === 'playing' ? 'Pause' : chatDemoState === 'paused' ? 'Resume' : 'Replay'" @click="toggleChatPlayback">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path v-if="chatDemoState === 'playing'" d="M7 5h3v14H7zm7 0h3v14h-3z" /><path v-else-if="chatDemoState === 'paused' || chatDemoState === 'ready'" d="m8 5 11 7-11 7Z" /><path v-else d="M18.7 7A8 8 0 1 0 20 15h-2.1a6 6 0 1 1-.6-6H14v2h7V4h-2v3Z" /></svg>
          </button>
        </div>
      </div>
    </section>

    <section v-reveal class="home-icon-section">
      <div class="section-editorial">
        <h2>Animated icons.</h2>
        <p>{{ animatedIconCount }} animated icons for everyday interface details.</p>
        <a href="#/icons" class="home-text-link">Explore icons <AnimatedIcon name="arrow-right" :size="16" /></a>
      </div>
      <div class="home-icon-board">
        <button v-for="name in icons" :key="name" type="button" class="home-icon-cell" :class="{ 'is-playing': activeIcon === name }" :aria-label="`Play ${iconLabel(name)} icon`" @click="playIcon(name)">
          <AnimatedIcon :name="name" :size="42" :motion-key="individualEpochs[name] || 0" />
          <span>{{ iconLabel(name) }}</span>
        </button>
      </div>
    </section>

    <section v-reveal class="home-craft-section">
      <div class="craft-visual" :class="{ 'is-complete': previewCompleted }">
        <div class="craft-code-heading">
          <div ref="craftTabs" class="craft-mode-switch" role="tablist" aria-label="Component preview and source" @keydown="craftKeydown">
            <span class="craft-tab-indicator" :class="{ 'at-source': craftMode === 'source' }" aria-hidden="true" />
            <button id="home-preview-tab" type="button" role="tab" :aria-selected="craftMode === 'preview'" :tabindex="craftMode === 'preview' ? 0 : -1" aria-controls="home-preview-panel" @click="setCraftMode('preview')">Preview</button>
            <button id="home-source-tab" type="button" role="tab" :aria-selected="craftMode === 'source'" :tabindex="craftMode === 'source' ? 0 : -1" aria-controls="home-source-panel" @click="setCraftMode('source')">Source</button>
          </div>
          <button type="button" class="craft-copy" :aria-label="copied ? 'Example copied' : 'Copy usage example'" @click="copyExample">
            <AnimatedIcon :name="copied ? 'check-draw' : 'copy'" :size="17" :motion-key="copyEpoch" />
          </button>
        </div>
        <div class="craft-panel-stage">
            <div id="home-preview-panel" class="craft-live-preview" :class="{ 'is-current': craftMode === 'preview' }" :inert="craftMode !== 'preview'" :aria-hidden="craftMode !== 'preview'" role="tabpanel" aria-labelledby="home-preview-tab">
              <SlidingTabs @change="completePreview" />
            </div>
            <div id="home-source-panel" class="craft-source-panel" :class="{ 'is-current': craftMode === 'source' }" :inert="craftMode !== 'source'" :aria-hidden="craftMode !== 'source'" role="tabpanel" aria-labelledby="home-source-tab">
              <pre><code><span class="syntax-dim">&lt;script setup lang=</span><span class="syntax-string">"ts"</span><span class="syntax-dim">&gt;</span>
<span class="syntax-purple">import</span> SlidingTabs <span class="syntax-purple">from</span> <span class="syntax-string">'./ui/SlidingTabs.vue'</span>
<span class="syntax-dim">&lt;/script&gt;</span>

<span class="syntax-dim">&lt;template&gt;</span>
  <span class="syntax-purple">&lt;SlidingTabs /&gt;</span>
<span class="syntax-dim">&lt;/template&gt;</span></code></pre>
            </div>
        </div>
      </div>
      <div class="section-editorial">
        <h2>Your app. Your code.</h2>
        <p>Copy the Vue source, then adapt the details to your product.</p>
        <a href="https://github.com/cocofhu/harness-ui" target="_blank" rel="noopener noreferrer" class="home-text-link">Quick start <AnimatedIcon name="arrow-right" :size="16" /></a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page { max-width: 1200px; margin: 0 auto; padding: 0 36px; }
.home-hero { text-align: center; padding: 77px 0 54px; }
.home-hero h1 { font-size: 76px; font-weight: 500; line-height: 1.14; letter-spacing: -3px; overflow: visible; }
.hero-title-reveal { display: inline-block; padding: .04em .04em .14em; margin: -.04em -.04em 0; animation: home-title-in 900ms cubic-bezier(.16,1,.3,1) both; }
.hero-title-reveal > span { display: block; }
.hero-description { max-width: 580px; margin: 24px auto 0; color: var(--text-secondary); font-size: 16px; line-height: 1.8; text-wrap: pretty; }
.home-hero-actions { display: flex; justify-content: center; align-items: center; gap: 12px; margin-top: 30px; animation: home-content-in 700ms 100ms cubic-bezier(.16,1,.3,1) both; }
.home-button { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 36px; padding: 0 14px; border: 0; border-radius: 6px; box-shadow: none; font-size: 14px; font-weight: 500; white-space: nowrap; outline: none; transition: background-color .16s ease, color .16s ease; }
.home-primary { --hover-ink-color: #5424d8; background: #7b61ff; color: #fff; box-shadow: none; }
.home-secondary { background: transparent; color: var(--text-secondary, #52525b); }
.home-secondary:hover { background: color-mix(in srgb, var(--text, #18181b) 4%, transparent); color: var(--text, #18181b); }
:global(html.dark .home-primary) { --hover-ink-color: #a78bfa; }
.hero-smallprint { font: 12px Inter, sans-serif; color: var(--muted); display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; margin-top: 23px; animation: home-content-in 700ms 200ms cubic-bezier(.16,1,.3,1) both; }
.hero-smallprint > span { margin: 0 3px; color: var(--border-strong); }
.hero-smallprint a:hover { color: var(--text); }
.hero-github { display: inline-flex; align-items: center; gap: 5px; }
.home-demo-intro { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 28px; }
.home-demo-intro h2 { margin: 0; color: var(--text); font-size: 30px; font-weight: 500; line-height: 1.35; letter-spacing: -.8px; }
.home-demo-intro p { max-width: 560px; margin: 10px 0 0; color: var(--text-secondary); font-size: 15px; line-height: 1.7; }
.home-demo-intro .home-text-link { flex-shrink: 0; margin-top: 0; font-size: 14px; }
.home-chat-section { position: relative; isolation: isolate; padding-top: 24px; }
.home-chat-section::before { content: ""; position: absolute; z-index: -2; inset: -80px -58px 15%; pointer-events: none; background: radial-gradient(ellipse at 84% 26%, #2188eb65, transparent 53%), radial-gradient(ellipse at 5% 30%, #b1c9e966, transparent 51%), radial-gradient(ellipse at 35% 3%, #e9dfe966, transparent 44%); filter: blur(22px); mask-image: linear-gradient(transparent, #000 22%, #000 50%, transparent); }
.home-chat-section::after { content: ""; position: absolute; z-index: -1; inset: -30px -36px 0; pointer-events: none; opacity: .16; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23fff' filter='url(%23n)' opacity='.5' d='M0 0h180v180H0z'/%3E%3C/svg%3E"); mask-image: linear-gradient(transparent, #000 18%, #000 70%, transparent); }
.home-chat-canvas { --chat-height: 420px; position: relative; display: flex; flex-direction: column; align-items: center; min-width: 0; padding: 16px 24px; border: 1px solid var(--border); border-radius: 24px; background: var(--surface); box-shadow: 0 30px 80px -20px #0000002e, 0 3px 10px #00000005; }
.home-chat-heading { display: flex; justify-content: flex-end; align-items: center; width: 100%; min-height: 24px; }
.home-chat-heading > a { display: inline-flex; align-items: center; gap: 8px; min-height: 24px; color: var(--muted); font-size: 12px; }
.home-chat-heading > a:hover { color: #087ef7; }
.home-chat-viewport { display: grid; place-items: center; width: 100%; height: 540px; overflow: clip; }
.home-chat-camera { position: relative; display: flex; justify-content: flex-end; width: 100%; min-width: 0; transform-origin: 0 0; will-change: transform, opacity; transition: box-shadow .85s; }
.home-chat-camera::after { content: ""; position: absolute; z-index: 3; inset: 0; pointer-events: none; opacity: 0; border: 1px solid var(--border); border-radius: inherit; transition: opacity .85s; }
.home-chat-window { flex: 0 0 auto; width: min(760px, 100%); margin-inline: auto; min-width: 0; overflow: visible; border: 1px solid var(--border); border-radius: 13px; background: var(--surface); box-shadow: 0 24px 60px -18px #202b4840, 0 2px 8px #00000004; transition: width .85s cubic-bezier(.22,.75,.16,1), margin-right .85s cubic-bezier(.22,.75,.16,1); }
.home-workspace-preview { position: absolute; right: 0; top: 0; bottom: 0; width: calc(100% - 440px); min-width: 0; overflow: hidden; visibility: hidden; opacity: 0; transform: translateX(32px); border: 0; border-left: 1px solid var(--border); border-radius: 0; background: var(--surface); box-shadow: none; transition: opacity .7s, transform .85s cubic-bezier(.22,.75,.16,1), visibility 0s .85s; }
.has-preview .home-chat-camera { overflow: hidden; border-radius: 12px; background: var(--surface); box-shadow: 0 18px 60px -24px #202b4830; }
.has-preview .home-chat-camera::after { opacity: 1; }
.has-preview .home-chat-window { width: 440px; margin-left: 0; margin-right: auto; border-color: transparent; border-radius: 0; box-shadow: none; }
.has-preview .home-chat-window :deep(.chat-conversation) { border-radius: 0; }
.has-preview .window-dots { display: none; }
.has-preview .home-workspace-preview { visibility: visible; opacity: 1; transform: none; transition-delay: 0s; }
.home-chat-canvas[data-playback="playing"] :is(.home-chat-window, .home-workspace-preview),
.home-chat-canvas[data-playback="paused"] :is(.home-chat-window, .home-workspace-preview) { transition: none; }
.home-chat-window :deep(.chat-conversation-demo), .home-chat-window :deep(.chat-conversation) { max-width: none; }
.home-chat-window :deep(.chat-conversation) { border-radius: 0 0 13px 13px; }
.home-chat-canvas[data-playback="playing"] :deep(.conversation-empty) { opacity: 0; }
.home-chat-canvas[data-playback="playing"] :deep(.jump-latest),
.home-chat-canvas[data-playback="paused"] :deep(.jump-latest) { visibility: hidden; pointer-events: none; }
.home-chat-window-bar { display: flex; align-items: center; gap: 12px; height: 44px; padding: 0 14px; border-bottom: 1px solid var(--border); color: var(--muted); font-size: 12px; }
.window-dots { display: flex; gap: 5px; }.window-dots > i { width: 6px; height: 6px; border-radius: 50%; background: var(--border-strong); }
.window-demo-label { margin-left: auto; color: var(--muted); }
.home-chat-controls { display: grid; grid-template-columns: 1fr 140px 1fr; align-items: center; width: 100%; margin-top: 10px; }
.home-chat-play { justify-self: start; }
.home-chat-shots { display: flex; gap: 5px; height: 2px; width: 140px; }
.home-chat-shots > span { flex: 1; background: var(--border); overflow: hidden; border-radius: 2px; }
.home-chat-shots i { display: block; height: 100%; background: #087ef7; transform: scaleX(0); transform-origin: left; }
.home-chat-play { display: inline-flex; align-items: center; gap: 7px; min-height: 32px; padding: 0 5px; border-radius: 6px; color: var(--muted); background: transparent; font-size: 12px; }
.home-chat-play:hover { color: var(--text); }
.home-chat-pause { justify-self: end; display: grid; place-items: center; width: 32px; height: 32px; padding: 0; border: 1px solid var(--border); border-radius: 50%; background: var(--surface); color: var(--text-secondary); box-shadow: 0 2px 8px #0000000a; transition: color .16s, border-color .16s; }
.home-chat-pause:hover { color: #087ef7; border-color: #087ef759; }
.home-chat-canvas.is-paused :deep(*) { animation-play-state: paused !important; }
.home-icon-section, .home-craft-section { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 100px; padding: 88px 30px; border-bottom: 1px solid var(--border); }
.home-icon-section { border-top: 1px solid var(--border); margin-top: 56px; }
.section-editorial h2 { font-size: 38px; line-height: 1.5; font-weight: 500; letter-spacing: -1.5px; }
.section-editorial p { max-width: 365px; margin: 14px 0 0; color: var(--text-secondary); font-size: 16px; line-height: 1.8; }
.home-text-link { display: inline-flex; align-items: center; gap: 12px; font-size: 14px; color: var(--text); margin-top: 29px; font-weight: 500; }
.home-text-link:hover { color: var(--accent); }
.home-icon-board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; border: 1px solid var(--border); border-radius: 18px; background: var(--border); overflow: hidden; box-shadow: 0 16px 55px -35px #24212c40; }
.home-icon-cell { position: relative; background: var(--surface); height: 136px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; color: var(--text-secondary); transition: background .24s, color .24s; }
.home-icon-cell > span { font-size: 13px; color: var(--muted); }
.home-icon-cell:hover, .home-icon-cell.is-playing { background: var(--accent-soft); color: var(--accent); }
.home-icon-cell.is-playing::after { content: ""; position: absolute; inset: 0; border: 1px solid color-mix(in srgb, var(--accent) 22%, transparent); pointer-events: none; animation: icon-cell-light 1.2s ease both; }
.home-craft-section { gap: 90px; grid-template-columns: 1.08fr 1fr; padding-left: 12px; padding-right: 12px; }
.craft-visual { min-width: 0; border: 1px solid var(--border); border-radius: 13px; background: var(--canvas); box-shadow: 0 14px 50px -35px #0003; overflow: hidden; transition: border-color .3s, box-shadow .3s; }
.craft-visual.is-complete { border-color: color-mix(in srgb, var(--accent) 50%, var(--border)); box-shadow: 0 0 0 4px var(--accent-soft); }
.craft-code-heading { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-bottom: 1px solid var(--border); gap: 10px; }
.craft-mode-switch { position: relative; isolation: isolate; display: inline-flex; padding: 3px; background: var(--border); border-radius: 8px; }
.craft-tab-indicator { position: absolute; z-index: -1; left: 3px; top: 3px; width: 66px; height: calc(100% - 6px); background: var(--surface); border-radius: 6px; box-shadow: 0 1px 3px #00000008; transition: transform .38s cubic-bezier(.22,1,.36,1); }
.craft-tab-indicator.at-source { transform: translateX(66px); }
.craft-mode-switch > button { width: 66px; height: 32px; padding: 0; background: transparent; color: var(--text-secondary); border-radius: 6px; font-size: 13px; }
.craft-mode-switch > button[aria-selected="true"] { color: var(--text); font-weight: 500; }
.craft-copy { width: 34px; height: 34px; padding: 0; border-radius: 6px; color: var(--text-secondary); display: grid; place-items: center; background: transparent; }
.craft-copy:hover { background: var(--border); color: var(--text); }
.craft-panel-stage { position: relative; height: 360px; }
.craft-panel-stage > div { position: absolute; inset: 0; opacity: 0; visibility: hidden; transform: translateY(10px); transition: opacity .22s ease, transform .38s cubic-bezier(.16,1,.3,1), visibility 0s .22s; }
.craft-panel-stage > .is-current { opacity: 1; visibility: visible; transform: translateY(0); transition-delay: 0s; }
.craft-live-preview { height: 100%; display: flex; align-items: center; justify-content: center; padding: 24px; background: var(--stage-lilac); }
.craft-live-preview > * { max-width: 100%; }
.craft-source-panel { height: 100%; overflow: auto; }
.craft-visual pre { margin: 0; padding: 28px 24px; font: 13px/2.1 "JetBrains Mono", monospace; color: var(--text); min-width: max-content; }
.craft-visual code { font: inherit; }
.syntax-dim { color: var(--muted); }
.syntax-string { color: #4e8b71; }
.syntax-purple { color: var(--accent); }
.home-icon-section > *, .home-craft-section > * { transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
.home-icon-section[data-revealed="false"] > *, .home-craft-section[data-revealed="false"] > * { opacity: 0; transform: translateY(24px); }
.home-icon-section[data-revealed="true"] > .home-icon-board, .home-craft-section[data-revealed="true"] > .section-editorial { transition-delay: 100ms; }
.craft-panel-enter-active { transition: opacity .28s ease, transform .38s cubic-bezier(.16,1,.3,1); }
.craft-panel-leave-active { transition: opacity .12s ease; pointer-events: none; }
.craft-panel-enter-from { opacity: 0; transform: translateY(10px); }
.craft-panel-leave-to { opacity: 0; }
.home-page button:active, .home-page a:active { transform: none; }
.home-page button:focus-visible, .home-page a:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.home-page .home-button:focus-visible { outline: 2px solid color-mix(in srgb, var(--accent, #7b61ff) 65%, transparent); outline-offset: 3px; box-shadow: none; }
.home-page .home-button:active { transform: none; }
.home-page .home-icon-cell:focus-visible { outline-offset: -4px; }
@keyframes home-title-in { from { clip-path: inset(0 0 100% 0); transform: translateY(26px); opacity: 0; } to { clip-path: inset(0); transform: translateY(0); opacity: 1; } }
@keyframes home-content-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes icon-cell-light { 0% { opacity: 0; } 25% { opacity: 1; } 100% { opacity: 0; } }
@media (min-width: 1500px) {
  .home-page { max-width: 1280px; }
  .home-hero { padding-top: 92px; }
  .home-hero h1 { font-size: 76px; }
}
@media (max-width: 1000px) {
  .home-page { padding: 0 28px; }
  .home-hero { padding-top: 65px; }
  .home-hero h1 { font-size: 60px; }
  .home-icon-section, .home-craft-section { gap: 50px; padding: 85px 10px; }
  .section-editorial h2 { font-size: 32px; }
  .home-icon-cell { height: 112px; }
  .craft-live-preview { padding: 20px; }
  .craft-visual pre { font-size: 12px; padding: 24px 18px; }
}
@media (max-width: 900px) {
  .home-workspace-preview { width: calc(100% - 16px); }
  .has-preview .home-chat-window { width: min(760px, calc(100% - 16px)); margin-inline: auto; visibility: hidden; }
}
@media (max-width: 700px) {
  .home-page { padding: 0 20px; }
  .home-hero { padding: 56px 0 41px; }
  .home-hero h1 { font-size: 40px; letter-spacing: -1.6px; }
  .hero-description { max-width: 360px; margin-top: 20px; font-size: 15px; line-height: 1.75; }
  .home-hero-actions { gap: 9px; margin-top: 24px; }
  .hero-smallprint { margin-top: 21px; }
  .home-demo-intro { align-items: flex-start; flex-direction: column; gap: 14px; margin-bottom: 24px; }
  .home-demo-intro h2 { font-size: 28px; }
  .home-demo-intro p { font-size: 14px; }
  .home-chat-section { padding-top: 14px; }
  .home-chat-section::before { inset-inline: -18px; filter: blur(14px); }
  .home-chat-section::after { inset-inline: -20px; }
  .home-chat-canvas { --chat-height: 390px; padding: 12px; border-radius: 16px; }
  .home-chat-viewport { height: 460px; }
  .home-chat-window { width: calc(100% - 16px); }
  .home-chat-window { border-radius: 10px; }
  .home-chat-window-bar { height: 32px; padding-inline: 10px; gap: 9px; }
  .home-chat-window :deep(.chat-conversation) { border-radius: 0 0 10px 10px; }
  .home-chat-controls { margin-top: 12px; }
  .home-icon-section, .home-craft-section { grid-template-columns: 1fr; gap: 36px; padding: 59px 5px; margin-top: 26px; }
  .home-craft-section { margin-top: 0; }
  .section-editorial h2 { font-size: 32px; line-height: 1.45; }
  .home-icon-board { margin: 8px 7px 0; max-width: 430px; justify-self: center; width: calc(100% - 14px); }
  .home-icon-cell { height: 120px; gap: 14px; }
  .home-icon-cell > svg { width: 38px; height: 38px; }
  .home-text-link { margin-top: 24px; }
  .home-craft-section > .craft-visual { order: 2; }
  .home-craft-section > .section-editorial { order: 1; }
  .craft-visual pre { padding: 22px 17px; }
  .craft-live-preview { padding: 18px; }
  .craft-code-heading { padding: 10px 12px; }
}
@media (max-width: 350px) {
  .home-hero-actions { flex-direction: column; gap: 10px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; }
  .home-page .home-button:active { transform: none; }
  .home-icon-section > *, .home-craft-section > * { opacity: 1 !important; transform: none !important; }
}
</style>
