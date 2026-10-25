<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from "vue";
import AnimatedIcon from "./AnimatedIcon.vue";
import CodeViewer from "./CodeViewer.vue";
import { iconEntries, iconLabel, resolveIcon } from "../data/icons";
import { iconSvgSource, iconVueSource } from "../lib/icon-source";
import type { IconName } from "../data/icons";
import { copyText } from "../lib/storage";

const emit = defineEmits<{ notify: [message: string] }>();
const query = ref("");
const category = ref<"all" | "interface" | "status">("all");
const individualEpochs = ref<Partial<Record<IconName, number>>>({});
const selected = ref<IconName | null>(null);
const sourceTab = ref<"vue" | "svg">("vue");
const previewEpoch = ref(0);
const inspector = ref<HTMLElement>();
let returnFocus: HTMLElement | null = null;
let previousOverflow = "";

const filters = [
  { id: "all", label: "All" },
  { id: "interface", label: "Interface" },
  { id: "status", label: "Status" },
] as const;
const visibleIcons = computed(() => {
  const term = query.value.trim().toLowerCase();
  return iconEntries.filter(
    (icon) =>
      (category.value === "all" || icon.category === category.value) &&
      (!term ||
        `${icon.name} ${icon.label} ${resolveIcon(icon.name).note}`
          .toLowerCase()
          .includes(term)),
  );
});
const selectedEntry = computed(() =>
  iconEntries.find((icon) => icon.name === selected.value),
);
const code = computed(() =>
  selected.value
    ? sourceTab.value === "vue"
      ? iconVueSource(selected.value)
      : iconSvgSource(selected.value)
    : "",
);

function playOne(name: IconName) {
  individualEpochs.value[name] = (individualEpochs.value[name] || 0) + 1;
}

async function copyIcon(name: IconName, format: "svg" | "vue" = "svg") {
  try {
    await copyText(
      format === "vue" ? iconVueSource(name) : iconSvgSource(name),
    );
    emit("notify", `Copied ${iconLabel(name)} ${format === "vue" ? "Vue component" : "SVG"}`);
  } catch {
    emit("notify", "Select the code in the source panel and copy it manually");
  }
}

function closeInspector() {
  selected.value = null;
}

function onDialogKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") closeInspector();
  if (event.key !== "Tab") return;
  const focusable = inspector.value?.querySelectorAll<HTMLElement>(
    'button:not([disabled]), a[href], [tabindex="0"]',
  );
  if (!focusable?.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
}

watch(selected, async (value, previous) => {
  if (value && !previous) {
    returnFocus = document.activeElement as HTMLElement | null;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    await nextTick();
    inspector.value?.querySelector<HTMLButtonElement>("button")?.focus();
  } else if (!value && previous) {
    document.body.style.overflow = previousOverflow;
    returnFocus?.focus();
  }
});

onBeforeUnmount(() => {
  if (selected.value) document.body.style.overflow = previousOverflow;
});
</script>

<template>
  <div class="icon-gallery-page">
    <header class="icon-gallery-heading">
      <h1>Animated icons</h1>
      <div class="icon-gallery-meta">{{ iconEntries.length }} icons</div>
    </header>

    <div class="icon-gallery-toolbar">
      <div class="icon-gallery-filters" aria-label="Icon categories">
        <button
          v-for="filter in filters"
          :key="filter.id"
          type="button"
          :class="{ active: category === filter.id }"
          :aria-pressed="category === filter.id"
          @click="category = filter.id"
        >
          {{ filter.label }}
        </button>
      </div>
      <div class="icon-gallery-tools">
        <label class="icon-gallery-search">
          <AnimatedIcon name="search" :size="16" :interactive="false" />
          <input
            v-model="query"
            type="search"
            placeholder="Search icons…"
            aria-label="Search icons"
          />
        </label>
      </div>
    </div>

    <div
      v-if="visibleIcons.length"
      class="icon-gallery-grid"
      aria-label="Icon collection"
    >
      <article
        v-for="icon in visibleIcons"
        :key="icon.name"
        class="icon-gallery-tile"
      >
        <button
          class="icon-gallery-tile-main"
          type="button"
          :aria-label="`View ${iconLabel(icon.name)} source`"
          @click="selected = icon.name"
        >
          <span class="icon-gallery-glyph"
            ><AnimatedIcon
              :name="icon.name"
              :size="46"
              :motion-key="individualEpochs[icon.name] || 0"
          /></span>
          <span class="icon-gallery-tile-name" :title="`${iconLabel(icon.name)}(${icon.name})`">{{ iconLabel(icon.name) }}</span>
        </button>
        <div class="icon-gallery-tile-actions">
          <button
            v-if="icon.animated"
            type="button"
            :aria-label="`Play ${iconLabel(icon.name)} animation`"
            :title="`Play ${iconLabel(icon.name)}`"
            @click="playOne(icon.name)"
          >
            <AnimatedIcon name="play" :size="13" />
          </button>
          <button
            type="button"
            :aria-label="`Copy ${iconLabel(icon.name)} SVG`"
            :title="`Copy ${iconLabel(icon.name)} SVG`"
            @click="copyIcon(icon.name)"
          >
            <AnimatedIcon name="copy" :size="13" />
          </button>
        </div>
      </article>
    </div>
    <div v-else class="icon-gallery-empty">
      <AnimatedIcon name="search" :size="32" />
      <p>No icons match “{{ query }}”.</p>
      <button
        type="button"
        @click="
          query = '';
          category = 'all';
        "
      >
        View all icons <span>↗</span>
      </button>
    </div>


    <Teleport to="body">
      <Transition name="icon-inspector">
        <div
          v-if="selected"
          class="icon-inspector-backdrop"
          @click.self="closeInspector"
        >
          <aside
            ref="inspector"
            class="icon-inspector-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="icon-inspector-title"
            @keydown="onDialogKeydown"
          >
            <div class="icon-inspector-header">
              <div>
                <h2 id="icon-inspector-title">{{ iconLabel(selected) }}</h2>
              </div>
              <button
                type="button"
                aria-label="Close icon details"
                @click="closeInspector"
              >
                <AnimatedIcon name="close" :size="19" />
              </button>
            </div>
            <div class="icon-inspector-preview">
              <button
                class="icon-inspector-large-glyph"
                type="button"
                :aria-label="`Play ${iconLabel(selected)} animation`"
                @click="previewEpoch++"
              >
                <AnimatedIcon
                  :name="selected"
                  :size="72"
                  :motion-key="previewEpoch"
                />
              </button>
              <button
                v-if="selectedEntry?.animated"
                class="icon-inspector-replay"
                type="button"
                @click="previewEpoch++"
              >
                <AnimatedIcon name="refresh" :size="13" /> Replay
              </button>
            </div>
            <div class="icon-inspector-code-heading">
              <div class="icon-inspector-code-tabs" aria-label="Source format">
                <button
                  type="button"
                  :class="{ active: sourceTab === 'vue' }"
                  :aria-pressed="sourceTab === 'vue'"
                  @click="sourceTab = 'vue'"
                >
                  Vue
                </button>
                <button
                  type="button"
                  :class="{ active: sourceTab === 'svg' }"
                  :aria-pressed="sourceTab === 'svg'"
                  @click="sourceTab = 'svg'"
                >
                  SVG
                </button>
              </div>
              <button
                class="icon-inspector-copy"
                type="button"
                @click="copyIcon(selected, sourceTab)"
              >
                <AnimatedIcon name="copy" :size="14" /> Copy code
              </button>
            </div>
            <div class="icon-inspector-code">
              <CodeViewer :code="code" compact />
            </div>
          </aside>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style>
.icon-gallery-page {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 72px 44px 32px;
  color: var(--text);
}
.icon-gallery-heading {
  margin-bottom: 32px;
}
.icon-gallery-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font:
    12px/1.5 ui-monospace,
    monospace;
  letter-spacing: 0.04em;
}
.icon-gallery-eyebrow > span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}
.icon-gallery-heading h1 {
  margin: 0 0 14px;
  font-size: clamp(32px, 4.2vw, 46px);
  font-weight: 550;
  letter-spacing: -1.8px;
  line-height: 1.3;
}
.icon-gallery-heading h1 > span {
  color: var(--accent);
}
.icon-gallery-heading p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.8;
}
.icon-gallery-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  color: var(--muted);
  font-size: 12px;
}
.icon-gallery-meta i {
  width: 2px;
  height: 2px;
  background: var(--border-strong);
  border-radius: 50%;
}
.icon-gallery-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 0 19px;
}
.icon-gallery-filters {
  display: flex;
  gap: 4px;
}
.icon-gallery-filters button {
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  padding: 7px 13px;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s;
}
.icon-gallery-filters button.active {
  color: var(--text);
  background: var(--canvas);
}
.icon-gallery-filters button:hover {
  color: var(--text);
}
.icon-gallery-tools {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon-gallery-search {
  display: flex;
  align-items: center;
  gap: 9px;
  height: 40px;
  width: 208px;
  padding: 0 10px;
  border: 1px solid var(--border);
  border-radius: 7px;
  color: var(--muted);
  transition: border-color 0.2s;
}
.icon-gallery-search:focus-within {
  border-color: var(--accent);
}
.icon-gallery-search input {
  border: 0;
  padding: 0;
  outline: none;
  background: transparent;
  width: 100%;
  min-width: 0;
  color: var(--text);
  font: inherit;
  font-size: 12px;
}
.icon-gallery-search input::placeholder {
  color: var(--muted);
}
.icon-search-hint {
  font:
    12px ui-monospace,
    monospace;
  border: 1px solid var(--border);
  padding: 2px 4px;
  border-radius: 3px;
}
.icon-gallery-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 11px;
  background: var(--border);
  overflow: hidden;
}
.icon-gallery-tile {
  position: relative;
  min-width: 0;
  background: var(--bg);
}
.icon-gallery-tile-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 166px;
  width: 100%;
  border: 0;
  padding: 23px 6px 16px;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition:
    background 0.25s,
    color 0.25s;
}
.icon-gallery-tile-main:hover,
.icon-gallery-tile:focus-within .icon-gallery-tile-main {
  background: var(--canvas);
  color: var(--accent);
}
.icon-gallery-glyph {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
}
.icon-gallery-tile-name {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--muted);
  font-family: inherit;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0;
  transition: color 0.2s;
}
.icon-gallery-tile-main:hover .icon-gallery-tile-name {
  color: var(--text-secondary);
}
.icon-gallery-tile-actions {
  position: absolute;
  top: 7px;
  right: 7px;
  display: flex;
  gap: 1px;
  opacity: 0;
  transition: opacity 0.18s;
}
.icon-gallery-tile:hover .icon-gallery-tile-actions,
.icon-gallery-tile:focus-within .icon-gallery-tile-actions {
  opacity: 1;
}
.icon-gallery-tile-actions button {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition:
    color 0.2s,
    background 0.2s;
}
.icon-gallery-tile-actions button:hover {
  color: var(--accent);
  background: var(--accent-soft);
}
.icon-gallery-page button:active,
.icon-inspector-panel button:active {
  transform: none;
}
.icon-gallery-footnote {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 21px;
  color: var(--muted);
  font-size: 12px;
}
.icon-gallery-footnote > span:last-child {
  font-family: ui-monospace, monospace;
}
.icon-gallery-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 350px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
}
.icon-gallery-empty p {
  font-size: 13px;
  margin: 20px 0 10px;
}
.icon-gallery-empty button {
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
}
.icon-gallery-empty button span {
  padding-left: 4px;
}
.icon-gallery-page button:focus-visible,
.icon-inspector-panel button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -3px;
}
.icon-inspector-backdrop {
  position: fixed;
  z-index: 110;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  background: #14121e40;
  backdrop-filter: blur(4px);
}
.icon-inspector-panel {
  width: 460px;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 28px;
  background: var(--bg);
  color: var(--text);
  box-shadow: -20px 0 90px #00000012;
}
.icon-inspector-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}
.icon-inspector-header > div > span {
  color: var(--muted);
  font:
    12px ui-monospace,
    monospace;
  letter-spacing: 0.05em;
}
.icon-inspector-header h2 {
  margin: 0;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.02em;
}
.icon-inspector-header > button {
  display: grid;
  place-items: center;
  height: 32px;
  width: 32px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
}
.icon-inspector-header > button:hover {
  background: var(--canvas);
  color: var(--text);
}
.icon-inspector-preview {
  height: 230px;
  display: grid;
  place-items: center;
  position: relative;
  border-radius: 10px;
  border: 1px solid var(--border);
  background-color: var(--canvas);
  background-image: radial-gradient(var(--dot-color) 0.7px, transparent 0.7px);
  background-size: 15px 15px;
}
.icon-inspector-large-glyph {
  display: grid;
  place-items: center;
  width: 150px;
  height: 150px;
  padding: 0;
  border: 0;
  color: var(--text);
  background: transparent;
  cursor: pointer;
}
.icon-inspector-replay {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 0;
  border-radius: 4px;
  background: var(--bg);
  padding: 6px 9px;
  color: var(--muted);
  font-size: 12px;
  cursor: pointer;
}
.icon-inspector-replay:hover,
.icon-inspector-copy:hover,
.icon-inspector-code-tabs button:not(.active):hover {
  color: var(--accent);
  border-color: var(--border-strong);
}
.icon-inspector-note {
  margin: 15px 0 28px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}
.icon-inspector-code-heading {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon-inspector-code-tabs {
  display: flex;
  gap: 3px;
  padding: 3px;
  border-radius: 6px;
  background: var(--canvas);
}
.icon-inspector-code-tabs button {
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--muted);
  padding: 5px 11px;
  font-size: 12px;
  cursor: pointer;
}
.icon-inspector-code-tabs button.active {
  background: var(--bg);
  color: var(--text);
  box-shadow: 0 1px 3px #00000008;
}
.icon-inspector-copy {
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: transparent;
  padding: 7px 9px;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
}
.icon-inspector-code-caption {
  margin: 14px 0 12px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}
.icon-inspector-code {
  margin-top: 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: auto;
  max-height: 460px;
  background: var(--canvas);
}
.icon-inspector-code .source-code {
  width: max-content;
  min-width: 100%;
  padding: 17px;
  font-size: 12px;
  line-height: 1.9;
}
.icon-inspector-enter-active,
.icon-inspector-leave-active {
  transition: opacity 0.25s;
}
.icon-inspector-enter-active .icon-inspector-panel,
.icon-inspector-leave-active .icon-inspector-panel {
  transition: transform 0.35s cubic-bezier(0.22, 0.75, 0.2, 1);
}
.icon-inspector-enter-from,
.icon-inspector-leave-to {
  opacity: 0;
}
.icon-inspector-enter-from .icon-inspector-panel,
.icon-inspector-leave-to .icon-inspector-panel {
  transform: translateX(100%);
}
@media (min-width: 1450px) {
  .icon-gallery-grid {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
}
@media (max-width: 1100px) {
  .icon-gallery-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
@media (max-width: 760px) {
  .icon-gallery-page {
    padding: 45px 22px 30px;
  }
  .icon-gallery-heading {
    margin-bottom: 30px;
  }
  .icon-gallery-heading h1 {
    letter-spacing: -1px;
  }
  .icon-gallery-heading p {
    font-size: 12px;
  }
  .icon-gallery-toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }
  .icon-gallery-tools {
    width: 100%;
  }
  .icon-gallery-search {
    flex: 1;
    width: auto;
  }
  .icon-gallery-filters {
    align-self: flex-start;
  }
  .icon-gallery-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .icon-gallery-tile-main {
    height: 148px;
    gap: 20px;
  }
  .icon-gallery-tile-name {
    font-size: 12px;
  }
  .icon-gallery-meta {
    gap: 8px;
    font-size: 12px;
  }
}
@media (max-width: 430px) {
  .icon-gallery-page {
    padding-right: 18px;
    padding-left: 18px;
  }
  .icon-gallery-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .icon-gallery-tile-main {
    height: 145px;
  }
  .icon-inspector-panel {
    padding: 23px;
  }
}
@media (hover: none) {
  .icon-gallery-tile-actions {
    opacity: 1;
  }
}

.icon-gallery-filters button,
.icon-gallery-search input,
.icon-gallery-empty button { font-size: 14px; }
.icon-gallery-tile-name { font-size: 14px; }
.icon-gallery-glyph { height: 48px; }
.icon-inspector-replay,
.icon-inspector-code-tabs button,
.icon-inspector-copy { font-size: 13px; }
.icon-inspector-code .source-code { font-size: 13px; }
@media (max-width: 760px) {
  .icon-gallery-tile-name { font-size: 13px; }
}

@media (prefers-reduced-motion: reduce) {
  .icon-gallery-page *,
  .icon-inspector-backdrop,
  .icon-inspector-panel {
    animation: none !important;
    transition: none !important;
  }
}
</style>
