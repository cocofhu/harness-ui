<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { resolveIcon } from '../data/icons'
import type { IconName } from '../data/icons'
import '../styles/icons.css'

const props = withDefaults(defineProps<{
  name: IconName | (string & {})
  size?: number | string
  motionKey?: string | number
  busy?: boolean
  interactive?: boolean
  disabled?: boolean
}>(), {
  size: 20,
  busy: false,
  interactive: true,
  disabled: false,
})

const element = ref<SVGSVGElement | null>(null)
const definition = computed(() => resolveIcon(props.name))
const state = ref<'idle' | 'once' | 'busy'>('idle')
const reducedMotion = ref(false)
let host: Element | null = null
let media: MediaQueryList | undefined
let timer: ReturnType<typeof setTimeout> | undefined
let mounted = false
let generation = 0
let hovered = false

const hostSelector = '[data-icon-motion-host], button, a[href], summary, [role="button"], [role="tab"], [tabindex]:not([tabindex="-1"])'
const isDisabled = () => props.disabled || !!element.value?.closest('[disabled], [aria-disabled="true"], [inert]')

function reset() {
  generation++
  if (timer) clearTimeout(timer)
  timer = undefined
  state.value = props.busy && !reducedMotion.value && !isDisabled() ? 'busy' : 'idle'
}

async function play() {
  if (!mounted || reducedMotion.value || isDisabled() || props.busy) return
  if (timer) clearTimeout(timer)
  const version = ++generation
  state.value = 'idle'
  await nextTick()
  if (!mounted || version !== generation || reducedMotion.value || isDisabled() || props.busy) return
  // Resolve the idle frame so repeated presses restart the actual SVG keyframes.
  element.value?.getBoundingClientRect()
  state.value = 'once'
  timer = setTimeout(() => {
    if (version === generation) reset()
  }, definition.value.duration + 360)
}

function onPointerEnter(event: Event) {
  if ((event as PointerEvent).pointerType === 'touch') return
  hovered = true
  if (props.interactive) void play()
}

function onPointerLeave() {
  hovered = false
}

function onFocus(event: Event) {
  if (!props.interactive || hovered) return
  if (event.target instanceof Element && event.target.matches(':focus-visible')) void play()
}

function onMediaChange() {
  reducedMotion.value = media?.matches ?? false
  reset()
}

onMounted(() => {
  mounted = true
  media = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = media.matches
  media.addEventListener('change', onMediaChange)
  host = element.value?.closest(hostSelector) || element.value
  host?.addEventListener('pointerenter', onPointerEnter)
  host?.addEventListener('pointerleave', onPointerLeave)
  host?.addEventListener('focusin', onFocus)
  reset()
})

watch(() => [props.name, props.busy, props.disabled], reset)
watch(() => props.motionKey, (value, previous) => {
  if (value !== previous && value !== undefined) void play()
})

onBeforeUnmount(() => {
  mounted = false
  reset()
  host?.removeEventListener('pointerenter', onPointerEnter)
  host?.removeEventListener('pointerleave', onPointerLeave)
  host?.removeEventListener('focusin', onFocus)
  media?.removeEventListener('change', onMediaChange)
})

defineExpose({ play, reset, element })
</script>

<template>
  <svg
    ref="element"
    class="agent-icon"
    aria-hidden="true"
    focusable="false"
    :data-icon="name"
    :data-icon-motion="state"
    :width="size"
    :height="size"
    :viewBox="definition.viewBox"
    :fill="definition.filled ? 'currentColor' : 'none'"
    :stroke="definition.strokeWidth ? 'currentColor' : 'none'"
    :stroke-width="definition.strokeWidth || undefined"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-html="definition.body"
  />
</template>
