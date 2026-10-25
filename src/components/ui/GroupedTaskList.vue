<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, onUpdated, ref, useId, watch } from "vue";

interface TaskItem {
  id: string;
  label: string;
  status?: "running" | "waiting" | "idle" | "completed";
  meta?: string;
  disabled?: boolean;
}
interface TaskGroup {
  id: string;
  label: string;
  items: TaskItem[];
  icon?: "running" | "auto" | "history";
  disabled?: boolean;
}
const props = withDefaults(
  defineProps<{
    groups?: TaskGroup[];
    modelValue?: string;
    disabled?: boolean;
    createDisabled?: boolean;
  }>(),
  {
    disabled: false,
    createDisabled: false,
    groups: () => [
      {
        id: "running",
        label: "In progress",
        items: [
          { id: "portfolio", label: "Design a portfolio", status: "running" },
          { id: "brand", label: "Organize brand assets", status: "waiting" },
        ],
      },
      {
        id: "auto",
        label: "Automations",
        items: [
          { id: "review", label: "Review the interface", status: "running" },
          { id: "export", label: "Export design assets", status: "idle" },
        ],
      },
      {
        id: "history",
        label: "History",
        items: [
          {
            id: "landing",
            label: "Build the landing page",
            status: "completed",
            meta: "Just now",
          },
          {
            id: "research",
            label: "Collect references",
            status: "completed",
            meta: "Yesterday",
          },
        ],
      },
    ],
  },
);
const emit = defineEmits<{
  select: [item: TaskItem, group: TaskGroup];
  create: [];
  "update:modelValue": [value: string];
}>();
const localSelectedId = ref(props.modelValue ?? firstEnabledId());
const selectedId = computed(() => props.modelValue ?? localSelectedId.value);
const navigation = ref<HTMLElement>();
function firstEnabledId() {
  return props.groups.filter(group => !group.disabled).flatMap(group => group.items).find(item => !item.disabled)?.id ?? "";
}
function groupPanelId(groupId: string) { return `task-group-${instanceId}-${encodeURIComponent(groupId)}`; }
const collapsed = ref<Record<string, boolean>>({});
const instanceId = useId();
const foldSnapshots = new WeakMap<HTMLElement, { height: number; opacity: string }>();
function toggleGroup(groupId: string) {
  if (props.disabled || props.groups.find(group => group.id === groupId)?.disabled) return;
  const panel = document.getElementById(groupPanelId(groupId));
  if (panel) foldSnapshots.set(panel, { height: panel.getBoundingClientRect().height, opacity: getComputedStyle(panel).opacity });
  collapsed.value[groupId] = !collapsed.value[groupId];
}
const createButton = ref<HTMLButtonElement>();
const ink = ref({ x: 0, y: 0, diameter: 0 });
const inkPhase = ref<"idle" | "hover" | "leave">("idle");
const inkSuppressed = ref(false);
const createGlyphPlaying = ref(false);
let createPointer: { x: number; y: number } | undefined;
let createKeyboardFocused = false;
let createPreviouslyBlocked = false;
let createObserver: ResizeObserver | undefined;
let createCollapseTimer: ReturnType<typeof setTimeout> | undefined;
let createGlyphTimer: ReturnType<typeof setTimeout> | undefined;
const INK_DURATION = 350;

const statusLabel = {
  running: "Running",
  waiting: "Needs input",
  idle: "Ready",
  completed: "Completed",
};
const headingIcons: Record<string, string> = {
  running:
    '<circle cx="12" cy="12" r="8.2"/><path d="M10.4 8.9l4.6 3.1-4.6 3.1z"/>',
  auto: '<circle cx="4.6" cy="12" r="1.35" fill="currentColor" stroke="none"/><path d="M6.4 12h11.2M14.2 6.6l6.2 5.4-6.2 5.4"/>',
  history:
    '<path d="M4.2 4.2v4.6h4.6M4.3 13.2A8.2 8.2 0 1 0 7.2 6.1L4.2 8.8M12 8.2v3.2l3.2 1.6"/>',
};

function selectItem(item: TaskItem, group: TaskGroup) {
  if (props.disabled || group.disabled || item.disabled) return;
  if (props.modelValue === undefined) localSelectedId.value = item.id;
  emit("update:modelValue", item.id);
  emit("select", item, group);
}

function canCreateHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}
function isCreateBlocked() {
  return props.disabled || props.createDisabled || navigation.value?.getAttribute("aria-disabled") === "true" || navigation.value?.getAttribute("aria-busy") === "true" || createButton.value?.getAttribute("aria-disabled") === "true" || createButton.value?.getAttribute("aria-busy") === "true";
}
function clearCollapseTimer() {
  clearTimeout(createCollapseTimer);
  createCollapseTimer = undefined;
}
function placeInk(clientX?: number, clientY?: number) {
  const element = createButton.value;
  if (!element) return;
  const rect = element.getBoundingClientRect();
  const x = clientX === undefined ? rect.width / 2 : clientX - rect.left;
  const y = clientY === undefined ? rect.height / 2 : clientY - rect.top;
  const dx = Math.max(x, rect.width - x);
  const dy = Math.max(y, rect.height - y);
  ink.value = { x, y, diameter: Math.hypot(dx, dy) * 2 };
}
function expand(clientX?: number, clientY?: number) {
  if (isCreateBlocked()) return;
  clearCollapseTimer();
  placeInk(clientX, clientY);
  inkSuppressed.value = false;
  inkPhase.value = "hover";
}
function retract() {
  clearCollapseTimer();
  inkPhase.value = "leave";
  createCollapseTimer = setTimeout(() => {
    if (inkPhase.value !== "hover") {
      ink.value = { ...ink.value, diameter: 0 };
      inkPhase.value = "idle";
    }
    createCollapseTimer = undefined;
  }, INK_DURATION);
}
function stopGlyph() {
  clearTimeout(createGlyphTimer);
  createGlyphTimer = undefined;
  createGlyphPlaying.value = false;
}
function playGlyph() {
  if (isCreateBlocked()) return;
  clearTimeout(createGlyphTimer);
  createGlyphPlaying.value = true;
  createGlyphTimer = setTimeout(() => { createGlyphPlaying.value = false; createGlyphTimer = undefined; }, 520);
}
function onCreatePointerEnter(event: PointerEvent) {
  if (!canCreateHover() || event.pointerType === "touch") return;
  createPointer = { x: event.clientX, y: event.clientY };
  if (isCreateBlocked()) return;
  expand(createPointer.x, createPointer.y);
  playGlyph();
}
function onCreatePointerLeave() {
  createPointer = undefined;
  stopGlyph();
  if (!createKeyboardFocused) retract();
}
function onCreateFocus() {
  createKeyboardFocused = !isCreateBlocked() && Boolean(createButton.value?.matches(":focus-visible"));
  if (createKeyboardFocused) { expand(); playGlyph(); }
}
function onCreateBlur() {
  createKeyboardFocused = false;
  if (!createPointer) { retract(); stopGlyph(); }
}
function onCreate() {
  if (!isCreateBlocked()) { playGlyph(); emit("create"); }
}
function clearCreateCover() {
  createPointer = undefined;
  createKeyboardFocused = false;
  retract();
  stopGlyph();
}
function onCreateVisibilityChange() { if (document.hidden) clearCreateCover(); }
function syncCreateBlocked() {
  const blocked = isCreateBlocked();
  if (blocked) {
    clearCollapseTimer();
    inkSuppressed.value = true;
    inkPhase.value = "idle";
    if (ink.value.diameter) ink.value = { ...ink.value, diameter: 0 };
    createKeyboardFocused = false;
    stopGlyph();
  } else {
    inkSuppressed.value = false;
    if (createPreviouslyBlocked && createPointer && createButton.value?.matches(":hover") && canCreateHover()) expand(createPointer.x, createPointer.y);
  }
  createPreviouslyBlocked = blocked;
}
watch(() => props.disabled || props.createDisabled, syncCreateBlocked, { flush: "post" });
onUpdated(syncCreateBlocked);
onMounted(() => {
  syncCreateBlocked();
  window.addEventListener("blur", clearCreateCover);
  document.addEventListener("visibilitychange", onCreateVisibilityChange);
  if (typeof ResizeObserver !== "undefined") {
    createObserver = new ResizeObserver(() => {
      if (inkPhase.value === "hover" && !isCreateBlocked()) placeInk(createKeyboardFocused ? undefined : createPointer?.x, createKeyboardFocused ? undefined : createPointer?.y);
    });
    if (createButton.value) createObserver.observe(createButton.value);
  }
});
onBeforeUnmount(() => {
  createObserver?.disconnect();
  clearCollapseTimer();
  stopGlyph();
  window.removeEventListener("blur", clearCreateCover);
  document.removeEventListener("visibilitychange", onCreateVisibilityChange);
});

function onNavigationKeydown(event: KeyboardEvent) {
  if (props.disabled || !navigation.value || event.altKey || event.ctrlKey || event.metaKey) return;
  const target = (event.target as HTMLElement).closest<HTMLButtonElement>("button");
  if (!target || target.disabled) return;
  if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
    const buttons = [...navigation.value.querySelectorAll<HTMLButtonElement>("button:not(:disabled)")].filter(button => !button.closest("[inert]") && button.getClientRects().length);
    const index = buttons.indexOf(target);
    if (!buttons.length) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + buttons.length) % buttons.length;
    buttons[next]?.focus({ preventScroll: true });
  } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    const groupElement = target.closest<HTMLElement>(".task-nav-group");
    const groupId = groupElement?.dataset.groupId;
    const heading = groupElement?.querySelector<HTMLButtonElement>(".task-group-heading");
    if (!groupId || !heading || heading.disabled) return;
    event.preventDefault();
    if (event.key === "ArrowLeft") {
      if (!collapsed.value[groupId]) toggleGroup(groupId);
      void nextTick(() => heading.focus({ preventScroll: true }));
    } else if (collapsed.value[groupId]) toggleGroup(groupId);
  }
}

function beforeEnter(element: Element) {
  element.removeAttribute("inert");
  element.removeAttribute("aria-hidden");
  const body = element as HTMLElement;
  const snapshot = foldSnapshots.get(body);
  const height = snapshot?.height ?? body.getBoundingClientRect().height;
  const opacity = snapshot?.opacity ?? getComputedStyle(body).opacity;
  body.style.height = `${height}px`;
  body.style.opacity = height ? opacity : "0";
}
function enter(element: Element) {
  const body = element as HTMLElement;
  body.getBoundingClientRect();
  body.style.height = `${body.scrollHeight}px`;
  body.style.opacity = "1";
  foldSnapshots.delete(body);
}
function afterEnter(element: Element) {
  element.removeAttribute("inert");
  element.removeAttribute("aria-hidden");
  const body = element as HTMLElement;
  body.style.height = "";
  body.style.opacity = "";
}
function freezeFold(element: Element) {
  const body = element as HTMLElement;
  const snapshot = foldSnapshots.get(body);
  const hidden = getComputedStyle(body).display === "none";
  const height = hidden ? snapshot?.height ?? 0 : body.getBoundingClientRect().height;
  const opacity = hidden ? snapshot?.opacity ?? "0" : getComputedStyle(body).opacity;
  foldSnapshots.set(body, { height, opacity });
  body.style.height = `${height}px`;
  body.style.opacity = opacity;
}
function beforeLeave(element: Element) {
  element.setAttribute("inert", "");
  element.setAttribute("aria-hidden", "true");
  const body = element as HTMLElement;
  body.style.height = `${body.offsetHeight}px`;
  body.style.opacity = "1";
}
function leave(element: Element) {
  const body = element as HTMLElement;
  body.getBoundingClientRect();
  body.style.height = "0px";
  body.style.opacity = "0";
}
function afterLeave(element: Element) {
  const body = element as HTMLElement;
  body.style.height = "";
  body.style.opacity = "";
}

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) localSelectedId.value = value;
    else if (!props.groups.some(group => !group.disabled && group.items.some(item => item.id === localSelectedId.value && !item.disabled))) localSelectedId.value = firstEnabledId();
  },
);
watch(() => props.groups, groups => {
  const ids = new Set(groups.map(group => group.id));
  collapsed.value = Object.fromEntries(Object.entries(collapsed.value).filter(([id]) => ids.has(id)));
  if (props.modelValue === undefined && !groups.some(group => !group.disabled && group.items.some(item => item.id === localSelectedId.value && !item.disabled))) localSelectedId.value = firstEnabledId();
}, { deep: true });
</script>

<template>
  <nav ref="navigation" class="grouped-task-demo" aria-label="Workspace tasks" @keydown="onNavigationKeydown">
    <button
      ref="createButton"
      class="task-create-button"
      :class="{ 'is-active': inkPhase === 'hover', 'is-leaving': inkPhase === 'leave', 'is-ink-suppressed': inkSuppressed }"
      type="button"
      :disabled="disabled || createDisabled"
      @pointerenter="onCreatePointerEnter"
      @pointerleave="onCreatePointerLeave"
      @pointercancel="onCreatePointerLeave"
      @focus="onCreateFocus"
      @blur="onCreateBlur"
      @click="onCreate"
    >
      <span
        class="task-create-wave"
        :style="{ left: `${ink.x}px`, top: `${ink.y}px`, width: `${ink.diameter}px`, height: `${ink.diameter}px` }"
        aria-hidden="true"
      />
      <svg
        :class="{ 'is-playing': createGlyphPlaying }"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5" />
        <path class="task-create-pen" d="m15.5 4.5 4 4M10 10l7.3-7.3a1.4 1.4 0 0 1 2 0l2 2a1.4 1.4 0 0 1 0 2L14 14l-5 1 1-5Z" />
      </svg>
      <span>New task</span>
    </button>

    <div class="task-groups-scroll">
      <section v-for="group in groups" :key="group.id" class="task-nav-group" :data-group-id="group.id">
        <button
          class="task-group-heading"
          type="button"
          :disabled="disabled || group.disabled"
          :aria-expanded="!collapsed[group.id]"
          :aria-controls="groupPanelId(group.id)"
          :aria-label="`${collapsed[group.id] ? 'Expand' : 'Collapse'} ${group.label}`"
          @click="toggleGroup(group.id)"
        >
          <svg
            class="task-group-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            v-html="
              headingIcons[group.icon || group.id] || headingIcons.history
            "
          />
          <span>{{ group.label }}</span>
          <svg
            class="task-group-chevron"
            :class="{ collapsed: collapsed[group.id] }"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m7 10 5 5 5-5" />
          </svg>
          <span class="task-group-count">{{ group.items.length }}</span>
        </button>
        <Transition
          name="task-group-collapse"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @enter-cancelled="freezeFold"
          @leave-cancelled="freezeFold"
        >
          <div
            v-show="!collapsed[group.id]"
            :inert="collapsed[group.id] || undefined"
            :aria-hidden="collapsed[group.id] || undefined"
            :id="groupPanelId(group.id)"
            class="task-group-body"
          >
            <div
              v-for="item in group.items"
              :key="item.id"
              class="task-tree-item"
            >
              <button
                class="task-nav-row"
                :class="{ selected: selectedId === item.id }"
                type="button"
                :disabled="disabled || group.disabled || item.disabled"
                :aria-current="selectedId === item.id ? 'true' : undefined"
                :aria-label="`${item.label}${item.status ? `，${statusLabel[item.status]}` : ''}`"
                :title="item.label"
                @click="selectItem(item, group)"
              >
                <span class="task-row-label">{{ item.label }}</span>
                <span v-if="item.meta" class="task-row-meta">{{
                  item.meta
                }}</span>
                <span
                  v-if="item.status === 'running'"
                  class="task-status-dot"
                  aria-hidden="true"
                />
                <svg
                  v-else-if="item.status === 'waiting'"
                  class="task-waiting-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="10.2" cy="8" r="3.2" />
                  <path d="M3.8 20a6.4 6.4 0 0 1 12.8 0" />
                  <circle
                    class="task-waiting-dot"
                    cx="18.6"
                    cy="11.5"
                    r="1.55"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <span
                  v-else-if="item.status === 'idle'"
                  class="task-idle-dot"
                  aria-hidden="true"
                />
              </button>
            </div>
            <p v-if="!group.items.length" class="task-group-empty">No tasks</p>
          </div>
        </Transition>
      </section>
    </div>
  </nav>
</template>

<style scoped>
.grouped-task-demo {
  width: 100%;
  max-width: 360px;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 13px;
  border: 1px solid var(--demo-border, #e8e8ed);
  border-radius: 13px;
  background: var(--demo-surface, #fff);
  color: var(--demo-text, #252529);
  box-sizing: border-box;
  text-align: left;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
}
.grouped-task-demo * {
  box-sizing: border-box;
}
.grouped-task-demo button {
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
}
.task-create-button {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  padding: 0 10px;
  margin: 0 0 8px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--demo-text, #252529);
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  overflow: clip;
}
.task-create-button > svg {
  display: block;
  color: var(--text-secondary, #52525b);
  flex-shrink: 0;
}
.task-create-pen { transform-box: fill-box; transform-origin: center; }
.task-create-button > svg.is-playing .task-create-pen { animation: task-create-write 520ms cubic-bezier(.25, .7, .3, 1) both; }
.task-create-wave {
  position: absolute;
  z-index: -1;
  margin: 0;
  border-radius: 50%;
  background: var(--hover-ink-color, color-mix(in srgb, var(--demo-text, #18181b) 4.5%, transparent));
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center;
  transition: transform 350ms cubic-bezier(.16, 1, .3, 1);
  pointer-events: none;
}
.task-create-button.is-active > .task-create-wave { transform: translate(-50%, -50%) scale(1); }
.task-create-button.is-leaving > .task-create-wave { transform: translate(-50%, -50%) scale(0); }
.task-create-button.is-ink-suppressed > .task-create-wave { visibility: hidden; transition: none; transform: translate(-50%, -50%) scale(0); }
.task-create-feedback {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  color: var(--demo-muted, #777782);
  font-size: 12px;
  font-weight: 400;
}
.task-create-feedback > span {
  color: var(--accent, #7b61ff);
}
.task-create-feedback-enter-active,
.task-create-feedback-leave-active {
  transition:
    opacity 180ms,
    transform 220ms;
}
.task-create-feedback-enter-from,
.task-create-feedback-leave-to {
  opacity: 0;
  transform: translateY(3px);
}
.task-groups-scroll {
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--demo-border, #e8e8ed) transparent;
  padding-right: 1px;
}
.task-nav-group + .task-nav-group {
  margin-top: 13px;
}
.task-group-heading {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 100%;
  min-height: 33px;
  padding: 5px 11px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--demo-muted, #777782);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  transition: color 160ms;
}
.task-group-heading:hover {
  color: var(--demo-text, #252529);
}
.task-group-icon {
  flex: none;
}
.task-group-chevron {
  opacity: 0.65;
  transition:
    transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 180ms;
}
.task-group-heading:hover .task-group-chevron {
  opacity: 1;
}
.task-group-chevron.collapsed {
  transform: rotate(-90deg);
}
.task-group-count {
  margin-left: auto;
  font-size: 12px;
  opacity: 0.6;
  font-variant-numeric: tabular-nums;
  font-weight: 400;
}
.task-group-body {
  overflow: hidden;
}
.task-tree-item {
  position: relative;
  display: flow-root;
  padding-left: 28px;
}
.task-tree-item::before {
  content: "";
  position: absolute;
  left: 17px;
  top: 0;
  width: 11px;
  height: 50%;
  border-left: 1px solid var(--demo-border, #e8e8ed);
  border-bottom: 1px solid var(--demo-border, #e8e8ed);
  border-bottom-left-radius: 6px;
  pointer-events: none;
}
.task-tree-item:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 17px;
  top: 50%;
  bottom: 0;
  border-left: 1px solid var(--demo-border, #e8e8ed);
  pointer-events: none;
}
.task-nav-row {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  min-width: 0;
  min-height: 34px;
  margin: 1px 0;
  padding: 6px 9px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--demo-text, #252529);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  transition:
    background 180ms,
    color 180ms;
}
.task-nav-row:hover {
  background: color-mix(
    in srgb,
    var(--demo-text, #252529) 3%,
    var(--demo-surface, #fff)
  );
}
.task-nav-row.selected {
  background: color-mix(
    in srgb,
    var(--demo-text, #252529) 6%,
    var(--demo-surface, #fff)
  );
}
.task-row-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.task-row-meta {
  flex: none;
  color: var(--demo-muted, #777782);
  font-size: 12px;
  opacity: 0.65;
}
.task-status-dot {
  position: relative;
  width: 6px;
  height: 6px;
  margin: 0 4px;
  flex: none;
  border-radius: 50%;
  background: var(--accent, #7b61ff);
}
.task-status-dot::after {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1px solid var(--accent, #7b61ff);
  opacity: 0.2;
  animation: task-dot-breathe 2200ms ease-out infinite;
}
.task-idle-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 4px;
  background: var(--demo-muted, #777782);
  opacity: 0.4;
  flex: none;
}
.task-waiting-icon {
  color: #c78a43;
  flex: none;
  overflow: visible;
}
.task-waiting-dot {
  transform-origin: 18.6px 11.5px;
}
.task-nav-row:hover .task-waiting-dot {
  animation: task-waiting-ping 900ms ease 1;
}
.task-group-empty {
  margin: 0;
  padding: 7px 12px 7px 37px;
  color: var(--demo-muted, #777782);
  font-size: 12px;
}
.grouped-task-demo button:disabled { cursor: not-allowed; opacity: .5; }
.grouped-task-demo button:disabled .task-create-pen { transform: none; }
.grouped-task-demo button:focus-visible {
  outline: 2px solid var(--accent, #7b61ff);
  outline-offset: -2px;
}
.task-group-collapse-enter-active,
.task-group-collapse-leave-active {
  overflow: hidden;
  transition:
    height 320ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 220ms ease;
}
@keyframes task-create-write {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  45% { transform: translate(-.9px, .9px) rotate(-3deg) scale(1); }
}
@keyframes task-dot-breathe {
  0% {
    transform: scale(0.65);
    opacity: 0.28;
  }
  70%,
  100% {
    transform: scale(1.55);
    opacity: 0;
  }
}
@keyframes task-waiting-ping {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  40% {
    transform: scale(1.45);
    opacity: 0.5;
  }
}
@media (prefers-reduced-motion: reduce) {
  .grouped-task-demo *,
  .grouped-task-demo *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
