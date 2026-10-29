<script lang="ts">
export interface SelectorOption {
  value: string;
  label: string;
  hint?: string;
  disabled?: boolean;
}

// Opening another instance dismisses the previous panel, including portals.
let closeOpenSelector: (() => void) | undefined;
</script>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import { Check, ChevronDown, Search } from "lucide-vue-next";

const props = withDefaults(defineProps<{
  modelValue?: string;
  options?: SelectorOption[];
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  emptyText?: string;
  ariaLabel?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  allowCustom?: boolean;
  customPosition?: "first" | "last";
  loading?: boolean;
  size?: "sm" | "md";
  variant?: "outline" | "ghost";
}>(), {
  options: () => [], disabled: false, invalid: false,
  placeholder: "Select an option", emptyText: "No matching options",
  ariaLabel: "Select an option", searchable: false, searchPlaceholder: "Search options…",
  allowCustom: false, customPosition: "first", loading: false,
  size: "md", variant: "outline",
});
const emit = defineEmits<{ "update:modelValue": [value: string] }>();
const instanceId = `selector-${useId().replace(/:/g, "")}`;
const listboxId = `${instanceId}-listbox`;
const optionId = (index: number) => `${instanceId}-option-${index}`;
const root = ref<HTMLElement>();
const trigger = ref<HTMLButtonElement>();
const panel = ref<HTMLElement>();
const list = ref<HTMLElement>();
const searchInput = ref<HTMLInputElement>();
const open = ref(false);
const search = ref("");
const scrolling = ref(false);
const localValue = ref("");
const currentValue = computed(() => props.modelValue === undefined ? localValue.value : props.modelValue);
const matched = computed(() => props.options.find(option => option.value === currentValue.value));
const isPlaceholder = computed(() => !matched.value && !(props.allowCustom && currentValue.value));
const selectedLabel = computed(() => matched.value?.label ?? (props.allowCustom && currentValue.value ? currentValue.value : props.placeholder));
const panelStyle = ref<Record<string, string>>({ visibility: "hidden" });
const activeIndex = ref(-1);
let panelPositioned = false;
let positionFrame = 0;
let scrollTimer: ReturnType<typeof setTimeout> | undefined;
let observer: ResizeObserver | undefined;
let disposed = false;

const rows = computed(() => {
  const query = props.searchable ? search.value.trim().toLowerCase() : "";
  const options = props.options.filter(option => !query || [option.label, option.value, option.hint || ""].some(value => value.toLowerCase().includes(query)))
    .map(option => ({ ...option, custom: false }));
  const customValue = props.searchable && props.allowCustom ? search.value.trim() : "";
  const custom = customValue && !props.options.some(option => option.value === customValue)
    ? [{ value: customValue, label: customValue, hint: "", disabled: false, custom: true }]
    : [];
  return props.customPosition === "last" ? [...options, ...custom] : [...custom, ...options];
});
const enabledIndices = computed(() => rows.value.flatMap((row, index) => row.disabled ? [] : [index]));
const activeDescendant = computed(() => open.value && rows.value[activeIndex.value] && !rows.value[activeIndex.value]!.disabled ? optionId(activeIndex.value) : undefined);

// Text interpolation keeps both labels and the highlighted query safe HTML.
function highlightParts(text: string) {
  const query = props.searchable ? search.value.trim() : "";
  const index = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;
  return index < 0 ? { before: text, match: "", after: "" }
    : { before: text.slice(0, index), match: text.slice(index, index + query.length), after: text.slice(index + query.length) };
}

function anchorVisible(element: HTMLElement, rect: DOMRect) {
  if (!element.isConnected || rect.width <= 0 || rect.height <= 0 || element.closest('[inert], [hidden], [aria-hidden="true"]')) return false;
  let left = Math.max(0, rect.left), right = Math.min(innerWidth, rect.right);
  let top = Math.max(0, rect.top), bottom = Math.min(innerHeight, rect.bottom);
  for (let ancestor = element.parentElement; ancestor; ancestor = ancestor.parentElement) {
    const style = getComputedStyle(ancestor);
    const box = ancestor.getBoundingClientRect();
    if (/auto|scroll|hidden|clip/.test(style.overflowX)) {
      left = Math.max(left, box.left + ancestor.clientLeft);
      right = Math.min(right, box.left + ancestor.clientLeft + ancestor.clientWidth);
    }
    if (/auto|scroll|hidden|clip/.test(style.overflowY)) {
      top = Math.max(top, box.top + ancestor.clientTop);
      bottom = Math.min(bottom, box.top + ancestor.clientTop + ancestor.clientHeight);
    }
    if (left >= right || top >= bottom) return false;
  }
  return left < right && top < bottom;
}

function placePanel() {
  if (!open.value || !trigger.value || !panel.value) return;
  const rect = trigger.value.getBoundingClientRect();
  if (!anchorVisible(trigger.value, rect)) { closePanel(); return; }
  const viewport = window.visualViewport;
  const margin = 8, gap = 6, limit = 288;
  const viewportLeft = viewport?.offsetLeft || 0, viewportTop = viewport?.offsetTop || 0;
  const viewportWidth = viewport?.width || innerWidth, viewportHeight = viewport?.height || innerHeight;
  const headerHeight = panel.value.querySelector<HTMLElement>(".selector-search-bar")?.offsetHeight || 0;
  const naturalHeight = Math.min(limit, headerHeight + (list.value?.scrollHeight || 0) + 2);
  const below = Math.max(0, viewportTop + viewportHeight - rect.bottom - gap - margin);
  const above = Math.max(0, rect.top - viewportTop - gap - margin);
  const flip = below < naturalHeight && above > below;
  const maxHeight = Math.min(limit, flip ? above : below);
  const height = Math.min(naturalHeight, maxHeight);
  const width = Math.min(props.variant === "ghost" ? Math.max(168, rect.width) : rect.width, Math.max(0, viewportWidth - margin * 2));
  const left = Math.max(viewportLeft + margin, Math.min(rect.left, viewportLeft + viewportWidth - width - margin));
  const top = Math.max(viewportTop + margin, Math.min(flip ? rect.top - gap - height : rect.bottom + gap, viewportTop + viewportHeight - height - margin));
  panelStyle.value = { position: "fixed", top: `${Math.round(top)}px`, left: `${Math.round(left)}px`, width: `${Math.round(width)}px`, maxHeight: `${Math.floor(maxHeight)}px`, visibility: "visible", zIndex: "60" };
}

function revealActiveOption() {
  if (!open.value || !panelPositioned || !list.value) return;
  const option = document.getElementById(optionId(activeIndex.value));
  if (!option) return;
  // Scroll only the list. scrollIntoView could also move the page or a dialog.
  const optionRect = option.getBoundingClientRect(), listRect = list.value.getBoundingClientRect();
  if (optionRect.top < listRect.top + 4) list.value.scrollTop -= listRect.top + 4 - optionRect.top;
  else if (optionRect.bottom > listRect.bottom - 4) list.value.scrollTop += optionRect.bottom - listRect.bottom + 4;
}
function onListScroll() {
  scrolling.value = true;
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => { scrolling.value = false; }, 650);
}
function schedulePosition(event?: Event) {
  if (!open.value || (event?.target instanceof Node && panel.value?.contains(event.target))) return;
  cancelAnimationFrame(positionFrame);
  positionFrame = requestAnimationFrame(() => { positionFrame = 0; placePanel(); });
}
async function openPanel(edge?: "first" | "last") {
  if (props.disabled || disposed) return;
  if (closeOpenSelector !== closePanel) closeOpenSelector?.();
  closeOpenSelector = closePanel;
  panelPositioned = false;
  panelStyle.value = { position: "fixed", visibility: "hidden" };
  search.value = "";
  open.value = true;
  const selectedIndex = rows.value.findIndex(row => row.value === currentValue.value && !row.disabled);
  activeIndex.value = edge === "last" ? enabledIndices.value.at(-1) ?? -1 : edge === "first" ? enabledIndices.value[0] ?? -1 : selectedIndex >= 0 ? selectedIndex : enabledIndices.value[0] ?? -1;
  await nextTick();
  if (!open.value || disposed) return;
  placePanel();
  await nextTick();
  if (!open.value || disposed) return;
  panelPositioned = true;
  revealActiveOption();
  searchInput.value?.focus({ preventScroll: true });
  observer?.observe(panel.value!);
  schedulePosition();
}
function closePanel(restoreFocus = false) {
  if (closeOpenSelector === closePanel) closeOpenSelector = undefined;
  cancelAnimationFrame(positionFrame);
  positionFrame = 0;
  if (panel.value) observer?.unobserve(panel.value);
  open.value = false;
  panelPositioned = false;
  clearTimeout(scrollTimer);
  scrolling.value = false;
  search.value = "";
  if (restoreFocus && !disposed) trigger.value?.focus({ preventScroll: true });
}
function hideLeavingPanel(element: Element) {
  element.setAttribute("aria-hidden", "true");
  (element as HTMLElement).inert = true;
}
function choose(index: number) {
  const row = rows.value[index];
  if (!open.value || props.disabled || !row || row.disabled) return;
  if (props.modelValue === undefined) localValue.value = row.value;
  emit("update:modelValue", row.value);
  closePanel(true);
}
function togglePanel(event: MouseEvent) {
  event.stopPropagation();
  if (open.value) closePanel(); else void openPanel();
}
function moveActive(delta: number) {
  const indices = enabledIndices.value;
  const index = indices.indexOf(activeIndex.value);
  activeIndex.value = indices.length ? indices[(index + delta + indices.length) % indices.length]! : -1;
}
function handleListKeydown(event: KeyboardEvent) {
  if (!open.value || props.disabled || event.isComposing || event.keyCode === 229 || event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.key === "Tab") {
    if (panel.value?.contains(document.activeElement)) trigger.value?.focus({ preventScroll: true });
    closePanel();
    return; // Let Tab continue in the trigger's original form order.
  }
  if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); closePanel(true); return; }
  if (["ArrowDown", "ArrowUp"].includes(event.key)) {
    event.preventDefault(); event.stopPropagation(); moveActive(event.key === "ArrowDown" ? 1 : -1); return;
  }
  if (["Home", "End"].includes(event.key) && event.target !== searchInput.value) {
    event.preventDefault(); event.stopPropagation(); activeIndex.value = event.key === "Home" ? enabledIndices.value[0] ?? -1 : enabledIndices.value.at(-1) ?? -1; return;
  }
  if (event.key === "Enter" || (event.key === " " && !props.searchable)) {
    event.preventDefault(); event.stopPropagation(); choose(activeIndex.value);
  }
}
function onTriggerKeydown(event: KeyboardEvent) {
  if (props.disabled || open.value || event.isComposing || event.keyCode === 229 || event.ctrlKey || event.metaKey || event.altKey) return;
  if (["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(event.key)) {
    event.preventDefault(); event.stopPropagation();
    void openPanel(event.key === "Home" ? "first" : event.key === "End" ? "last" : undefined);
  }
}
function onDocumentKeydown(event: KeyboardEvent) {
  const target = event.target;
  if (target instanceof Node && (root.value?.contains(target) || panel.value?.contains(target))) handleListKeydown(event);
}
function onOutsidePointer(event: PointerEvent) {
  const target = event.target;
  if (target instanceof Node && !root.value?.contains(target) && !panel.value?.contains(target)) closePanel();
}
function onFocusin(event: FocusEvent) {
  const target = event.target;
  if (open.value && target instanceof Node && !root.value?.contains(target) && !panel.value?.contains(target)) closePanel();
}
function onVisibilityChange() { if (document.hidden) closePanel(); }
watch([rows, search], ([next, query], [previous, previousQuery]) => {
  const previousValue = previous?.[activeIndex.value]?.value;
  const index = query === previousQuery ? next.findIndex(row => row.value === previousValue && !row.disabled) : -1;
  activeIndex.value = index >= 0 ? index : enabledIndices.value[0] ?? -1;
  if (open.value) void nextTick(() => { placePanel(); revealActiveOption(); });
});
watch(activeIndex, () => { if (open.value) void nextTick(revealActiveOption); });
watch(() => props.disabled, disabled => { if (disabled) closePanel(); }, { flush: "sync" });
watch(() => props.searchable, () => closePanel());
onMounted(() => {
  observer = new ResizeObserver(() => schedulePosition());
  if (root.value) observer.observe(root.value);
  document.addEventListener("pointerdown", onOutsidePointer, true);
  document.addEventListener("keydown", onDocumentKeydown, true);
  document.addEventListener("focusin", onFocusin);
  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("scroll", schedulePosition, true);
  window.addEventListener("resize", schedulePosition);
  window.visualViewport?.addEventListener("resize", schedulePosition);
  window.visualViewport?.addEventListener("scroll", schedulePosition);
});
onBeforeUnmount(() => {
  disposed = true;
  closePanel();
  observer?.disconnect();
  document.removeEventListener("pointerdown", onOutsidePointer, true);
  document.removeEventListener("keydown", onDocumentKeydown, true);
  document.removeEventListener("focusin", onFocusin);
  document.removeEventListener("visibilitychange", onVisibilityChange);
  window.removeEventListener("scroll", schedulePosition, true);
  window.removeEventListener("resize", schedulePosition);
  window.visualViewport?.removeEventListener("resize", schedulePosition);
  window.visualViewport?.removeEventListener("scroll", schedulePosition);
});
</script>

<template>
  <div ref="root" class="selector" :class="[`selector--${size}`, `selector--${variant}`, { 'is-open': open, 'is-invalid': invalid }]">
    <button ref="trigger" type="button" class="selector-trigger" :disabled="disabled" :role="searchable ? undefined : 'combobox'" aria-haspopup="listbox" :aria-expanded="open" :aria-controls="open ? listboxId : undefined" :aria-activedescendant="searchable ? undefined : activeDescendant" :aria-invalid="invalid || undefined" :aria-label="ariaLabel" @click="togglePanel" @keydown="onTriggerKeydown">
      <slot name="leading" :value="currentValue" />
      <span class="selector-value" :class="{ 'is-placeholder': isPlaceholder }">{{ selectedLabel }}</span>
      <ChevronDown class="selector-chevron" :size="14" aria-hidden="true" />
    </button>
    <Teleport to="body">
      <Transition name="selector-pop" @before-leave="hideLeavingPanel">
        <div v-if="open" ref="panel" class="selector-panel" :class="[`selector-panel--${size}`, `selector-panel--${variant}`]" :style="panelStyle" @click.stop>
          <div v-if="searchable" class="selector-search-bar">
            <Search :size="14" aria-hidden="true" />
            <input ref="searchInput" v-model="search" class="selector-search" type="search" role="combobox" aria-autocomplete="list" :aria-expanded="open" :aria-controls="listboxId" :aria-activedescendant="activeDescendant" :aria-label="searchPlaceholder" :placeholder="searchPlaceholder" autocomplete="off" />
          </div>
          <div :id="listboxId" ref="list" class="selector-list" :data-scrolling="scrolling || undefined" @scroll.passive="onListScroll" role="listbox" :aria-label="ariaLabel" :aria-busy="loading || undefined">
            <button v-for="(row, index) in rows" :id="optionId(index)" :key="`${row.custom ? 'custom' : 'option'}:${row.value}`" class="selector-option" :class="{ 'is-active': index === activeIndex, 'is-selected': row.value === currentValue }" type="button" role="option" tabindex="-1" :disabled="row.disabled" :aria-selected="row.value === currentValue" @pointermove="!row.disabled && (activeIndex = index)" @pointerdown.prevent @click.stop="choose(index)">
              <slot name="option-leading" :option="row" />
              <span v-if="row.custom" class="selector-option-label">Use “{{ row.value }}”</span>
              <span v-else class="selector-option-label">{{ highlightParts(row.label).before }}<mark v-if="highlightParts(row.label).match">{{ highlightParts(row.label).match }}</mark>{{ highlightParts(row.label).after }}</span>
              <span v-if="row.hint" class="selector-option-hint">{{ highlightParts(row.hint).before }}<mark v-if="highlightParts(row.hint).match">{{ highlightParts(row.hint).match }}</mark>{{ highlightParts(row.hint).after }}</span>
              <Check class="selector-check" :class="{ 'is-visible': row.value === currentValue }" :size="14" aria-hidden="true" />
            </button>
            <p v-if="!rows.length" class="selector-empty" role="status">{{ loading ? 'Loading options…' : emptyText }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.selector, .selector-panel {
  --selector-bg: var(--demo-surface, #fff);
  --selector-fg: var(--demo-text, #252529);
  --selector-muted: var(--demo-muted, #6b6b76);
  --selector-border: var(--demo-border, #e8e8ed);
  --selector-accent: var(--accent, #7b61ff);
  --selector-hover: color-mix(in srgb, var(--selector-fg) 5%, var(--selector-bg));
  --selector-active: color-mix(in srgb, var(--selector-accent) 9%, var(--selector-bg));
  box-sizing: border-box;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  color: var(--selector-fg);
}
.selector *, .selector-panel * { box-sizing: border-box; }
.selector { width: 100%; min-width: 0; }
.selector-trigger { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 38px; padding: 8px 12px; border: 1px solid var(--selector-border); border-radius: 8px; background: var(--selector-bg); color: var(--selector-fg); font: inherit; line-height: 20px; text-align: left; cursor: pointer; transition: border-color 160ms, background-color 160ms; }
.selector-trigger:hover:not(:disabled) { border-color: color-mix(in srgb, var(--selector-fg) 24%, var(--selector-border)); }
.selector-trigger:focus-visible { outline: 2px solid color-mix(in srgb, var(--selector-accent) 55%, transparent); outline-offset: 2px; }
.selector.is-open .selector-trigger { border-color: var(--selector-accent); }
.selector-trigger:disabled { opacity: .5; cursor: default; }
.selector-value { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.selector-value.is-placeholder, .selector-chevron { color: var(--selector-muted); }
.selector-chevron { flex: 0 0 auto; transition: transform 160ms cubic-bezier(.22,1,.36,1); }
.is-open .selector-chevron { transform: rotate(180deg); }
.selector--sm { font-size: 12px; }
.selector--sm .selector-trigger { min-height: 32px; padding: 5px 10px; }
.selector--ghost .selector-trigger { min-height: 36px; padding: 5px 8px; border-color: transparent; background: transparent; color: var(--selector-muted); }
.selector--ghost .selector-trigger:hover:not(:disabled) { border-color: var(--selector-border); background: var(--selector-hover); color: var(--selector-fg); }
.selector--ghost.is-open .selector-trigger { border-color: color-mix(in srgb, var(--selector-accent) 35%, transparent); background: color-mix(in srgb, var(--selector-accent) 4%, var(--selector-bg)); }
.selector--ghost.selector--sm .selector-trigger { min-height: 30px; padding-block: 4px; }
.selector.is-invalid .selector-trigger, .selector.is-invalid .selector-trigger:hover, .selector.is-invalid.is-open .selector-trigger { border-color: #c17a72; }
.selector-panel { display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--selector-border); border-radius: 8px; background: var(--selector-bg); box-shadow: 0 8px 28px #00000012, 0 2px 8px #00000006; text-align: left; }
.selector-panel--ghost { box-shadow: 0 6px 20px #0000001a; }
.selector-panel--sm { font-size: 12px; }
.selector-search-bar { display: flex; align-items: center; flex: 0 0 auto; gap: 7px; min-width: 0; padding: 8px 10px; border-bottom: 1px solid var(--selector-border); color: var(--selector-muted); }
.selector-search-bar > svg { flex: 0 0 auto; }
.selector-search { width: 100%; min-width: 0; height: 28px; padding: 0; border: 0; border-radius: 0; outline: none; background: transparent; color: var(--selector-fg); font: inherit; font-size: 12px; line-height: 20px; }
.selector-search::placeholder { color: var(--selector-muted); }
.selector-search::-webkit-search-cancel-button { appearance: none; }
.selector-list { min-height: 0; overflow-y: auto; padding: 4px; scrollbar-width: thin; scrollbar-color: transparent transparent; overscroll-behavior: contain; }
.selector-option { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 36px; padding: 8px 10px; border: 0; border-radius: 6px; background: transparent; color: var(--selector-muted); font: inherit; line-height: 20px; text-align: left; cursor: pointer; transition: background-color 120ms, color 120ms; }
.selector-option:hover:not(:disabled) { background: var(--selector-hover); color: var(--selector-fg); }
.selector-option.is-active:not(:disabled) { background: var(--selector-active); color: var(--selector-fg); }
.selector-option.is-selected { color: var(--selector-accent); }
.selector-option:disabled { opacity: .4; cursor: default; }
.selector-option-label { min-width: 0; flex: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.selector-option-hint { min-width: 0; max-width: 38%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 11px; color: var(--selector-muted); }
.selector-check { flex: 0 0 auto; color: var(--selector-accent); visibility: hidden; }
.selector-check.is-visible { visibility: visible; }
.selector-panel mark { padding: 0; border-radius: 2px; background: color-mix(in srgb, var(--selector-accent) 25%, transparent); color: inherit; }
.selector-panel--ghost .selector-option { min-height: 32px; padding-block: 6px; }
.selector-empty { margin: 0; padding: 16px 10px; color: var(--selector-muted); font-size: 12px; line-height: 20px; text-align: center; }
.selector-list:is(:hover, :focus-within, [data-scrolling]) { scrollbar-color: color-mix(in srgb, var(--selector-muted) 28%, transparent) transparent; }
.selector-list::-webkit-scrollbar { width: 4px; height: 4px; }
.selector-list::-webkit-scrollbar-track, .selector-list::-webkit-scrollbar-thumb { background: transparent; }
.selector-list:is(:hover, :focus-within, [data-scrolling])::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--selector-muted) 28%, transparent); border-radius: 999px; }
.selector-list::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
@supports selector(::-webkit-scrollbar) { .selector-list, .selector-list:is(:hover, :focus-within, [data-scrolling]) { scrollbar-width: auto; scrollbar-color: auto; } }
.selector-pop-enter-active, .selector-pop-leave-active { transition: opacity 160ms ease, transform 160ms cubic-bezier(.22,1,.36,1); }
.selector-pop-enter-from, .selector-pop-leave-to { opacity: 0; transform: translateY(-3px); }
@media (max-width: 767px), (pointer: coarse) { .selector-trigger, .selector--sm .selector-trigger, .selector--ghost .selector-trigger, .selector--ghost.selector--sm .selector-trigger, .selector-option, .selector-panel--ghost .selector-option { min-height: 44px; } }
@media (prefers-reduced-motion: reduce) { .selector-trigger, .selector-chevron, .selector-option, .selector-pop-enter-active, .selector-pop-leave-active { transition: none; } }
</style>
