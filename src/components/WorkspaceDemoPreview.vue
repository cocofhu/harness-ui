<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { ArrowLeft, LayoutList, X } from "lucide-vue-next";
import SlidingTabs from "./ui/SlidingTabs.vue";
import GroupedTaskList from "./ui/GroupedTaskList.vue";

withDefaults(defineProps<{ active?: boolean }>(), { active: true });
const emit = defineEmits<{ close: [] }>();

type Status = "running" | "waiting" | "idle" | "completed";
interface Task { id: string; label: string; status: Status }
interface Group { id: string; label: string; icon: "running" | "auto" | "history"; items: Task[] }

const groups = ref<Group[]>([
  { id: "running", label: "In progress", icon: "running", items: [
    { id: "layout", label: "Review homepage layout", status: "running" },
    { id: "type", label: "Refine typography", status: "waiting" },
  ] },
  { id: "auto", label: "Automations", icon: "auto", items: [
    { id: "mobile", label: "Check mobile spacing", status: "running" },
    { id: "interaction", label: "Complete interaction states", status: "idle" },
  ] },
  { id: "history", label: "History", icon: "history", items: [
    { id: "navigation", label: "Organize navigation", status: "completed" },
    { id: "reference", label: "Collect references", status: "completed" },
  ] },
]);
const filter = ref<string>("all");
const selectedId = ref("layout");
const taskList = ref<InstanceType<typeof GroupedTaskList>>();
const previewContent = ref<HTMLElement>();
let scrollTransition: { start: number; target: number } | undefined;
const tasks = computed(() => groups.value.flatMap(group => group.items));
const tabs = computed(() => [
  { value: "all", label: "All", count: tasks.value.length },
  { value: "running", label: "Running", count: tasks.value.filter(task => task.status === "running").length },
  { value: "waiting", label: "Needs input", count: tasks.value.filter(task => task.status === "waiting").length },
  { value: "completed", label: "Completed", count: tasks.value.filter(task => task.status === "completed").length },
]);
const visibleGroups = computed(() => groups.value.map(group => ({
  ...group,
  items: group.items.filter(task => filter.value === "all" || task.status === filter.value),
})));
const selectedTask = computed(() => tasks.value.find(task => task.id === selectedId.value));
watch(visibleGroups, value => {
  const visible = value.flatMap(group => group.items);
  if (!visible.some(task => task.id === selectedId.value)) selectedId.value = visible[0]?.id ?? "";
});

const creating = ref(false);
const taskName = ref("");
const nameInput = ref<HTMLInputElement>();
let sequence = 0;
async function beginCreate() {
  creating.value = true;
  await nextTick();
  nameInput.value?.focus();
}
function createTask() {
  const label = taskName.value.trim();
  if (!label) return;
  const task: Task = { id: `custom-${++sequence}`, label, status: "idle" };
  groups.value.find(group => group.id === "auto")!.items.unshift(task);
  filter.value = "all";
  selectedId.value = task.id;
  taskName.value = "";
  creating.value = false;
}

export type WorkspaceShowcaseStep = "all" | "running" | "waiting" | "collapse-history" | "expand-history";
function showcaseStep(step: WorkspaceShowcaseStep) {
  if (step === "all" || step === "running" || step === "waiting") {
    filter.value = step;
    return;
  }
  const root = taskList.value?.$el as HTMLElement | undefined;
  const heading = root?.querySelector<HTMLButtonElement>('[data-group-id="history"] > .task-group-heading');
  const expanded = step === "expand-history";
  if (heading && !heading.disabled && heading.getAttribute("aria-expanded") !== String(expanded)) heading.click();
}
function showcaseTick(elapsed: number) {
  if (elapsed < 16000) {
    scrollTransition = undefined;
    return;
  }
  if (elapsed < 16200 || elapsed > 16800) return;
  const content = previewContent.value;
  const root = taskList.value?.$el as HTMLElement | undefined;
  const heading = root?.querySelector<HTMLElement>('[data-group-id="history"] > .task-group-heading');
  if (!content?.clientHeight || !heading) return;
  if (!scrollTransition) {
    const maximum = Math.max(0, content.scrollHeight - content.clientHeight);
    const destination = content.scrollTop + heading.getBoundingClientRect().top - content.getBoundingClientRect().top - 80;
    scrollTransition = { start: content.scrollTop, target: Math.max(0, Math.min(maximum, destination)) };
  }
  const progress = Math.max(0, Math.min(1, (elapsed - 16200) / 600));
  const eased = progress * progress * (3 - 2 * progress);
  content.scrollTop = scrollTransition.start + (scrollTransition.target - scrollTransition.start) * eased;
}
defineExpose({ showcaseStep, showcaseTick });
</script>

<template>
  <section v-show="active" class="workspace-demo-preview" :inert="!active || undefined" aria-label="Task panel preview">
    <header class="preview-titlebar">
      <button class="preview-return" type="button" @click="emit('close')"><ArrowLeft :size="15" aria-hidden="true" />Back to chat</button>
      <span class="preview-filename"><LayoutList :size="15" aria-hidden="true" />Tasks</span>
      <span class="preview-label">Preview</span>
      <button class="preview-close" type="button" aria-label="Close preview" title="Close preview" @click="emit('close')"><X :size="16" aria-hidden="true" /></button>
    </header>
    <div class="preview-addressbar"><div class="preview-address" aria-label="Preview page"><span>Demo</span><span class="address-divider" aria-hidden="true">/</span><span>Tasks</span></div></div>
    <div ref="previewContent" class="preview-content">
      <div class="preview-filter"><SlidingTabs v-model="filter" :items="tabs" label="Filter preview tasks" /></div>
      <form v-if="creating" class="preview-create" @submit.prevent="createTask" @keydown.esc.stop="creating = false">
        <input ref="nameInput" v-model="taskName" aria-label="Task name" placeholder="Task name" maxlength="80" />
        <button type="submit" :disabled="!taskName.trim()">Add</button>
        <button type="button" class="cancel-create" aria-label="Cancel new task" @click="creating = false"><X :size="15" aria-hidden="true" /></button>
      </form>
      <GroupedTaskList ref="taskList" v-model="selectedId" :groups="visibleGroups" @create="beginCreate" />
      <div v-if="selectedTask" class="preview-selection">
        <span class="selection-name">{{ selectedTask.label }}</span>
        <label class="selection-status"><span>Status</span><select v-model="selectedTask.status" aria-label="Task status">
          <option value="idle">Ready</option><option value="running">Running</option><option value="waiting">Needs input</option><option value="completed">Completed</option>
        </select></label>
      </div>
      <p v-else class="preview-empty">No tasks</p>
    </div>
  </section>
</template>

<style scoped>
.workspace-demo-preview { --demo-surface: var(--surface, #fff); --demo-text: var(--text, #18181b); --demo-muted: var(--text-secondary, #71717a); display: flex; flex-direction: column; width: 100%; min-width: 0; height: 100%; overflow: hidden; background: var(--demo-surface); color: var(--demo-text); font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
.workspace-demo-preview, .workspace-demo-preview * { box-sizing: border-box; }
.preview-titlebar { display: flex; align-items: center; gap: 8px; flex: 0 0 auto; min-height: 44px; padding: 0 10px; border-bottom: 1px solid color-mix(in srgb, var(--border, #e5e5e8) 65%, transparent); background: var(--canvas, #f4f4f5); }
.preview-filename { display: inline-flex; align-items: center; align-self: flex-end; gap: 8px; min-width: 0; min-height: 34px; margin-bottom: -1px; padding: 6px 10px; overflow: hidden; border: 1px solid var(--border, #e5e5e8); border-bottom-color: var(--demo-surface); border-radius: 8px 8px 0 0; background: var(--demo-surface); color: var(--demo-text); font-size: 13px; font-weight: 500; white-space: nowrap; text-overflow: ellipsis; }
.preview-filename svg { color: var(--demo-muted); }
.preview-label { margin-left: auto; color: var(--demo-muted); font-size: 12px; }
.preview-addressbar { display: flex; align-items: center; flex: 0 0 auto; min-height: 32px; padding: 3px 12px; border-bottom: 1px solid var(--border, #e5e5e8); }
.preview-address { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 24px; padding: 2px 8px; border-radius: 5px; background: var(--canvas, #f4f4f5); color: var(--demo-muted); font-size: 12px; line-height: 20px; }
.address-divider { color: var(--muted, #a1a1aa); }
.preview-close { display: grid; place-items: center; flex: 0 0 auto; width: 34px; min-height: 34px; padding: 0; border: 0; border-radius: 9px; background: transparent; color: var(--demo-muted); cursor: pointer; }
.preview-close:hover { background: color-mix(in srgb, var(--demo-text) 5%, transparent); color: var(--demo-text); }
.preview-return { display: none; align-items: center; justify-content: center; flex: 0 0 auto; gap: 6px; min-height: 44px; padding: 0 4px; border: 0; border-radius: 7px; background: transparent; color: var(--demo-text); font: inherit; font-size: 12px; cursor: pointer; }
.preview-return:hover { background: color-mix(in srgb, var(--demo-text) 5%, transparent); }
.preview-close:focus-visible, .preview-return:focus-visible, .preview-create :is(input, button):focus-visible, .selection-status select:focus-visible { outline: 2px solid var(--accent, #7b61ff); outline-offset: 2px; }
.preview-content { flex: 1; min-height: 0; min-width: 0; overflow-y: auto; overscroll-behavior: contain; scrollbar-gutter: stable; padding: 18px 16px; scrollbar-width: thin; scrollbar-color: transparent transparent; }
.preview-content:is(:hover, :focus-within) { scrollbar-color: color-mix(in srgb, var(--demo-muted) 30%, transparent) transparent; }
.preview-content::-webkit-scrollbar { width: 4px; }
.preview-content::-webkit-scrollbar-track { background: transparent; }
.preview-content::-webkit-scrollbar-thumb { border: 0; border-radius: 999px; background: transparent; }
.preview-content:is(:hover, :focus-within)::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--demo-muted) 30%, transparent); }
.preview-content::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
@supports selector(::-webkit-scrollbar) { .preview-content, .preview-content:is(:hover, :focus-within) { scrollbar-width: auto; scrollbar-color: auto; } }
.preview-filter { margin-bottom: 18px; }
.preview-filter :deep(.sliding-tabs-demo) { max-width: none; }
.preview-filter :deep(.sliding-tabs-demo button) { gap: 4px; padding-inline: 6px; font-size: 14px; }
.preview-content :deep(.grouped-task-demo) { width: 100%; max-width: none; max-height: none; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; }
.preview-content :deep(.task-groups-scroll) { max-height: none; overflow: visible; }
.preview-selection { display: flex; flex-direction: column; gap: 12px; margin-top: 18px; padding: 16px 4px 0; border-top: 1px solid var(--border, #e5e5e8); font-size: 14px; }
.selection-name { overflow-wrap: anywhere; line-height: 1.65; }
.selection-status { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: var(--demo-muted); font-size: 12px; }
.selection-status select { max-width: 65%; min-height: 30px; padding: 3px 8px; border: 1px solid var(--border, #e5e5e8); border-radius: 6px; background: var(--demo-surface); color: var(--demo-text); font: inherit; cursor: pointer; }
.preview-create { display: flex; align-items: center; gap: 6px; margin-bottom: 12px; }
.preview-create input { flex: 1; min-width: 0; height: 34px; padding: 0 9px; border: 1px solid var(--border, #e5e5e8); border-radius: 7px; background: var(--demo-surface); color: var(--demo-text); font: inherit; font-size: 13px; }
.preview-create button { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-height: 32px; padding: 0 10px; border: 1px solid var(--border, #e5e5e8); border-radius: 6px; background: var(--demo-surface); color: var(--demo-text); font: inherit; font-size: 12px; cursor: pointer; }
.preview-create button:disabled { color: var(--demo-muted); cursor: default; opacity: .5; }
.preview-create .cancel-create { padding-inline: 6px; border-color: transparent; }
.preview-empty { margin: 18px 4px 0; color: var(--demo-muted); font-size: 12px; }
@media (max-width: 480px) { .preview-content { padding: 14px 12px; }.preview-titlebar { padding-left: 12px; }.preview-return { display: inline-flex; }.preview-close { width: 44px; min-height: 44px; }.preview-filter :deep(.sliding-tabs-demo button) { font-size: 13px; }.preview-filter :deep(.sliding-tab-count) { display: none; } }
@media (max-width: 350px) {
  .preview-filter :deep(.sliding-tabs-demo) { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .preview-filename { display: none; }
}
</style>
