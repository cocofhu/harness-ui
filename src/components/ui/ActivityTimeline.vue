<script setup lang="ts">
import { computed, ref, useId, watch } from "vue";
import { Check, ChevronDown, CircleAlert, FileSearch, Globe, ListChecks, LoaderCircle, Terminal } from "lucide-vue-next";

type Section = "environment" | "thought" | "tools";
interface EnvironmentStep { label: string; duration?: string }
interface ActivityTool {
  id: string;
  label: string;
  name?: string;
  status: "success" | "failed" | "running" | "pending";
  duration?: string;
  input?: string;
  output?: string;
}
const props = withDefaults(defineProps<{
  environmentSteps?: EnvironmentStep[];
  environmentDuration?: string;
  thought?: string;
  tools?: ActivityTool[];
  initiallyExpanded?: Section[];
  busy?: boolean;
  disabled?: boolean;
}>(), {
  environmentSteps: () => [
    { label: "Connect workspace", duration: "8s" },
    { label: "Prepare project files", duration: "12s" },
    { label: "Start the assistant", duration: "5s" },
  ],
  environmentDuration: "25s",
  thought: "Review the content, then arrange the components. Keep a clear hierarchy and give each section room to breathe.",
  tools: () => [
    { id: "read", label: "Read design files", name: "read_file", status: "success", duration: "0.6s", input: "src/theme.css", output: "Read 24 style variables, including colors and typography." },
    { id: "search", label: "Search components", name: "web_search", status: "success", duration: "1.2s", input: "Accessible navigation patterns", output: "Found three navigation patterns with clear groups and keyboard controls." },
    { id: "preview", label: "Generate preview", name: "preview_page", status: "failed", duration: "1.0s", input: "http://localhost:3000", output: "The preview server is not running. Start the project and try again." },
  ],
  initiallyExpanded: () => ["tools"],
  busy: false,
  disabled: false,
});
const emit = defineEmits<{
  toggle: [section: Section, expanded: boolean];
  "tool-toggle": [toolId: string, expanded: boolean];
}>();
const instanceId = `activity-${useId().replace(/:/g, "")}`;
const expanded = ref(new Set<Section>(props.initiallyExpanded));
const expandedTools = ref(new Set<string>());
const foldSnapshots = new WeakMap<HTMLElement, { height: number; opacity: string }>();
function captureFold(id: string) {
  const panel = document.getElementById(id);
  if (panel) foldSnapshots.set(panel, { height: panel.getBoundingClientRect().height, opacity: getComputedStyle(panel).opacity });
}
const failedCount = computed(() => props.tools.filter(tool => tool.status === "failed").length);
const isWorking = computed(() => props.busy || props.tools.some(tool => tool.status === "running" || tool.status === "pending"));
const toolStatusLabel = { success: "Done", failed: "Failed", running: "In progress", pending: "Queued" };
function hasDetails(tool: ActivityTool) { return Boolean(tool.input || tool.output); }
watch(() => props.initiallyExpanded, sections => { expanded.value = new Set(sections); }, { deep: true });
watch(() => props.tools, tools => {
  const validIds = new Set(tools.filter(hasDetails).map(tool => tool.id));
  expandedTools.value = new Set([...expandedTools.value].filter(id => validIds.has(id)));
}, { deep: true });
function toggle(section: Section) {
  if (props.disabled) return;
  captureFold(`${instanceId}-${section}`);
  const next = new Set(expanded.value);
  next.has(section) ? next.delete(section) : next.add(section);
  expanded.value = next;
  emit("toggle", section, next.has(section));
}
function toggleTool(toolId: string) {
  const tool = props.tools.find(item => item.id === toolId);
  if (props.disabled || !tool || !hasDetails(tool)) return;
  captureFold(`${instanceId}-tool-${props.tools.findIndex(tool => tool.id === toolId)}`);
  const next = new Set(expandedTools.value);
  next.has(toolId) ? next.delete(toolId) : next.add(toolId);
  expandedTools.value = next;
  emit("tool-toggle", toolId, next.has(toolId));
}
function beforeEnter(element: Element) {
  const panel = element as HTMLElement;
  panel.removeAttribute("inert");
  const snapshot = foldSnapshots.get(panel);
  const height = snapshot?.height ?? panel.getBoundingClientRect().height;
  const opacity = snapshot?.opacity ?? getComputedStyle(panel).opacity;
  panel.style.height = `${height}px`;
  panel.style.opacity = height ? opacity : "0";
}
function enter(element: Element) {
  const panel = element as HTMLElement;
  void panel.offsetHeight;
  panel.style.height = `${panel.scrollHeight}px`;
  panel.style.opacity = "1";
  foldSnapshots.delete(panel);
}
function afterEnter(element: Element) {
  (element as HTMLElement).style.removeProperty("height");
  (element as HTMLElement).style.removeProperty("opacity");
}
function freezeFold(element: Element) {
  const panel = element as HTMLElement;
  const snapshot = foldSnapshots.get(panel);
  const hidden = getComputedStyle(panel).display === "none";
  const height = hidden ? snapshot?.height ?? 0 : panel.getBoundingClientRect().height;
  const opacity = hidden ? snapshot?.opacity ?? "0" : getComputedStyle(panel).opacity;
  foldSnapshots.set(panel, { height, opacity });
  panel.style.height = `${height}px`;
  panel.style.opacity = opacity;
}
function afterLeave(element: Element) {
  const panel = element as HTMLElement;
  panel.style.removeProperty("height");
  panel.style.removeProperty("opacity");
}
function leave(element: Element) {
  const panel = element as HTMLElement;
  panel.setAttribute("inert", "");
  panel.style.height = `${panel.getBoundingClientRect().height}px`;
  void panel.offsetHeight;
  panel.style.height = "0px";
  panel.style.opacity = "0";
}
</script>

<template>
  <section class="activity-timeline" aria-label="Task activity">
    <header class="activity-heading"><span><ListChecks :size="17" :stroke-width="1.6" /> Activity</span><span aria-live="polite">{{ isWorking ? 'In progress' : 'Finished' }}</span></header>
    <div class="activity-section">
      <button class="activity-section-toggle" type="button" :disabled="disabled" :aria-expanded="expanded.has('environment')" :aria-controls="`${instanceId}-environment`" @click="toggle('environment')"><Check :size="15" class="status-success" /><strong>Environment ready</strong><span class="section-meta">{{ environmentSteps.length }} steps <span>·</span> {{ environmentDuration }}</span><ChevronDown :size="14" :class="{ turned: expanded.has('environment') }" /></button>
      <Transition name="activity-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="expanded.has('environment')" :inert="!expanded.has('environment') || undefined" :aria-hidden="!expanded.has('environment') || undefined" :id="`${instanceId}-environment`" class="activity-fold"><ol class="environment-list"><li v-for="step in environmentSteps" :key="step.label"><Check :size="13" /><span>{{ step.label }}</span><small>{{ step.duration }}</small></li></ol></div></Transition>
    </div>
    <div class="activity-section">
      <button class="activity-section-toggle" type="button" :disabled="disabled" :aria-expanded="expanded.has('thought')" :aria-controls="`${instanceId}-thought`" @click="toggle('thought')"><LoaderCircle v-if="busy" :size="15" class="activity-spinner" /><Check v-else :size="15" class="status-success" /><strong>Thinking process</strong><span class="section-meta">{{ busy ? 'In progress' : 'Completed' }}</span><ChevronDown :size="14" :class="{ turned: expanded.has('thought') }" /></button>
      <Transition name="activity-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="expanded.has('thought')" :inert="!expanded.has('thought') || undefined" :aria-hidden="!expanded.has('thought') || undefined" :id="`${instanceId}-thought`" class="activity-fold"><p class="thought-summary">{{ thought }}</p></div></Transition>
    </div>
    <div class="activity-section tools-section">
      <button class="activity-section-toggle tools-heading" type="button" :disabled="disabled" :aria-expanded="expanded.has('tools')" :aria-controls="`${instanceId}-tools`" @click="toggle('tools')"><LoaderCircle v-if="isWorking" :size="15" class="activity-spinner" /><CircleAlert v-else-if="failedCount" :size="15" class="status-failed" /><Check v-else :size="15" class="status-success" /><strong>{{ tools.length }} tool{{ tools.length === 1 ? '' : 's' }} used</strong><span v-if="failedCount" class="failed-count">{{ failedCount }} failed</span><span v-else class="section-meta">{{ isWorking ? 'In progress' : 'Completed' }}</span><ChevronDown :size="14" :class="{ turned: expanded.has('tools') }" /></button>
      <Transition name="activity-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="expanded.has('tools')" :inert="!expanded.has('tools') || undefined" :aria-hidden="!expanded.has('tools') || undefined" :id="`${instanceId}-tools`" class="activity-fold"><ul class="activity-tools"><li v-for="(tool, index) in tools" :key="tool.id" :class="{ 'failed-tool': tool.status === 'failed' }"><component :is="hasDetails(tool) ? 'button' : 'div'" class="activity-tool-toggle" :type="hasDetails(tool) ? 'button' : undefined" :disabled="hasDetails(tool) ? disabled : undefined" :aria-expanded="hasDetails(tool) ? expandedTools.has(tool.id) : undefined" :aria-controls="hasDetails(tool) ? `${instanceId}-tool-${index}` : undefined" @click="toggleTool(tool.id)"><LoaderCircle v-if="tool.status === 'running'" :size="15" class="activity-spinner" /><CircleAlert v-else-if="tool.status === 'failed'" :size="15" class="status-failed" /><FileSearch v-else-if="index === 0" :size="15" /><Globe v-else-if="index === 1" :size="15" /><Terminal v-else :size="15" /><span class="tool-label">{{ tool.label }}</span><span class="tool-duration">{{ tool.duration }}</span><span :class="['tool-state', { 'status-failed': tool.status === 'failed' }]">{{ toolStatusLabel[tool.status] }}</span><ChevronDown v-if="hasDetails(tool)" :size="13" :class="{ turned: expandedTools.has(tool.id) }" /></component><Transition name="activity-fold" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="freezeFold" @leave-cancelled="freezeFold"><div v-show="hasDetails(tool) && expandedTools.has(tool.id)" :inert="!expandedTools.has(tool.id) || undefined" :aria-hidden="!expandedTools.has(tool.id) || undefined" :id="`${instanceId}-tool-${index}`" class="activity-fold"><div class="tool-details"><code v-if="tool.name" class="tool-name">{{ tool.name }}</code><div v-if="tool.input"><span class="detail-label">Input</span><pre>{{ tool.input }}</pre></div><div v-if="tool.output"><span :class="['detail-label', { 'status-failed': tool.status === 'failed' }]">Output</span><pre :class="{ 'failed-output': tool.status === 'failed' }">{{ tool.output }}</pre></div><p v-if="!tool.input && !tool.output" class="empty-details">No additional output.</p></div></div></Transition></li></ul></div></Transition>
    </div>
  </section>
</template>

<style scoped>
.activity-timeline { --activity-success: #89a28d; --activity-error: #c17a72; --activity-hover: color-mix(in srgb, var(--demo-muted, #777782) 8%, transparent); box-sizing: border-box; width: 360px; max-width: 100%; padding: 20px 20px 14px; border: 1px solid var(--demo-border, #e8e8ed); border-radius: 11px; color: var(--demo-text, #252529); background: var(--demo-surface, #fff); font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 13px; text-align: left; }
.activity-timeline *, .activity-timeline *::before, .activity-timeline *::after { box-sizing: border-box; }.activity-timeline button { font: inherit; cursor: pointer; }.activity-timeline button:focus-visible { outline: 2px solid color-mix(in srgb, var(--accent, #7b61ff) 65%, transparent); outline-offset: 2px; }
.activity-heading { display: flex; align-items: center; justify-content: space-between; padding: 0 1px 15px; color: var(--demo-muted, #777782); }.activity-heading > span:first-child { display: flex; align-items: center; gap: 7px; font-size: 15px; font-weight: 500; color: var(--demo-text, #252529); }.activity-heading > span:last-child { font-size: 12px; }
.activity-section { border-top: 1px solid var(--demo-border, #e8e8ed); }.activity-section-toggle { display: flex; align-items: center; gap: 8px; width: 100%; min-height: 44px; padding: 0 1px; border: 0; border-radius: 4px; background: transparent; color: var(--demo-muted, #777782); text-align: left; transition: background-color 160ms ease, color 160ms ease; }.activity-section-toggle:is(:hover, :focus-visible):not(:disabled) { background: var(--activity-hover); color: var(--demo-text, #252529); }.activity-section-toggle strong { color: var(--demo-text, #252529); font-size: 14px; font-weight: 500; }.activity-section-toggle > svg { flex: 0 0 auto; }.activity-section-toggle > svg:last-child { margin-left: 1px; color: var(--demo-muted, #777782); transition: transform .3s cubic-bezier(.22,1,.36,1); }.activity-section-toggle .turned, .activity-tool-toggle .turned { transform: rotate(180deg); }
.section-meta { display: flex; align-items: center; gap: 6px; margin-left: auto; color: var(--demo-muted, #777782); font-size: 12px; font-variant-numeric: tabular-nums; }.section-meta > span { opacity: .6; }.failed-count { margin-left: auto; color: var(--activity-error); font-size: 12px; }.status-success { color: var(--activity-success); }.status-failed { color: var(--activity-error); }
.activity-timeline button:disabled { opacity: .5; cursor: not-allowed; }
.activity-spinner { color: var(--accent, #7b61ff); }
.activity-spinner :deep(path) { transform-origin: 12px 12px; animation: activity-spinner-turn 1.1s linear infinite; }
@keyframes activity-spinner-turn { to { transform: rotate(360deg); } }
.activity-fold { overflow: hidden; }.activity-fold-enter-active, .activity-fold-leave-active { transition: height .34s cubic-bezier(.22,1,.36,1), opacity .24s ease; }.environment-list, .activity-tools { min-width: 0; margin: 0 0 11px 7px; padding: 0 0 0 15px; border-left: 1px solid var(--demo-border, #e8e8ed); list-style: none; }.environment-list { display: grid; gap: 0; padding-top: 2px; }.environment-list li { display: flex; align-items: center; gap: 9px; min-height: 33px; color: var(--demo-muted, #777782); font-size: 13px; }.environment-list li > svg { color: var(--activity-success); }.environment-list small { margin-left: auto; padding-right: 15px; font-size: 12px; font-variant-numeric: tabular-nums; }.thought-summary { margin: 0 0 13px 22px; padding: 1px 8px 1px 0; color: var(--demo-muted, #777782); font-size: 13px; line-height: 1.8; overflow-wrap: anywhere; }
.activity-tools { padding-top: 0; }.activity-tool-toggle { display: flex; align-items: center; gap: 8px; width: 100%; min-height: 37px; padding: 5px 0 5px 1px; border: 0; border-radius: 4px; color: var(--demo-muted, #777782); background: transparent; text-align: left; transition: background-color 160ms ease, color 160ms ease; }button.activity-tool-toggle:is(:hover, :focus-visible):not(:disabled) { background: var(--activity-hover); color: var(--demo-text, #252529); }.activity-tool-toggle > svg { flex: 0 0 auto; }.tool-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--demo-text, #252529); font-size: 13px; }.tool-duration { margin-left: auto; font-size: 12px; font-variant-numeric: tabular-nums; }.tool-state { font-size: 12px; }.activity-tool-toggle > svg:last-child { margin: 0 1px 0 0; transition: transform .3s cubic-bezier(.22,1,.36,1); }
.tool-details { display: grid; gap: 10px; margin: 4px 1px 10px 20px; }.tool-name { color: var(--demo-muted, #777782); font-family: "SFMono-Regular", Consolas, monospace; font-size: 12px; }.detail-label { display: block; margin-bottom: 4px; color: var(--demo-muted, #777782); font-size: 12px; }.tool-details pre { margin: 0; color: var(--demo-text, #252529); font-family: "SFMono-Regular", Consolas, monospace; font-size: 12px; line-height: 1.7; white-space: pre-wrap; overflow-wrap: anywhere; }.tool-details pre.failed-output { border-left: 2px solid color-mix(in srgb, var(--activity-error) 50%, transparent); padding-left: 9px; color: var(--demo-muted, #777782); font-family: inherit; font-size: 12px; }.empty-details { margin: 0; color: var(--demo-muted, #777782); font-size: 12px; }
@media (prefers-reduced-motion: reduce) { .activity-spinner :deep(path) { animation: none; } .activity-fold-enter-active, .activity-fold-leave-active, .activity-section-toggle, .activity-tool-toggle, .activity-section-toggle > svg:last-child, .activity-tool-toggle > svg:last-child { transition-duration: .01ms; } }
</style>
