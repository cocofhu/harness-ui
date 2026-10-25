<script setup lang="ts">
import { computed } from "vue";
import { AlertTriangle, Check, Clock, Minus, Pencil, UserRound, X } from "lucide-vue-next";

const props = withDefaults(defineProps<{ status?: string; size?: "sm" | "md" }>(), { status: "pending", size: "md" });
const states = {
  running: { label: "Running", tone: "info", icon: null },
  queued: { label: "Queued", tone: "neutral", icon: Clock },
  pending: { label: "Pending", tone: "neutral", icon: Minus },
  waiting_human: { label: "Needs input", tone: "neutral", icon: UserRound },
  completed: { label: "Completed", tone: "success", icon: Check },
  success: { label: "Success", tone: "success", icon: Check },
  failed: { label: "Failed", tone: "error", icon: AlertTriangle },
  cancelled: { label: "Cancelled", tone: "neutral", icon: X },
  cancelling: { label: "Cancelling", tone: "neutral", icon: X },
  skipped: { label: "Skipped", tone: "neutral", icon: Minus },
  published: { label: "Published", tone: "success", icon: Check },
  draft: { label: "Draft", tone: "neutral", icon: Pencil },
} as const;
const state = computed(() => states[props.status as keyof typeof states] ?? states.pending);
</script>

<template>
  <span class="status-badge" :class="[`tone-${state.tone}`, { 'is-small': size === 'sm' }]">
    <component v-if="state.icon" :is="state.icon" :size="13" :stroke-width="1.6" aria-hidden="true" />
    <span v-else class="status-lamp" aria-hidden="true"><i /></span>
    {{ state.label }}
  </span>
</template>

<style scoped>
.status-badge { --status-ink: var(--demo-muted, #6b6b76); --status-fill: var(--demo-bg, #f8f8fa); display: inline-flex; align-items: center; flex: none; gap: 6px; width: max-content; max-width: 100%; box-sizing: border-box; padding: 5px 10px; border: 1px solid color-mix(in srgb, var(--status-ink) 23%, transparent); border-radius: 99px; color: var(--status-ink); background: var(--status-fill); font: 13px/1.5 Inter, ui-sans-serif, system-ui, sans-serif; white-space: nowrap; }
.is-small { padding: 3px 8px; font-size: 12px; }
.tone-info { --status-ink: #597dcc; --status-fill: color-mix(in srgb, #6589e8 9%, var(--demo-surface, #fff)); }
.tone-success { --status-ink: #338768; --status-fill: color-mix(in srgb, #32a77e 8%, var(--demo-surface, #fff)); }
.tone-error { --status-ink: #c15161; --status-fill: color-mix(in srgb, #de6a76 8%, var(--demo-surface, #fff)); }
.status-lamp { display: grid; place-items: center; position: relative; width: 13px; height: 13px; }
.status-lamp i { width: 5px; height: 5px; background: currentColor; border-radius: 50%; animation: status-breathe 1.6s ease-in-out infinite; }
@keyframes status-breathe { 50% { opacity: .45; box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 12%, transparent); } }
@media (prefers-reduced-motion: reduce) { .status-lamp i { animation: none; } }
</style>
