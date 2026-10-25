<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import ChatConversation from "./ui/ChatConversation.vue";
import type { ConversationAttachment, ConversationMessage, ConversationPart } from "./ui/ChatConversation.vue";
import AnimatedIcon from "./AnimatedIcon.vue";
import { SHOWCASE_DURATION } from "../lib/showcaseCamera";

export type ChatDemoState = "ready" | "playing" | "paused" | "complete" | "stopped";

const props = withDefaults(defineProps<{ controls?: boolean; workspace?: boolean }>(), { controls: true, workspace: false });
const emit = defineEmits<{
  "state-change": [state: ChatDemoState];
  timeline: [elapsed: number];
  "open-preview": [];
  "preview-step": [step: "all" | "running" | "waiting" | "collapse-history" | "expand-history"];
}>();
const root = ref<HTMLElement>();
const conversation = ref<InstanceType<typeof ChatConversation>>();
const state = ref<ChatDemoState>("ready");
const hasPlayed = ref(false);
const draft = ref("");
const model = ref("Claude Sonnet 4.6");
const models = ["Claude Sonnet 4.6", "GPT-5.4", "Gemini 3.1 Pro"];
const identity = `chat-demo-${useId().replace(/:/g, "")}`;
const userText = "Check the typography on the homepage.";
const thoughtText = "Check the hierarchy, type sizes, and contrast.";
const responseText = "Use three levels: headings, body text, and supporting details.\n\nKeep the body readable, then refine the space between headings and paragraphs.";
const sampleUserId = `${identity}-sample-user`;
const sampleAssistantId = `${identity}-sample-assistant`;
const sampleFollowupId = `${identity}-sample-followup`;
const sampleBuildUserId = `${identity}-sample-build-user`;
const sampleBuildId = `${identity}-sample-build`;
const sampleInspectUserId = `${identity}-sample-inspect-user`;
const sampleInspectId = `${identity}-sample-inspect`;
const duration = () => props.workspace ? SHOWCASE_DURATION : 9000;

function sampleParts(text = responseText): ConversationPart[] {
  return [
    { kind: "thought", id: "thought", text: thoughtText },
    { kind: "tool", id: "read-page", title: "Read page styles", status: "success", input: "src/styles.css", output: "Read the heading, body, and supporting text styles." },
    { kind: "message", id: "response", text },
  ];
}
function completedSample(): ConversationMessage[] {
  const initial: ConversationMessage[] = [
    { id: sampleUserId, role: "user", text: userText },
    { id: sampleAssistantId, role: "assistant", parts: sampleParts() },
    { id: sampleFollowupId, role: "user", text: "Keep body text at 15px and supporting text at 12px or above." },
  ];
  if (!props.workspace) return initial;
  return [...initial,
    { id: sampleBuildUserId, role: "user", text: "Build a task panel with filters and collapsible groups." },
    { id: sampleBuildId, role: "assistant", parts: [
      { kind: "thought", id: "compose", text: "Combine Sliding Tabs and Grouped Task List, keeping their interactions." },
      { kind: "tool", id: "build-demo", title: "Prepare interactive preview", status: "success", output: "demo.vue" },
      { kind: "message", id: "demo-ready", text: "The task panel is ready to explore." },
    ], actions: [{ id: "open-task-demo", label: "Open preview", kind: "preview" }] },
    { id: sampleInspectUserId, role: "user", text: "Show running tasks, then expand the history." },
    { id: sampleInspectId, role: "assistant", text: "Filter tasks, expand groups, or select a task to update its status." },
  ];
}

const sampleMessages = ref<ConversationMessage[]>(completedSample());
const sentMessages = ref<ConversationMessage[]>([]);
const samplePosition = ref(0);
const messages = computed(() => [
  ...sentMessages.value.slice(0, samplePosition.value),
  ...sampleMessages.value,
  ...sentMessages.value.slice(samplePosition.value),
]);
const statusLabel = computed(() => ({ ready: "", playing: "Playing", paused: "Paused", complete: "Demo complete", stopped: "Stopped" })[state.value]);
interface DemoStep {
  callback: () => void;
  remaining: number;
  dueAt: number;
  version: number;
  timer?: ReturnType<typeof setTimeout>;
}
const steps = new Set<DemoStep>();
const urls = new Set<string>();
let observer: IntersectionObserver | undefined;
let ancestorObserver: MutationObserver | undefined;
let motion: MediaQueryList | undefined;
let visible = false;
let autoAttempted = false;
let userOwned = false;
let disposed = false;
let generation = 0;
let sequence = 0;
let readPending = false;
let readFrame = 0;
let readSecondFrame = 0;
let timelineFrame = 0;
let timelineElapsed = 0;
let timelineStartedAt: number | undefined;

watch(state, value => emit("state-change", value), { immediate: true, flush: "sync" });

function available() {
  return !disposed && !document.hidden && Boolean(root.value?.isConnected)
    && !root.value?.closest('[inert], [aria-hidden="true"]');
}
function clearClock() {
  haltTimeline();
  generation++;
  steps.forEach(step => clearTimeout(step.timer));
  steps.clear();
}
function currentElapsed() {
  return Math.min(duration(), timelineElapsed + (timelineStartedAt === undefined ? 0 : performance.now() - timelineStartedAt));
}
function haltTimeline() {
  timelineElapsed = currentElapsed();
  timelineStartedAt = undefined;
  cancelAnimationFrame(timelineFrame);
  timelineFrame = 0;
  emit("timeline", timelineElapsed);
}
function startTimeline(reset = false) {
  cancelAnimationFrame(timelineFrame);
  if (reset) timelineElapsed = 0;
  timelineStartedAt = performance.now();
  emit("timeline", timelineElapsed);
  const tick = () => {
    if (disposed || state.value !== "playing") { timelineFrame = 0; return; }
    emit("timeline", currentElapsed());
    timelineFrame = requestAnimationFrame(tick);
  };
  timelineFrame = requestAnimationFrame(tick);
}
function clearReadFrames() {
  cancelAnimationFrame(readFrame);
  cancelAnimationFrame(readSecondFrame);
  readFrame = 0;
  readSecondFrame = 0;
}
function endStreaming(interrupted: boolean) {
  sampleMessages.value = sampleMessages.value.map(message => message.streaming
    ? {
      ...message,
      streaming: false,
      interrupted,
      parts: interrupted ? message.parts?.map(part => part.kind === "tool" && (part.status === "running" || part.status === "pending")
        ? { ...part, status: undefined, summary: part.summary ?? "Stopped" }
        : part) : message.parts,
    }
    : message);
}
function stop() {
  autoAttempted = true;
  userOwned = true;
  clearClock();
  clearReadFrames();
  readPending = false;
  endStreaming(true);
  if (state.value === "playing" || state.value === "paused" || state.value === "ready") state.value = "stopped";
}
function finishStatic() {
  autoAttempted = true;
  clearClock();
  clearReadFrames();
  readPending = false;
  sampleMessages.value = completedSample();
  timelineElapsed = duration();
  emit("timeline", timelineElapsed);
  state.value = "complete";
}
function armStep(step: DemoStep) {
  step.dueAt = performance.now() + step.remaining;
  step.timer = setTimeout(() => {
    steps.delete(step);
    if (step.version !== generation || disposed || state.value !== "playing") return;
    if (!available() || !visible || motion?.matches) {
      if (motion?.matches) finishStatic();
      else stop();
      return;
    }
    step.callback();
  }, step.remaining);
}
function later(callback: () => void, delay: number, version: number) {
  const step: DemoStep = { callback, remaining: delay, dueAt: 0, version };
  steps.add(step);
  armStep(step);
}
function pause() {
  if (state.value !== "playing") return;
  haltTimeline();
  const now = performance.now();
  steps.forEach(step => {
    clearTimeout(step.timer);
    step.remaining = Math.max(0, step.dueAt - now);
    step.timer = undefined;
  });
  state.value = "paused";
}
function resume() {
  if (state.value !== "paused" || !available() || !visible || motion?.matches) return;
  state.value = "playing";
  startTimeline();
  steps.forEach(armStep);
}
function updateAssistant(parts: ConversationPart[]) {
  sampleMessages.value = sampleMessages.value.map(message => message.id === sampleAssistantId
    ? { ...message, parts }
    : message);
}

function play() {
  autoAttempted = true;
  if (!available()) return;
  clearClock();
  clearReadFrames();
  readPending = false;
  hasPlayed.value = true;
  userOwned = false;
  // Replaying moves only the preset after the real messages; the core and its draft/files stay mounted.
  samplePosition.value = sentMessages.value.length;
  if (motion?.matches) {
    finishStatic();
    return;
  }
  const version = generation;
  state.value = "playing";
  startTimeline(true);
  sampleMessages.value = [];
  void nextTick(() => { if (!disposed && version === generation) conversation.value?.scrollToBottom(); });
  later(() => { sampleMessages.value = [{ id: sampleUserId, role: "user", text: userText }]; }, 120, version);
  later(() => {
    sampleMessages.value = [...sampleMessages.value, { id: sampleAssistantId, role: "assistant", streaming: true, parts: [] }];
  }, 1600, version);
  later(() => { updateAssistant([{ kind: "thought", id: "thought", text: thoughtText }]); }, 2200, version);
  later(() => {
    updateAssistant([
      { kind: "thought", id: "thought", text: thoughtText },
      { kind: "tool", id: "read-page", title: "Read page styles", status: "running", input: "src/styles.css" },
    ]);
  }, 3400, version);
  later(() => { updateAssistant(sampleParts("")); }, 4800, version);
  const characters = Array.from(responseText);
  const charactersPerChunk = 4;
  const chunks = Math.ceil(characters.length / charactersPerChunk);
  for (let index = 1; index <= chunks; index++) {
    later(() => { updateAssistant(sampleParts(characters.slice(0, index * charactersPerChunk).join(""))); }, 5600 + index * (700 / chunks), version);
  }
  later(() => { endStreaming(false); }, 6600, version);
  if (props.workspace) {
    const append = (message: ConversationMessage) => { sampleMessages.value = [...sampleMessages.value, message]; };
    later(() => { append(completedSample()[2]!); }, 7800, version);
    later(() => { append(completedSample()[3]!); }, 8400, version);
    later(() => { append({ id: sampleBuildId, role: "assistant", streaming: true, parts: [
      { kind: "thought", id: "compose", text: "Combine Sliding Tabs and Grouped Task List, keeping their interactions." },
      { kind: "tool", id: "build-demo", title: "Prepare interactive preview", status: "running" },
    ] }); }, 9000, version);
    later(() => {
      sampleMessages.value = sampleMessages.value.map(message => message.id === sampleBuildId ? completedSample()[4]! : message);
    }, 11000, version);
    later(() => { emit("preview-step", "all"); emit("open-preview"); }, 11900, version);
    later(() => { append(completedSample()[5]!); }, 13600, version);
    later(() => { append({ id: sampleInspectId, role: "assistant", streaming: true, text: "Start with the running tasks." }); }, 14200, version);
    later(() => { emit("preview-step", "running"); }, 14800, version);
    later(() => { emit("preview-step", "all"); }, 16000, version);
    later(() => { emit("preview-step", "collapse-history"); }, 16900, version);
    later(() => { emit("preview-step", "expand-history"); }, 17900, version);
    later(() => { emit("preview-step", "waiting"); }, 19000, version);
    later(() => {
      sampleMessages.value = sampleMessages.value.map(message => message.id === sampleInspectId ? completedSample()[6]! : message);
    }, 19600, version);
  }
  later(() => {
    if (!props.workspace) sampleMessages.value = [...sampleMessages.value, completedSample()[2]!];
    haltTimeline();
    timelineElapsed = duration();
    emit("timeline", timelineElapsed);
    state.value = "complete";
  }, duration(), version);
}

function takeOverEditing() {
  userOwned = true;
  autoAttempted = true;
  if (state.value === "playing" || state.value === "paused" || readPending) stop();
}
function pauseForReading() {
  userOwned = true;
  autoAttempted = true;
  if (state.value !== "playing" && state.value !== "paused") return;
  clearClock();
  readPending = true;
  state.value = "stopped";
}
function finishReadingPause() {
  if (!readPending || disposed) return;
  readPending = false;
  clearReadFrames();
  endStreaming(true);
}
function finishReadingAfterLayout() {
  if (!readPending || readFrame || readSecondFrame) return;
  readFrame = requestAnimationFrame(() => {
    readFrame = 0;
    readSecondFrame = requestAnimationFrame(() => {
      readSecondFrame = 0;
      finishReadingPause();
    });
  });
}
function targetElement(event: Event) { return event.target instanceof Element ? event.target : null; }
function onPointerDown(event: PointerEvent) {
  const target = targetElement(event);
  if (!target) return;
  if (target.closest(".conversation-bottom") && !target.closest(".stop-action")) takeOverEditing();
  else pauseForReading();
}
function onCoreClick() {
  // The target's own fold click runs first. Settling on pointerdown would replace it before the click.
  if (readPending) void nextTick(finishReadingPause);
}
function onKeydown(event: KeyboardEvent) {
  const target = targetElement(event);
  if (target?.closest(".stop-action")) return;
  if (target?.closest(".conversation-bottom")) takeOverEditing();
  else if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Enter"].includes(event.key)) {
    pauseForReading();
    if (![" ", "Enter"].includes(event.key)) finishReadingAfterLayout();
  }
}
function onFocus(event: FocusEvent) {
  const target = targetElement(event);
  if (target?.closest(".conversation-bottom") && !target.closest(".stop-action")) takeOverEditing();
}
function onReadScroll() { pauseForReading(); finishReadingAfterLayout(); }
function receiveMessage(message: { text: string; model: string; files: File[] }) {
  takeOverEditing();
  const attachments: ConversationAttachment[] = message.files.map(file => {
    const url = URL.createObjectURL(file);
    urls.add(url);
    return { id: `${identity}-attachment-${++sequence}`, name: file.name, mimeType: file.type, url };
  });
  sentMessages.value = [...sentMessages.value, { id: `${identity}-user-${++sequence}`, role: "user", text: message.text, attachments }];
}
function onDraft(value: string) { takeOverEditing(); draft.value = value; }
function onModel(value: string) { takeOverEditing(); model.value = value; }
function onMessageAction(action: { messageId: string; actionId: string }) {
  if (action.actionId !== "open-task-demo") return;
  takeOverEditing();
  emit("open-preview");
}
function visibilityChanged() { if (document.hidden && state.value === "playing") stop(); }
function motionChanged() {
  if (!motion?.matches) return;
  if (state.value === "playing" || state.value === "paused" || (state.value === "ready" && !userOwned)) finishStatic();
}

defineExpose({ play, stop, pause, resume });
onMounted(() => {
  motion = matchMedia("(prefers-reduced-motion: reduce)");
  motion.addEventListener("change", motionChanged);
  document.addEventListener("visibilitychange", visibilityChanged);
  document.addEventListener("pointerup", finishReadingAfterLayout);
  document.addEventListener("pointercancel", finishReadingAfterLayout);
  document.addEventListener("keyup", finishReadingAfterLayout);
  if (motion.matches) finishStatic();
  if (root.value && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        visible = entry.isIntersecting && entry.intersectionRatio >= .35;
        if (!visible && state.value === "playing") stop();
        else if (visible && !autoAttempted && !userOwned && !motion?.matches && available()) play();
      }
    }, { threshold: [0, .35] });
    // Observe the fixed stage while the shot magnifies the conversation inside it.
    observer.observe(root.value.closest(".home-chat-viewport") ?? root.value);
  } else visible = true;
  ancestorObserver = new MutationObserver(() => { if (state.value === "playing" && !available()) stop(); });
  for (let element: HTMLElement | null = root.value ?? null; element; element = element.parentElement) {
    ancestorObserver.observe(element, { attributes: true, attributeFilter: ["inert", "aria-hidden", "style"] });
  }
});
onBeforeUnmount(() => {
  disposed = true;
  clearClock();
  clearReadFrames();
  observer?.disconnect();
  ancestorObserver?.disconnect();
  motion?.removeEventListener("change", motionChanged);
  document.removeEventListener("visibilitychange", visibilityChanged);
  document.removeEventListener("pointerup", finishReadingAfterLayout);
  document.removeEventListener("pointercancel", finishReadingAfterLayout);
  document.removeEventListener("keyup", finishReadingAfterLayout);
  urls.forEach(url => URL.revokeObjectURL(url));
  urls.clear();
});
</script>

<template>
  <div ref="root" class="chat-conversation-demo" :data-demo-state="state">
    <div class="chat-demo-core" @pointerdown.capture="onPointerDown" @focusin.capture="onFocus" @keydown.capture="onKeydown" @click="onCoreClick" @input.capture="takeOverEditing" @change.capture="takeOverEditing" @paste.capture="takeOverEditing" @compositionstart.capture="takeOverEditing" @wheel.passive="onReadScroll" @touchmove.passive="onReadScroll">
      <ChatConversation ref="conversation" :messages="messages" :model-value="draft" :model="model" :models="models" @update:model-value="onDraft" @update:model="onModel" @send="receiveMessage" @stop="stop" @message-action="onMessageAction" />
    </div>
    <div v-if="controls" class="chat-demo-controls">
      <button type="button" class="chat-demo-play" @click="play"><AnimatedIcon :name="hasPlayed ? 'refresh' : 'play'" :size="14" /><span>{{ hasPlayed ? "Replay" : "Play demo" }}</span></button>
      <span class="chat-demo-status" aria-live="polite">{{ statusLabel }}</span>
    </div>
  </div>
</template>

<style scoped>
.chat-conversation-demo { width: 100%; max-width: 760px; min-width: 0; }
.chat-demo-core { width: 100%; min-width: 0; }
.chat-demo-controls { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 35px; padding-top: 8px; color: var(--text-secondary, #73737d); font-size: 12px; line-height: 1.5; }
.chat-demo-play { display: inline-flex; align-items: center; gap: 6px; padding: 5px 6px; margin-left: -6px; border: 0; border-radius: 6px; color: inherit; background: transparent; font: inherit; cursor: pointer; transition: color 180ms ease, background 180ms ease; }
.chat-demo-play:hover { color: var(--text, #29292f); background: var(--accent-soft, #f2efff); }
.chat-demo-play:focus-visible { outline: 2px solid var(--accent, #7b61ff); outline-offset: 3px; }
.chat-demo-status { padding-right: 2px; }
.chat-conversation-demo[data-demo-state="paused"] :deep(*) { animation-play-state: paused !important; }
@media (prefers-reduced-motion: reduce) { .chat-demo-play { transition: none; } }
</style>
