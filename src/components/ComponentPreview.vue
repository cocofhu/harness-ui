<script setup lang="ts">
import { ref, watch } from "vue";
import type { ComponentEntry } from "../data/catalog";
import ChatConversationDemo from "./ChatConversationDemo.vue";

const props = defineProps<{ entry: ComponentEntry }>();
defineEmits<{ action: [] }>();
const statuses = ["running", "queued", "waiting_human", "completed", "failed", "cancelled"];
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
  <component v-else :is="entry.component" @create="$emit('action')" />
</template>

<style scoped>
.status-examples { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 14px 12px; width: 300px; max-width: 100%; }
.clarification-preview { width: 360px; max-width: 100%; min-width: 0; }
.clarification-retry { display: block; min-height: 32px; margin: 14px 0 0 auto; padding: 4px 8px; border: 0; border-radius: 6px; background: transparent; color: var(--text-secondary, #52525b); font: inherit; font-size: 12px; cursor: pointer; transition: color 160ms, background-color 160ms; }
.clarification-retry:hover { background: color-mix(in srgb, var(--text, #18181b) 4%, transparent); color: var(--text, #18181b); }
.clarification-retry:focus-visible { outline: 2px solid color-mix(in srgb, var(--accent, #7b61ff) 55%, transparent); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { .clarification-retry { transition: none; } }
</style>
