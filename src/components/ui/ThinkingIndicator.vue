<script setup lang="ts">
withDefaults(defineProps<{ label?: string; busy?: boolean }>(), {
  label: "Thinking",
  busy: true,
});
</script>

<template>
  <span class="thinking-indicator" :class="{ 'is-busy': busy }" role="status">
    <span class="thinking-lamp" aria-hidden="true"><i class="lamp-halo" /><i class="lamp-core" /></span>
    <span class="thinking-label">{{ label }}</span>
  </span>
</template>

<style scoped>
.thinking-indicator { display: inline-flex; align-items: center; gap: 9px; min-width: 0; color: var(--demo-muted, #6b6b76); font: 14px/1.65 Inter, ui-sans-serif, system-ui, sans-serif; }
.thinking-lamp { position: relative; width: 12px; height: 12px; flex: none; color: var(--accent, #7b61ff); }
.thinking-lamp i { position: absolute; left: 4px; top: 4px; width: 4px; height: 4px; border-radius: 50%; box-sizing: border-box; }
.lamp-core { background: currentColor; }
.lamp-halo { border: 1px solid currentColor; opacity: 0; }
.is-busy .lamp-core { animation: thinking-core .8s ease-in-out infinite; }
.is-busy .lamp-halo { animation: thinking-halo .8s ease-out infinite; }
.thinking-label { min-width: 0; overflow-wrap: anywhere; }
@supports ((-webkit-background-clip: text) or (background-clip: text)) {
  .is-busy .thinking-label { background: linear-gradient(100deg, currentColor 0%, currentColor 42%, color-mix(in srgb, var(--demo-text, #252529) 70%, var(--demo-surface, #fff)) 50%, currentColor 58%, currentColor 100%) 120% 50% / 220% 100%; background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: thinking-sheen 1s linear infinite; }
}
@keyframes thinking-core { 0%, 100% { opacity: .6; } 45% { opacity: 1; box-shadow: 0 0 2px currentColor; } }
@keyframes thinking-halo { 0% { transform: scale(1); opacity: .55; } 100% { transform: scale(2.2); opacity: 0; } }
@keyframes thinking-sheen { to { background-position: -20% 50%; } }
@media (prefers-reduced-motion: reduce) {
  .is-busy .lamp-core, .is-busy .lamp-halo, .is-busy .thinking-label { animation: none; }
  .is-busy .thinking-label { background: none; -webkit-text-fill-color: currentColor; }
  .lamp-halo { opacity: 0; }
}
</style>
