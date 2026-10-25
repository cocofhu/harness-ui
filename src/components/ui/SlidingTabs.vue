<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, onUpdated, ref, watch } from 'vue'

interface TabItem { value: string; label: string; disabled?: boolean; count?: number }
const props = withDefaults(defineProps<{
  modelValue?: string
  items?: TabItem[]
  label?: string
}>(), {
  items: () => [
    { value: 'all', label: 'All' },
    { value: 'running', label: 'Running' },
    { value: 'waiting', label: 'Needs input' },
    { value: 'completed', label: 'Completed' },
  ],
  label: 'Task status',
})
const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
}>()
const enabled = computed(() => props.items.filter(item => !item.disabled))
const localValue = ref(props.modelValue ?? enabled.value[0]?.value ?? '')
const current = computed(() => props.modelValue ?? localValue.value)
const focusValue = computed(() => enabled.value.find(item => item.value === current.value)?.value ?? enabled.value[0]?.value ?? '')
const track = ref<HTMLElement>()
const indicator = ref<Record<string, string>>({ opacity: '0' })
const ready = ref(false)
const observed = new Set<Element>()
let observer: ResizeObserver | undefined
let readyFrame = 0
let disposed = false

function buttonFor(value: string) {
  return [...(track.value?.querySelectorAll<HTMLButtonElement>('button') ?? [])].find(button => button.dataset.tabValue === value)
}
function measure() {
  const root = track.value
  if (!root || disposed) return
  const targets = new Set<Element>([root, ...root.querySelectorAll('button')])
  observed.forEach(element => {
    if (!targets.has(element)) { observer?.unobserve(element); observed.delete(element) }
  })
  targets.forEach(element => {
    if (observer && !observed.has(element)) { observer.observe(element); observed.add(element) }
  })
  const active = root.querySelector<HTMLElement>('[aria-selected="true"]')
  if (!active) {
    if (indicator.value.opacity !== '0') indicator.value = { opacity: '0' }
    return
  }
  const bounds = root.getBoundingClientRect()
  const button = active.getBoundingClientRect()
  const scaleX = root.offsetWidth ? bounds.width / root.offsetWidth : 1
  const scaleY = root.offsetHeight ? bounds.height / root.offsetHeight : 1
  if (!button.width || !button.height || !scaleX || !scaleY) return
  const next = {
    opacity: '1',
    transform: `translate3d(${(button.left - bounds.left) / scaleX - root.clientLeft + root.scrollLeft}px, ${(button.top - bounds.top) / scaleY - root.clientTop + root.scrollTop}px, 0)`,
    width: `${button.width / scaleX}px`,
    height: `${button.height / scaleY}px`,
  }
  if (Object.keys(next).some(key => indicator.value[key] !== next[key as keyof typeof next])) indicator.value = next
}
async function select(item: TabItem, moveFocus = false) {
  if (item.disabled) return
  if (current.value !== item.value) {
    if (props.modelValue === undefined) localValue.value = item.value
    emit('update:modelValue', item.value)
    emit('change', item.value)
  }
  await nextTick()
  if (disposed) return
  measure()
  if (moveFocus) buttonFor(item.value)?.focus({ preventScroll: true })
}
function onKeydown(event: KeyboardEvent) {
  if (event.altKey || event.ctrlKey || event.metaKey || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
  if (!enabled.value.length) return
  event.preventDefault()
  const focused = (event.target as HTMLElement).closest<HTMLButtonElement>('[role="tab"]')?.dataset.tabValue
  const index = enabled.value.findIndex(item => item.value === (focused ?? current.value))
  const rtl = track.value && getComputedStyle(track.value).direction === 'rtl'
  const forward = event.key === (rtl ? 'ArrowLeft' : 'ArrowRight')
  const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.value.length - 1
    : index < 0 ? (forward ? 0 : enabled.value.length - 1)
      : (index + (forward ? 1 : -1) + enabled.value.length) % enabled.value.length
  const item = enabled.value[nextIndex]
  if (item) void select(item, true)
}
watch(() => props.items, () => {
  if (props.modelValue === undefined && !enabled.value.some(item => item.value === localValue.value)) localValue.value = enabled.value[0]?.value ?? ''
}, { deep: true })
watch(() => props.modelValue, value => {
  if (value !== undefined) localValue.value = value
  else if (!enabled.value.some(item => item.value === localValue.value)) localValue.value = enabled.value[0]?.value ?? ''
})
watch(() => [props.modelValue, props.items], () => nextTick(measure), { deep: true })
onMounted(() => {
  if (typeof ResizeObserver !== 'undefined') observer = new ResizeObserver(measure)
  measure()
  window.addEventListener('resize', measure)
  void document.fonts?.ready.then(() => { if (!disposed) measure() })
  readyFrame = requestAnimationFrame(() => { if (!disposed) ready.value = true })
})
onUpdated(measure)
onBeforeUnmount(() => {
  disposed = true
  observer?.disconnect()
  observed.clear()
  window.removeEventListener('resize', measure)
  cancelAnimationFrame(readyFrame)
})
</script>


<template>
  <div ref="track" class="sliding-tabs-demo" :class="{ 'is-ready': ready }" role="tablist" aria-orientation="horizontal" :aria-label="label" @keydown="onKeydown">
    <span class="sliding-tabs-indicator" :style="indicator" aria-hidden="true" />
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      role="tab"
      :data-tab-value="item.value"
      :aria-selected="current === item.value && !item.disabled"
      :tabindex="!item.disabled && focusValue === item.value ? 0 : -1"
      :disabled="item.disabled"
      @click="select(item)"
    >
      <span>{{ item.label }}</span><span v-if="item.count !== undefined" class="sliding-tab-count">{{ item.count }}</span>
    </button>
  </div>
</template>

<style scoped>
.sliding-tabs-demo { --tab-spring: cubic-bezier(.22, 1.15, .36, 1); display: flex; align-items: stretch; position: relative; isolation: isolate; width: 100%; max-width: 360px; min-height: 48px; padding: 4px; border-radius: 11px; background: color-mix(in srgb, var(--demo-text, #252529) 5%, var(--demo-surface, #fff)); font-family: Inter, ui-sans-serif, system-ui, sans-serif; box-sizing: border-box; }
.sliding-tabs-demo * { box-sizing: border-box; }
.sliding-tabs-indicator { position: absolute; z-index: 0; top: 0; left: 0; border: 1px solid color-mix(in srgb, var(--demo-text, #252529) 3%, transparent); border-radius: 8px; background: var(--demo-surface, #fff); box-shadow: 0 1px 3px #18181b0a, 0 2px 5px #18181b06; pointer-events: none; }
.is-ready .sliding-tabs-indicator { transition: transform 440ms var(--tab-spring), width 440ms var(--tab-spring), height 440ms var(--tab-spring); }
.sliding-tabs-demo button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; position: relative; z-index: 1; flex: 1 1 auto; min-width: 0; min-height: 40px; padding: 8px 6px; border: 0; border-radius: 7px; background: transparent; color: var(--demo-muted, #85858f); font-family: inherit; font-size: 14px; font-weight: 400; line-height: 22px; white-space: nowrap; cursor: pointer; transition: color 180ms ease; -webkit-tap-highlight-color: transparent; }
.sliding-tabs-demo button[aria-selected="true"] { color: var(--demo-text, #252529); font-weight: 500; }
.sliding-tabs-demo button:not(:disabled):hover { color: var(--demo-text, #252529); }
.sliding-tabs-demo button:disabled { opacity: .38; cursor: not-allowed; }
.sliding-tabs-demo button:focus-visible { outline: 2px solid var(--accent, #7b61ff); outline-offset: -2px; }
.sliding-tab-count { font-size: 12px; opacity: .65; font-variant-numeric: tabular-nums; }
@supports (transition-timing-function: linear(0, 1)) {
  .sliding-tabs-demo { --tab-spring: linear(0, .0669, .213, .3816, .5413, .6774, .7851, .8655, .9224, .9606, .9846, .9987, 1.006, 1.0089, 1.0094, 1.0084, 1.007, 1.0054, 1.0039, 1.0027, 1.0018, 1); }
}
@media (prefers-reduced-motion: reduce) { .sliding-tabs-demo *, .is-ready .sliding-tabs-indicator { transition: none; } }
</style>
