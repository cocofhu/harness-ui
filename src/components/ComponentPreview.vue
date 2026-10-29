<script setup lang="ts">
import { ref, watch } from "vue";
import type { ComponentEntry } from "../data/catalog";
import ChatConversationDemo from "./ChatConversationDemo.vue";

const props = defineProps<{ entry: ComponentEntry }>();
defineEmits<{ action: [] }>();
const statuses = ["running", "queued", "waiting_human", "completed", "failed", "cancelled"];
const selectorStatus = ref("in-progress");
const selectorPriority = ref("medium");
const statusOptions = [
  { value: "backlog", label: "Backlog", hint: "Not started" },
  { value: "in-progress", label: "In progress", hint: "Active" },
  { value: "in-review", label: "In review", hint: "Needs review" },
  { value: "done", label: "Done", hint: "Completed" },
];
const priorityOptions = [
  { value: "low", label: "Low priority" },
  { value: "medium", label: "Medium priority" },
  { value: "high", label: "High priority" },
];
const clarification = ref<{ reset: () => void }>();
const clarificationSubmitted = ref(false);
function retryClarification() {
  clarification.value?.reset();
  clarificationSubmitted.value = false;
}
watch(() => props.entry.slug, () => { clarificationSubmitted.value = false; });
</script>

<template>
  <div v-if="entry.slug === 'status-badge'" class="status-examples" aria-label="Run status examples">
    <component v-for="status in statuses" :key="status" :is="entry.component" :status="status" />
  </div>
  <ChatConversationDemo v-else-if="entry.slug === 'chat-conversation'" />
  <div v-else-if="entry.slug === 'clarification-card'" class="clarification-preview">
    <component :is="entry.component" ref="clarification" :initially-submitted="false" :read-only="false" @submit="clarificationSubmitted = true" @reset="clarificationSubmitted = false" />
    <button v-if="clarificationSubmitted" type="button" class="clarification-retry" @click="retryClarification">Try again</button>
  </div>
  <div v-else-if="entry.slug === 'selector'" class="selector-preview">
    <div class="selector-example-field">
      <span class="selector-example-label">Status</span>
      <component :is="entry.component" v-model="selectorStatus" :options="statusOptions" searchable aria-label="Task status" search-placeholder="Search statuses…" />
    </div>
    <div class="selector-example-field">
      <span class="selector-example-label">Priority</span>
      <component :is="entry.component" v-model="selectorPriority" :options="priorityOptions" variant="ghost" size="sm" aria-label="Task priority" />
    </div>
  </div>
  <component v-else :is="entry.component" @create="$emit('action')" />
</template>

<style scoped>
.selector-preview { display: grid; gap: 22px; width: 280px; max-width: 100%; min-width: 0; }
.selector-example-field { display: grid; gap: 8px; min-width: 0; }
.selector-example-label { color: var(--demo-muted, #6b6b76); font-size: 12px; line-height: 18px; text-align: left; }
.status-examples { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 14px 12px; width: 300px; max-width: 100%; }
.clarification-preview { width: 360px; max-width: 100%; min-width: 0; }
.clarification-retry { display: block; min-height: 32px; margin: 14px 0 0 auto; padding: 4px 8px; border: 0; border-radius: 6px; background: transparent; color: var(--text-secondary, #52525b); font: inherit; font-size: 12px; cursor: pointer; transition: color 160ms, background-color 160ms; }
.clarification-retry:hover { background: color-mix(in srgb, var(--text, #18181b) 4%, transparent); color: var(--text, #18181b); }
.clarification-retry:focus-visible { outline: 2px solid color-mix(in srgb, var(--accent, #7b61ff) 55%, transparent); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { .clarification-retry { transition: none; } }
</style>
