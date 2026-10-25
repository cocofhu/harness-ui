<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from "vue";
import { ArrowLeft, Check, ChevronRight, MessageSquare } from "lucide-vue-next";

interface ClarificationOption { id: string; label: string; disabled?: boolean; recommended?: boolean }
interface ClarificationQuestion { id: string; prompt: string; options: ClarificationOption[]; allowMultiple?: boolean }
interface ClarificationAnswer { questionId: string; prompt: string; optionId: string; label: string }
type Answers = Record<string, string | string[]>;
const props = withDefaults(defineProps<{
  questions?: ClarificationQuestion[];
  initialAnswers?: Answers;
  initiallyExpanded?: boolean;
  initiallySubmitted?: boolean;
  submitLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
}>(), {
  questions: () => [
    { id: "priority", prompt: "What should we build first?", options: [{ id: "layout", label: "Build the page layout" }, { id: "interaction", label: "Refine the interactions" }] },
    { id: "style", prompt: "Which direction do you prefer?", options: [{ id: "quiet", label: "Quiet and spacious" }, { id: "expressive", label: "Bold and expressive" }] },
  ],
  initialAnswers: () => ({}), initiallyExpanded: true, initiallySubmitted: false,
  submitLabel: "Confirm choices", disabled: false, readOnly: false,
});
const emit = defineEmits<{
  "update:answers": [answers: Answers];
  "update:expanded": [expanded: boolean];
  submit: [answers: ClarificationAnswer[]];
  reset: [];
}>();
const instanceId = `clarification-${useId().replace(/:/g, "")}`;
function idsOf(value: string | string[] | undefined) { return Array.isArray(value) ? value : value ? [value] : []; }
function sanitizeAnswers(value: Answers, historical = false): Answers {
  return Object.fromEntries(props.questions.flatMap(question => {
    const requested = new Set(idsOf(value[question.id]));
    const valid = question.options.filter(option => requested.has(option.id) && (historical || !option.disabled)).map(option => option.id);
    return valid.length ? [[question.id, question.allowMultiple ? valid : valid[0]!]] : [];
  }));
}
function copyAnswers(value = answers.value): Answers { return Object.fromEntries(Object.entries(value).map(([id, answer]) => [id, Array.isArray(answer) ? [...answer] : answer])); }
const answers = ref<Answers>(sanitizeAnswers(props.initialAnswers, props.initiallySubmitted || props.readOnly));
const open = ref(props.initiallyExpanded);
const submitted = ref(props.initiallySubmitted);
const step = ref(0);
const historical = computed(() => props.readOnly || submitted.value);
const currentQuestion = computed(() => props.questions[step.value]);
const content = ref<HTMLDivElement | null>(null);
const receipt = ref<HTMLDivElement | null>(null);
const bodyHeight = ref("auto");
let resizeObserver: ResizeObserver | undefined;
let disposed = false;
const summary = computed<ClarificationAnswer[]>(() => props.questions.flatMap(question => question.options
  .filter(option => idsOf(answers.value[question.id]).includes(option.id))
  .map(option => ({ questionId: question.id, prompt: question.prompt, optionId: option.id, label: option.label }))));
const summaryGroups = computed(() => props.questions.flatMap(question => {
  const selected = summary.value.filter(answer => answer.questionId === question.id);
  return selected.length ? [{ question, selected }] : [];
}));
// The source permits submitting answered questions; skipped questions are omitted.
const canSubmit = computed(() => !props.disabled && !historical.value && props.questions.some(question => question.options.some(option => !option.disabled && selected(question, option.id))));
const hasRecommended = computed(() => props.questions.some(question => question.options.some(option => option.recommended && !option.disabled)));
const questionSchema = computed(() => JSON.stringify(props.questions));
function selected(question: ClarificationQuestion, optionId: string) { return idsOf(answers.value[question.id]).includes(optionId); }
async function measure() {
  await nextTick();
  if (!disposed && content.value) bodyHeight.value = open.value ? `${content.value.getBoundingClientRect().height}px` : "0px";
}
function select(question: ClarificationQuestion, optionId: string, replace = false) {
  if (props.disabled || historical.value || !question.options.some(option => option.id === optionId && !option.disabled)) return;
  const current = idsOf(answers.value[question.id]);
  const chosen = replace ? [optionId] : question.allowMultiple
    ? current.includes(optionId) ? current.filter(id => id !== optionId) : [...current, optionId]
    : current.includes(optionId) ? [] : [optionId];
  const next = copyAnswers();
  if (chosen.length) next[question.id] = question.allowMultiple ? chosen : chosen[0]!;
  else delete next[question.id];
  answers.value = next;
  emit("update:answers", copyAnswers());
}
function optionId(question: ClarificationQuestion, option: ClarificationOption) { return `${instanceId}-${encodeURIComponent(question.id)}-${encodeURIComponent(option.id)}`; }
function optionKey(event: KeyboardEvent, question: ClarificationQuestion, option: ClarificationOption) {
  if (props.disabled || historical.value || event.altKey || event.ctrlKey || event.metaKey) return;
  const enabled = question.options.filter(option => !option.disabled);
  const index = enabled.findIndex(item => item.id === option.id);
  let next: number;
  if (event.key === "Home") next = 0;
  else if (event.key === "End") next = enabled.length - 1;
  else if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % enabled.length;
  else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + enabled.length) % enabled.length;
  else return;
  event.preventDefault();
  const target = enabled[next];
  if (!target) return;
  if (!question.allowMultiple) select(question, target.id, true);
  document.getElementById(optionId(question, target))?.focus({ preventScroll: true });
}
function navigate(delta: number) {
  if (props.disabled || historical.value) return;
  step.value = Math.max(0, Math.min(props.questions.length - 1, step.value + delta));
}
function toggle() { open.value = !open.value; emit("update:expanded", open.value); }
function submit() {
  if (!canSubmit.value) return;
  submitted.value = true;
  open.value = true;
  emit("submit", summary.value.map(answer => ({ ...answer })));
  void nextTick(() => receipt.value?.focus({ preventScroll: true }));
}
function submitRecommended() {
  if (props.disabled || historical.value) return;
  const next: Answers = {};
  for (const question of props.questions) {
    const enabled = question.options.filter(option => !option.disabled);
    const option = enabled.find(option => option.recommended) ?? enabled[0];
    if (option) next[question.id] = question.allowMultiple ? [option.id] : option.id;
  }
  answers.value = next;
  emit("update:answers", copyAnswers());
  submit();
}
function reset() {
  if (props.disabled || props.readOnly) return;
  answers.value = {};
  submitted.value = false;
  step.value = 0;
  open.value = true;
  emit("update:answers", {});
  emit("reset");
  void nextTick(() => content.value?.querySelector<HTMLButtonElement>('[role="radio"]:not(:disabled), [role="checkbox"]:not(:disabled)')?.focus({ preventScroll: true }));
}
watch(() => props.initialAnswers, value => { answers.value = sanitizeAnswers(value, submitted.value || props.readOnly); }, { deep: true });
watch(questionSchema, () => {
  const next = sanitizeAnswers(answers.value, props.initiallySubmitted || props.readOnly);
  const changed = JSON.stringify(next) !== JSON.stringify(answers.value);
  answers.value = next;
  if (!props.initiallySubmitted) submitted.value = false;
  step.value = Math.min(step.value, Math.max(0, props.questions.length - 1));
  if (changed) emit("update:answers", copyAnswers());
});
watch(() => props.initiallyExpanded, value => { open.value = value; });
watch(() => props.initiallySubmitted, value => { submitted.value = value; });
watch([open, submitted, step, () => props.readOnly, () => props.questions], measure, { flush: "post" });
onMounted(() => {
  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(() => { void measure(); });
    if (content.value) resizeObserver.observe(content.value);
  }
  void measure();
});
onBeforeUnmount(() => { disposed = true; resizeObserver?.disconnect(); });
defineExpose({ reset, toggle, submit });
</script>

<template>
  <section class="clarification-card" :class="{ 'is-submitted': submitted }" aria-label="Questions and choices">
    <div :id="`${instanceId}-body`" class="clarification-body" :style="{ height: bodyHeight }" :aria-hidden="!open || undefined" :inert="!open || undefined">
      <div ref="content" class="clarification-content">
        <div v-if="historical" class="clarification-history clarify-request">
          <div class="history-heading"><MessageSquare aria-hidden="true" :size="16" /><span>Questions · {{ questions.length }} questions</span><span class="readonly-label">Read only</span></div>
          <div v-for="(question, index) in questions" :key="question.id" class="history-question">
            <p class="history-prompt"><span>{{ index + 1 }}.</span> {{ question.prompt }}</p>
            <div v-for="option in question.options" :key="option.id" class="history-option" :class="{ selected: selected(question, option.id) }" :data-selected="selected(question, option.id)"><Check v-if="selected(question, option.id)" aria-hidden="true" :size="12" /><span v-else class="history-check-space" aria-hidden="true" /><span>{{ option.label }}</span></div>
          </div>
        </div>
        <form v-else-if="currentQuestion" class="clarification-form clarify-request" @submit.prevent="submit">
          <div v-if="questions.length > 1" class="question-progress"><div class="progress-dots" aria-hidden="true"><span v-for="(question, index) in questions" :key="question.id" :class="{ current: step === index, answered: idsOf(answers[question.id]).length }" /></div><span>{{ step + 1 }} / {{ questions.length }}</span></div>
          <div class="question-heading"><MessageSquare aria-hidden="true" :size="16" /><span :id="`${instanceId}-prompt`" class="question-prompt">{{ currentQuestion.prompt }}</span><span class="question-kind">{{ currentQuestion.allowMultiple ? 'Select multiple' : 'Select one' }}</span></div>
          <div class="clarification-options" :role="currentQuestion.allowMultiple ? 'group' : 'radiogroup'" :aria-labelledby="`${instanceId}-prompt`">
            <button v-for="option in currentQuestion.options" :id="optionId(currentQuestion, option)" :key="option.id" type="button" class="clarification-option" :class="{ selected: selected(currentQuestion, option.id) }" :role="currentQuestion.allowMultiple ? 'checkbox' : 'radio'" :aria-checked="selected(currentQuestion, option.id)" :aria-pressed="selected(currentQuestion, option.id)" :disabled="disabled || option.disabled" @click="select(currentQuestion, option.id)" @keydown="optionKey($event, currentQuestion, option)"><span class="option-indicator" :class="{ multiple: currentQuestion.allowMultiple }"><Check v-if="selected(currentQuestion, option.id)" aria-hidden="true" :size="10" /></span><span class="option-label">{{ option.label }}</span><span v-if="option.recommended" class="recommendation-label">Recommended</span></button>
          </div>
          <footer class="clarification-footer"><button v-if="step > 0" type="button" class="previous-button" :disabled="disabled" @click="navigate(-1)"><ArrowLeft aria-hidden="true" :size="13" />Previous</button><span v-else /><button v-if="step < questions.length - 1" type="button" class="secondary-button" :disabled="disabled" @click="navigate(1)">Next<ChevronRight aria-hidden="true" :size="13" /></button><div v-else class="submit-actions"><button v-if="hasRecommended" type="button" class="secondary-button" :disabled="disabled" @click="submitRecommended"><Check aria-hidden="true" :size="14" />Use recommended</button><button type="submit" class="confirm-button" :disabled="!canSubmit"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 18V6m-6 6 6-6 6 6" /></svg>{{ submitLabel }}</button></div></footer>
        </form>
        <div v-if="submitted" ref="receipt" class="clarification-summary" tabindex="-1" aria-label="Your choices" aria-live="polite"><div class="summary-heading"><Check aria-hidden="true" :size="16" />Your choices</div><div v-for="group in summaryGroups" :key="group.question.id" class="summary-answer"><p class="summary-prompt">{{ group.question.prompt }}</p><div class="summary-labels"><span v-for="answer in group.selected" :key="answer.optionId">{{ answer.label }}</span></div></div></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ClarifyChat's live question deck and ClarifyMessageThread's history/choice echo. */
.clarification-card { --clarify-fg: #18181b; --clarify-muted: #52525b; --clarify-tertiary: #a1a1aa; --clarify-surface: #fff; --clarify-elevated: #f4f4f5; --clarify-line: #e5e5e8; --clarify-strong: #d4d4d8; --clarify-accent: #7b61ff; box-sizing: border-box; width: 360px; max-width: 100%; min-width: 0; color: var(--clarify-fg); background: transparent; font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 12px; text-align: left; }
:global(html.dark .clarification-card) { --clarify-fg: #ededf0; --clarify-muted: #a1a1aa; --clarify-tertiary: #6e6e78; --clarify-surface: #141417; --clarify-elevated: #1c1c21; --clarify-line: #26262b; --clarify-strong: #36363e; }
.clarification-card *, .clarification-card *::before, .clarification-card *::after { box-sizing: border-box; }.clarification-card button { font: inherit; cursor: pointer; }.clarification-card button:disabled { cursor: not-allowed; }.clarification-card button:focus-visible { outline: 2px solid color-mix(in srgb, var(--clarify-accent) 65%, transparent); outline-offset: -2px; }.clarification-card svg { flex: 0 0 auto; }
.clarification-body { overflow: hidden; transition: height .28s cubic-bezier(.22,1,.36,1); }.clarification-content { display: flow-root; min-width: 0; }
.clarify-request { max-width: 100%; border-left: 1px solid color-mix(in srgb, var(--clarify-strong) 80%, transparent); padding: 2px 0 2px 14px; }.clarification-history { border-color: var(--clarify-line); }
.history-heading { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: var(--clarify-muted); font-size: 12px; font-weight: 500; }.readonly-label { margin-left: auto; font-size: 11px; font-weight: 400; }.history-question { margin-bottom: 12px; }.history-question:last-child { margin-bottom: 0; }.history-prompt { margin: 0 0 6px; color: var(--clarify-muted); font-size: 12px; line-height: 1.375; overflow-wrap: anywhere; }.history-prompt > span { color: var(--clarify-tertiary); }
.history-option { display: flex; align-items: flex-start; gap: 6px; padding-block: 2px; color: var(--clarify-muted); font-size: 12px; line-height: 1.65; }.history-option > svg, .history-check-space { flex: 0 0 auto; width: 12px; height: 12px; margin-top: 2px; }.history-option > span:last-child { min-width: 0; overflow-wrap: anywhere; }.history-option.selected { color: var(--clarify-accent); }
.clarification-form { margin: 0; }.question-progress { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; color: var(--clarify-muted); font-size: 11px; }.progress-dots { display: flex; align-items: center; gap: 4px; }.progress-dots > span { width: 6px; height: 6px; border-radius: 999px; background: var(--clarify-strong); transition: width 160ms, background 160ms; }.progress-dots > span.answered { background: color-mix(in srgb, var(--clarify-accent) 40%, transparent); }.progress-dots > span.current { width: 16px; background: var(--clarify-accent); }
.question-heading { display: grid; grid-template-columns: 16px minmax(0,1fr); align-items: start; column-gap: 8px; row-gap: 6px; margin-bottom: 12px; color: var(--clarify-fg); font-size: 13px; font-weight: 500; }.question-heading > svg { margin-top: 3px; color: var(--clarify-muted); }.question-prompt { min-width: 0; line-height: 1.625; overflow-wrap: anywhere; }.question-kind { grid-column: 2; color: var(--clarify-muted); font-size: 11px; font-weight: 400; line-height: 20px; }
.clarification-options { display: grid; gap: 6px; }.clarification-option { display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0; min-height: 40px; padding: 8px 10px; border: 1px solid var(--clarify-line); border-radius: 8px; color: var(--clarify-muted); background: var(--clarify-surface); font-size: 12px; line-height: 1.5; text-align: left; transition: border-color 160ms, background 160ms, color 160ms; }.clarification-option:hover:not(:disabled) { border-color: var(--clarify-strong); background: color-mix(in srgb, var(--clarify-elevated) 55%, var(--clarify-surface)); color: var(--clarify-fg); }.clarification-option.selected { border-color: color-mix(in srgb, var(--clarify-accent) 45%, transparent); background: color-mix(in srgb, var(--clarify-accent) 4.5%, transparent); color: var(--clarify-fg); }.clarification-option.selected:hover:not(:disabled) { border-color: color-mix(in srgb, var(--clarify-accent) 65%, transparent); background: color-mix(in srgb, var(--clarify-accent) 7%, transparent); }.clarification-option:disabled { opacity: .4; }.option-indicator { display: flex; align-items: center; justify-content: center; flex: 0 0 16px; width: 16px; height: 16px; border: 1px solid var(--clarify-strong); border-radius: 50%; }.option-indicator.multiple { border-radius: 4px; }.selected .option-indicator { border-color: var(--clarify-accent); color: #fff; background: var(--clarify-accent); }.option-label { min-width: 0; flex: 1; overflow-wrap: anywhere; }.recommendation-label { flex: 0 0 auto; margin-left: auto; padding: 2px 6px; border-radius: 999px; background: color-mix(in srgb, var(--clarify-elevated) 80%, transparent); color: var(--clarify-muted); font-size: 10px; font-weight: 500; }
.clarification-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; }.submit-actions { display: flex; flex-wrap: wrap; gap: 8px; }.previous-button { display: inline-flex; align-items: center; gap: 2px; min-height: 36px; padding: 4px 8px; border: 0; border-radius: 6px; background: transparent; color: var(--clarify-muted); font-size: 12px; }.previous-button:hover { color: var(--clarify-fg); }.secondary-button, .confirm-button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 36px; max-width: 100%; padding: 0 10px; border: 1px solid transparent; border-radius: 10px; font-size: 12px; font-weight: 600; line-height: 1; white-space: nowrap; transition: color 160ms, background 160ms, border-color 160ms; }.secondary-button { border-color: var(--clarify-line); background: var(--clarify-surface); color: var(--clarify-muted); }.secondary-button:hover:not(:disabled) { border-color: var(--clarify-strong); background: var(--clarify-elevated); color: var(--clarify-fg); }.confirm-button { background: var(--clarify-fg); color: var(--clarify-surface); }.confirm-button:hover:not(:disabled) { background: color-mix(in srgb, var(--clarify-fg) 85%, var(--clarify-surface)); }.secondary-button:disabled, .confirm-button:disabled { border-color: color-mix(in srgb, var(--clarify-line) 65%, transparent); background: color-mix(in srgb, var(--clarify-elevated) 80%, transparent); color: color-mix(in srgb, var(--clarify-muted) 65%, transparent); }.previous-button:disabled { opacity: .4; }
.clarification-summary { width: fit-content; max-width: 88%; min-width: 0; margin: 28px 0 0 auto; padding: 11px 16px; border: 1px solid transparent; border-radius: 18px 18px 7px 18px; background: color-mix(in srgb, var(--clarify-elevated) 80%, transparent); color: var(--clarify-fg); overflow-wrap: anywhere; }.summary-heading { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: var(--clarify-muted); font-size: 12px; font-weight: 500; }.summary-answer + .summary-answer { margin-top: 10px; border-top: 1px solid color-mix(in srgb, var(--clarify-line) 70%, transparent); padding-top: 10px; }.summary-prompt { margin: 0 0 4px; color: var(--clarify-muted); font-size: 12px; line-height: 1.65; }.summary-labels { display: flex; flex-wrap: wrap; gap: 4px 8px; color: var(--clarify-fg); font-size: 14px; line-height: 1.75; }.summary-labels > span + span::before { content: '·'; margin-right: 8px; color: var(--clarify-muted); }
@media (max-width: 767px), (pointer: coarse) { .clarify-request { padding-left: 12px; }.clarification-option, .previous-button, .secondary-button, .confirm-button { min-height: 44px; } }
@media (prefers-reduced-motion: reduce) { .clarification-body, .progress-dots > span, .clarification-option, .secondary-button, .confirm-button { transition: none; } }
</style>
