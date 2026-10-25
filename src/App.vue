<script setup lang="ts">
import { defineAsyncComponent, computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-vue-next";
import { catalog, categories, componentFilename, matchesComponent } from "./data/catalog";
import { iconCount } from "./data/icons";
import type { Category } from "./data/catalog";
import { copyText, readStored, writeStored } from "./lib/storage";
import {
  vReveal,
  freezeLeavingCard,
  prefersReducedMotion,
} from "./lib/motion";
import HomePage from "./components/HomePage.vue";
const IconGallery = defineAsyncComponent(() => import("./components/IconGallery.vue"));
import AnimatedIcon from "./components/AnimatedIcon.vue";
import CodeViewer from "./components/CodeViewer.vue";
import ComponentPreview from "./components/ComponentPreview.vue";

function readRoute() {
  const path = window.location.hash.replace(/^#\/?/, "") || "";
  if (path.startsWith("components/") && !catalog.some(entry => path === `components/${entry.slug}`)) {
    window.history.replaceState(null, "", "#/components");
    return "components";
  }
  return path;
}
const route = ref(readRoute());
const activeCategory = ref<Category>("all");
const query = ref("");
const dark = ref(readStored<string>("agent-ui-theme", "light") === "dark");
const mobileNav = ref(false);
const compactNav = ref(window.matchMedia("(max-width: 700px)").matches);
const mobileMenu = ref<HTMLButtonElement>();
const copiedValue = ref("");
const showSort = ref(false);
const sortOrder = ref("recommended");
const detailTab = ref("preview");
const detailTabs = ref<HTMLElement>();
const demoKey = ref(0);
const toast = ref("");
const categoryTabList = ref<HTMLElement>();
const sidebarList = ref<HTMLElement>();
const categoryIndicator = ref<Record<string, string>>({ opacity: "0" });
const sidebarIndicator = ref<Record<string, string>>({ opacity: "0" });
let toastTimer: ReturnType<typeof setTimeout> | undefined;
let copyTimer: ReturnType<typeof setTimeout> | undefined;
let committedDark = dark.value;
let themeUpdatePending = false;
let themeTransition: ReturnType<Document["startViewTransition"]> | undefined;
let themeGeneration = 0;
const githubUrl = "https://github.com/cocofhu/harness-ui";
const githubStars = ref<number | null>(null);
const githubStarLabel = computed(() => githubStars.value === null ? "Star" : new Intl.NumberFormat("en", { notation: githubStars.value >= 10000 ? "compact" : "standard", maximumFractionDigits: 1 }).format(githubStars.value));
let githubRequest: AbortController | undefined;
let githubTimeout: ReturnType<typeof setTimeout> | undefined;
let pendingCollectionScroll = false;
const categoryIconNames = {
  all: "dashboard",
  conversation: "chat",
  agent: "robot",
  workflow: "workflow",
  navigation: "board",
};
const selected = computed(() =>
  catalog.find((entry) => route.value === `components/${entry.slug}`),
);
const isGallery = computed(() => route.value === "components");
const isIcons = computed(() => route.value === "icons");
const doc = computed(() => route.value.startsWith("docs/"));
const isHome = computed(
  () => !isGallery.value && !selected.value && !isIcons.value && !doc.value,
);
const hasSidebar = computed(
  () => isGallery.value || !!selected.value || doc.value,
);
const filterName = computed(
  () =>
    categories.find((c) => c.id === activeCategory.value)?.name || "All components",
);
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  let result = catalog.filter(
    (c) =>
      (activeCategory.value === "all" || c.category === activeCategory.value) &&
      matchesComponent(c, q),
  );
  if (sortOrder.value === "name")
    result = [...result].sort((a, b) => a.name.localeCompare(b.name, "en"));
  if (sortOrder.value === "new")
    result = [...result].sort((a, b) => Number(!!b.fresh) - Number(!!a.fresh));
  return result;
});
const currentIndex = computed(() =>
  catalog.findIndex((c) => c.slug === selected.value?.slug),
);
const usage = `<script setup lang="ts">\nimport ChatComposer from './components/ui/ChatComposer.vue'\n<\/script>\n\n<template>\n  <ChatComposer @send="console.log" />\n</template>`;

function notify(message: string) {
  toast.value = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.value = "";
  }, 2600);
}
async function copy(value: string, message = "Copied to clipboard") {
  try {
    await copyText(value);
    copiedValue.value = value;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copiedValue.value = ""; }, 2200);
    notify(message);
  } catch {
    notify("Select the code and copy it manually");
  }
}
function navigate(path = "") {
  window.location.hash = path ? `/${path}` : "/";
  mobileNav.value = false;
}
async function onHashChange() {
  mobileNav.value = false;
  showSort.value = false;
  route.value = readRoute();
  detailTab.value = "preview";
  await nextTick();
  if (!pendingCollectionScroll)
    window.scrollTo({ top: 0, behavior: "instant" });
}
async function detailTabKeydown(event: KeyboardEvent) {
  if (event.isComposing || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  detailTab.value = event.key === "Home" ? "preview" : event.key === "End" ? "source" : detailTab.value === "preview" ? "source" : "preview";
  await nextTick();
  detailTabs.value?.querySelector<HTMLButtonElement>('[aria-selected="true"]')?.focus();
}
async function onPageEntered() {
  await nextTick();
  updateIndicators();
  if (pendingCollectionScroll) {
    pendingCollectionScroll = false;
    document
      .getElementById("components")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
function chooseCategory(id: Category) {
  activeCategory.value = id;
  if (!isGallery.value) {
    pendingCollectionScroll = true;
    navigate("components");
  }
  mobileNav.value = false;
}
function skipToContent() {
  document.getElementById("main-content")?.focus();
  document.getElementById("main-content")?.scrollIntoView();
}
function measureIndicator(
  container: HTMLElement | undefined,
  selector: string,
): Record<string, string> {
  const target = container?.querySelector<HTMLElement>(selector);
  if (!container || !target) return { opacity: "0" };
  const parent = container.getBoundingClientRect(),
    rect = target.getBoundingClientRect();
  return {
    opacity: "1",
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    transform: `translate3d(${rect.left - parent.left + container.scrollLeft}px,${rect.top - parent.top + container.scrollTop}px,0)`,
  };
}
function onResize() {
  compactNav.value = window.matchMedia("(max-width: 700px)").matches;
  if (!compactNav.value) mobileNav.value = false;
  updateIndicators();
}
function closeMobileNav() {
  if (!mobileNav.value) return;
  mobileNav.value = false;
  mobileMenu.value?.focus();
}
function updateIndicators() {
  categoryIndicator.value = measureIndicator(
    categoryTabList.value,
    "button.active",
  );
  sidebarIndicator.value = measureIndicator(
    sidebarList.value,
    ".sidebar-link.selected",
  );
}
function clearThemeMotion() {
  document.documentElement.classList.remove("harness-theme-motion", "harness-theme-capture");
}
function toggleTheme() {
  committedDark = !committedDark;
  if (prefersReducedMotion() || !document.startViewTransition) {
    themeGeneration++;
    themeTransition?.skipTransition();
    themeTransition = undefined;
    themeUpdatePending = false;
    clearThemeMotion();
    dark.value = committedDark;
    return;
  }
  // Repeated clicks before capture commit the latest preference in one update.
  if (themeUpdatePending) return;
  themeTransition?.skipTransition();
  const generation = ++themeGeneration;
  themeUpdatePending = true;
  document.documentElement.classList.add("harness-theme-motion", "harness-theme-capture");
  try {
    const transition = document.startViewTransition(async () => {
      dark.value = committedDark;
      await nextTick();
      if (dark.value !== committedDark) {
        dark.value = committedDark;
        await nextTick();
      }
      themeUpdatePending = false;
    });
    themeTransition = transition;
    void transition.ready.then(() => {
      if (generation === themeGeneration)
        document.documentElement.classList.remove("harness-theme-capture");
    }).catch(() => {});
    void transition.finished.catch(() => {}).finally(() => {
      if (generation !== themeGeneration) return;
      themeTransition = undefined;
      themeUpdatePending = false;
      clearThemeMotion();
    });
  } catch {
    dark.value = committedDark;
    themeUpdatePending = false;
    clearThemeMotion();
  }
}
async function loadGithubStars() {
  const cacheKey = "harness-ui-github-stars";
  try {
    const cached = JSON.parse(sessionStorage.getItem(cacheKey) || "null");
    if (cached && typeof cached.checkedAt === "number" && Date.now() - cached.checkedAt < 3600000 && (cached.count === null || Number.isInteger(cached.count) && cached.count >= 0)) {
      githubStars.value = cached.count;
      return;
    }
  } catch { /* Storage may be unavailable. */ }
  githubRequest = new AbortController();
  githubTimeout = setTimeout(() => githubRequest?.abort(), 6000);
  try {
    const response = await fetch("https://api.github.com/repos/cocofhu/harness-ui", {
      headers: { Accept: "application/vnd.github+json" },
      signal: githubRequest.signal,
    });
    if (!response.ok) throw new Error("Repository unavailable");
    const repository = await response.json();
    if (!Number.isInteger(repository.stargazers_count) || repository.stargazers_count < 0) throw new Error("Invalid count");
    githubStars.value = repository.stargazers_count;
  } catch { githubStars.value = null; }
  finally {
    clearTimeout(githubTimeout);
    try { sessionStorage.setItem(cacheKey, JSON.stringify({ count: githubStars.value, checkedAt: Date.now() })); } catch { /* Storage may be unavailable. */ }
  }
}
function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeMobileNav();
    showSort.value = false;
  }
}
watch([selected, isGallery, isIcons, doc], () => {
  const name = selected.value?.name || (isGallery.value ? "Components" : isIcons.value ? "Animated icons" : doc.value ? "Documentation" : "Vue components and animated icons");
  document.title = `${name} · Harness UI`;
}, { immediate: true });
watch(
  dark,
  (value) => {
    document.documentElement.classList.toggle("dark", value);
    document.documentElement.style.colorScheme = value ? "dark" : "light";
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: value ? "dark" : "light" } }));
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", value ? "#0a0a0b" : "#ffffff");
    writeStored("agent-ui-theme", value ? "dark" : "light");
  },
  { immediate: true },
);
watch([mobileNav, compactNav], ([nav, compact]) => {
  document.body.style.overflow = nav && compact ? "hidden" : "";
});
watch([activeCategory, route, isGallery], async () => {
  await nextTick();
  updateIndicators();
});
onMounted(() => {
  void loadGithubStars();
  window.addEventListener("hashchange", onHashChange);
  window.addEventListener("keydown", onKeydown);
  window.addEventListener("resize", onResize);
  nextTick(updateIndicators);
  document.fonts.ready.then(updateIndicators);
});
onUnmounted(() => {
  window.removeEventListener("hashchange", onHashChange);
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("resize", onResize);
  clearTimeout(toastTimer);
  clearTimeout(copyTimer);
  clearTimeout(githubTimeout);
  githubRequest?.abort();
  themeGeneration++;
  themeTransition?.skipTransition();
  clearThemeMotion();
  document.body.style.overflow = "";
});
</script>

<template>
  <a href="#main-content" class="skip-link" @click.prevent="skipToContent"
    >Skip to main content</a
  >
  <header class="site-header">
    <div class="header-inner">
      <div class="header-brand">
        <button
          type="button"
          ref="mobileMenu"
          class="icon-button mobile-menu"
          :aria-label="mobileNav ? 'Close navigation' : 'Open navigation'"
          :aria-expanded="mobileNav"
          @click="mobileNav = !mobileNav"
        >
          <AnimatedIcon name="menu" :size="20" /></button
        ><a href="#/" class="brand" aria-label="Harness UI home"
          ><span class="brand-mark"
            ><AnimatedIcon name="sparkles" :size="23" :stroke-width="1.7" /></span
          ><span class="brand-name">Harness <span class="brand-ui">UI</span></span></a
        >
      </div>
      <nav class="top-nav" aria-label="Main navigation">
        <a href="#/" :class="{ active: isHome }">Home</a
        ><a href="#/components" :class="{ active: isGallery || selected }" :aria-current="isGallery || selected ? 'page' : undefined"
          >Components</a
        ><a href="#/icons" :class="{ active: isIcons }">Icons</a
        ><a :href="githubUrl" target="_blank" rel="noopener noreferrer">Docs</a>
      </nav>
      <div class="header-actions">
        <a
          class="github-star-pill"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Star Harness UI on GitHub"
        >
          <span class="github-star-icon" aria-hidden="true">
            <svg class="github-mark" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <svg class="github-star-mark" width="23" height="23" viewBox="0 0 24 24" fill="none">
              <path d="m11 4 2.2 4.45 4.91.72-3.55 3.46.84 4.89L11 15.21l-4.4 2.31.84-4.89-3.55-3.46 4.91-.72L11 4Z" fill="currentColor" />
              <path class="github-sparkle" d="m20 2 .7 1.8 1.8.7-1.8.7L20 7l-.7-1.8-1.8-.7 1.8-.7Z" fill="currentColor" />
              <path class="github-sparkle github-sparkle-late" d="m3 16 .6 1.4L5 18l-1.4.6L3 20l-.6-1.4L1 18l1.4-.6Z" fill="currentColor" />
            </svg>
          </span>
          <span class="github-star-label">{{ githubStarLabel }}</span>
        </a><button
          type="button"
          class="icon-button theme-toggle"
          :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <span class="theme-icon-stack" aria-hidden="true">
            <span class="theme-icon theme-icon-moon" :class="{ 'is-active': !dark }">
              <AnimatedIcon name="moon" :size="16" :interactive="!dark" />
            </span>
            <span class="theme-icon theme-icon-sun" :class="{ 'is-active': dark }">
              <AnimatedIcon name="sun" :size="16" :interactive="dark" />
            </span>
          </span>
        </button>
      </div>
    </div>
  </header>

  <button
    v-if="mobileNav"
    type="button"
    class="nav-backdrop"
    aria-label="Close navigation"
    @click="closeMobileNav"
  ></button>
  <nav
    v-if="!hasSidebar"
    class="home-mobile-nav"
    :class="{ 'mobile-open': mobileNav }"
    :inert="!mobileNav"
    aria-label="Mobile navigation"
  >
    <a href="#/" @click="mobileNav = false">Home</a
    ><a href="#/components" @click="mobileNav = false">Components</a
    ><a href="#/icons" @click="mobileNav = false">Icons</a
    ><a :href="githubUrl" target="_blank" rel="noopener noreferrer" @click="mobileNav = false">Documentation</a>
  </nav>
  <div class="app-layout" :class="{ 'landing-layout': !hasSidebar }">
    <aside
      v-if="hasSidebar"
      class="sidebar"
      :class="{ 'mobile-open': mobileNav }"
      :inert="compactNav && !mobileNav"
      aria-label="Component navigation"
    >
      <div ref="sidebarList" class="sidebar-scroll">
        <span
          class="sidebar-highlight"
          :style="sidebarIndicator"
          aria-hidden="true"
        ></span>
        <p class="nav-label">Getting started</p>
        <a
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="sidebar-link"
        >
          <AnimatedIcon name="terminal" :size="17" /><span
            >Quick start</span
          ></a
        ><button type="button" class="sidebar-link" @click="navigate('icons')">
          <AnimatedIcon name="sparkles" :size="17" /><span>Icons</span
          ><span class="nav-count">{{ iconCount }}</span>
        </button>
        <p class="nav-label category-nav-label">Components</p>
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          class="sidebar-link"
          :class="{ selected: isGallery && activeCategory === category.id }"
          :aria-current="isGallery && activeCategory === category.id ? 'page' : undefined"
          @click="chooseCategory(category.id)"
        >
          <AnimatedIcon
            :name="categoryIconNames[category.id]"
            :size="17"
          /><span>{{ category.name }}</span
          ><span class="nav-count">{{
            category.id === "all"
              ? catalog.length
              : catalog.filter((c) => c.category === category.id).length
          }}</span>
        </button>
        <div v-if="selected" class="quick-components">
          <p class="nav-label">In this category</p>
          <a
            v-for="entry in catalog.filter(
              (c) => c.category === selected!.category,
            )"
            :key="entry.slug"
            :href="`#/components/${entry.slug}`"
            class="sidebar-component"
            :class="{ current: entry.slug === selected.slug }"
            >{{ entry.name
            }}</a
          >
        </div>
      </div>
    </aside>

    <main id="main-content" class="main-content" tabindex="-1" :inert="compactNav && mobileNav">
      <Transition name="page" mode="out-in" appear @after-enter="onPageEntered"
        ><div :key="isGallery ? 'gallery' : route" class="page-view">
          <HomePage v-if="isHome" @notify="notify" />
          <IconGallery v-else-if="isIcons" @notify="notify" />
          <section
            v-else-if="isGallery"
            id="components"
            class="components-section"
          >
            <header class="section-heading">
              <h1>Components</h1>
            </header>
            <div class="collection-toolbar">
              <div
                ref="categoryTabList"
                class="category-tabs"
                role="group"
                aria-label="Component categories"
              >
                <span
                  class="tab-highlight"
                  :style="categoryIndicator"
                  aria-hidden="true"
                ></span
                ><button
                  v-for="category in categories"
                  :key="category.id"
                  type="button"
                  :class="{ active: activeCategory === category.id }"
                  :aria-pressed="activeCategory === category.id"
                  @click="chooseCategory(category.id)"
                >
                  {{ category.id === "all" ? "All" : category.name }}
                </button>
              </div>
              <div class="toolbar-actions">
                <label class="collection-search"
                  ><AnimatedIcon name="search" :size="15" :interactive="false" /><input
                    v-model="query"
                    aria-label="Filter components"
                    placeholder="Search components…" /><button
                    v-if="query"
                    type="button"
                    aria-label="Clear search"
                    @click="query = ''"
                  >
                    <AnimatedIcon name="close" :size="13" /></button
                ></label>
                <div class="sort-wrap">
                  <button
                    type="button"
                    class="icon-button sort-button"
                    aria-label="Sort components"
                    :aria-expanded="showSort"
                    @click="showSort = !showSort"
                  >
                    <AnimatedIcon name="filter" :size="17" /></button
                  ><template v-if="showSort"
                    ><button
                      type="button"
                      class="sort-backdrop"
                      tabindex="-1"
                      aria-label="Close sort menu"
                      @click="showSort = false"
                    ></button>
                    <div class="sort-menu">
                      <button
                        v-for="option in [
                          { id: 'recommended', label: 'Featured' },
                          { id: 'new', label: 'Newest first' },
                          { id: 'name', label: 'Name' },
                        ]"
                        :key="option.id"
                        type="button"
                        @click="
                          sortOrder = option.id;
                          showSort = false;
                        "
                      >
                        {{ option.label
                        }}<Check v-if="sortOrder === option.id" :size="14" />
                      </button></div
                  ></template>
                </div>
              </div>
            </div>
            <div class="collection-subheading">
              <span
                >{{ filterName }} <small>{{ filtered.length }}</small></span
              >
            </div>
            <TransitionGroup
              v-if="filtered.length"
              tag="div"
              name="collection"
              class="component-grid"
              @before-leave="freezeLeavingCard"
              ><article
                v-for="(entry, index) in filtered"
                :key="entry.slug"
                :data-component="entry.slug"
                v-reveal
                class="component-card"
                :style="{
                  '--card-index': Math.min(index, 5),
                  '--stage-tone':
                    index % 3 === 0
                      ? 'var(--stage-lilac)'
                      : index % 3 === 1
                        ? 'var(--stage-sand)'
                        : 'var(--stage-gray)',
                }"
              >
                <div class="card-stage">
                  <div class="stage-topline">
                    <button
                      type="button"
                      class="stage-expand icon-button"
                      :aria-label="`View ${entry.name} details`"
                      @click="navigate(`components/${entry.slug}`)"
                    >
                      <ArrowUpRight :size="16" />
                    </button>
                  </div>
                  <div class="demo-holder">
                    <ComponentPreview :entry="entry" @action="notify('New task selected')" />
                  </div>
                </div>
                <div class="card-description">
                  <a :href="`#/components/${entry.slug}`" class="card-title-row"
                    ><h3>{{ entry.name }}</h3><ArrowUpRight :size="15"
                  /></a>
                </div>
              </article></TransitionGroup
            >
            <div v-else class="empty-state">
              <AnimatedIcon name="search" :size="29" />
              <h3>No components found</h3>
              <button
                type="button"
                class="button secondary"
                @click="
                  query = '';
                  chooseCategory('all');
                "
              >
                Browse all components <AnimatedIcon name="arrow-right" :size="15" />
              </button>
            </div>
          </section>

          <div v-else-if="selected" class="detail-page">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="#/components">Components</a><ChevronRight :size="13" /><button
                type="button"
                @click="chooseCategory(selected.category)"
              >
                {{
                  categories.find((c) => c.id === selected!.category)?.name
                }}</button
              ><ChevronRight :size="13" /><span>{{ selected.name }}</span>
            </nav>
            <div class="detail-heading">
              <h1>
                {{ selected.name
                }}
              </h1>
              <p>{{ selected.description }}</p>
            </div>
            <div class="detail-preview">
              <div class="preview-toolbar">
                <div ref="detailTabs" class="preview-tabs" role="tablist" aria-label="Component preview and source" @keydown="detailTabKeydown">
                  <button
                    id="component-preview-tab"
                    type="button"
                    role="tab"
                    :aria-selected="detailTab === 'preview'"
                    :tabindex="detailTab === 'preview' ? 0 : -1"
                    aria-controls="component-preview-panel"
                    :class="{ active: detailTab === 'preview' }"
                    @click="detailTab = 'preview'"
                  >
                    <AnimatedIcon name="eye" :size="15" />Preview</button
                  ><button
                    id="component-source-tab"
                    type="button"
                    role="tab"
                    :aria-selected="detailTab === 'source'"
                    :tabindex="detailTab === 'source' ? 0 : -1"
                    aria-controls="component-source-panel"
                    :class="{ active: detailTab === 'source' }"
                    @click="detailTab = 'source'"
                  >
                    <AnimatedIcon name="stage-ide" :size="15" />Source
                  </button>
                </div>
                <div class="preview-controls">
                  <span v-if="detailTab === 'source'" class="source-filename"
                    >{{ componentFilename(selected) }}.vue</span
                  ><button
                    v-if="detailTab === 'preview'"
                    type="button"
                    class="icon-button"
                    aria-label="Replay demo"
                    @click="demoKey++"
                  >
                    <AnimatedIcon name="refresh" :size="16" :motion-key="demoKey" /></button
                  ><button
                    type="button"
                    class="button small secondary"
                    @click="copy(selected!.source, 'Component source copied')"
                  >
                    <AnimatedIcon :name="copiedValue === selected.source ? 'check' : 'copy'" :motion-key="copiedValue === selected.source ? 1 : undefined" :size="14" />{{ copiedValue === selected.source ? 'Copied' : 'Copy code' }}
                  </button>
                </div>
              </div>
              <div class="detail-preview-panels">
                <div
                  id="component-preview-panel"
                  v-show="detailTab === 'preview'"
                  class="large-demo"
                  :data-component="selected.slug"
                  role="tabpanel"
                  aria-labelledby="component-preview-tab"
                  :inert="detailTab !== 'preview'"
                  :aria-hidden="detailTab !== 'preview'"
                >
                  <ComponentPreview
                    :entry="selected"
                    :key="`${selected.slug}-${demoKey}`"
                    @action="notify('New task selected')"
                  />
                </div>
                <CodeViewer v-if="detailTab === 'source'" id="component-source-panel" :code="selected.source" role="tabpanel" aria-labelledby="component-source-tab" />
              </div>
            </div>
            <div class="detail-footnote">
              <span>Vue 3 <i>·</i> TypeScript <i>·</i> Standalone source</span
              ><a :href="githubUrl" target="_blank" rel="noopener noreferrer"
                >How to use <ArrowUpRight :size="13"
              /></a>
            </div>
            <nav class="component-pagination" aria-label="Component navigation">
              <a
                v-if="catalog[currentIndex - 1]"
                :href="`#/components/${catalog[currentIndex - 1]!.slug}`"
                ><AnimatedIcon name="arrow-left" :size="15" /><span
                  ><small>Previous</small
                  >{{ catalog[currentIndex - 1]!.name }}</span
                ></a
              ><a
                v-if="catalog[currentIndex + 1]"
                :href="`#/components/${catalog[currentIndex + 1]!.slug}`"
                class="next-component"
                ><span
                  ><small>Next</small
                  >{{ catalog[currentIndex + 1]!.name }}</span
                ><AnimatedIcon name="arrow-right" :size="15"
              /></a>
            </nav>
          </div>

          <article v-else class="docs-page">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="#/">Harness UI</a><ChevronRight :size="13" /><span
                >Documentation</span
              >
            </nav>
            <h1>Documentation</h1>
            <p class="docs-lead">For Vue 3 and TypeScript.</p>
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="inline-link">View documentation on GitHub <ArrowUpRight :size="15" /></a>
            <section>
              <span class="doc-number">01</span>
              <div>
                <h2>Copy a component</h2>
                <a :href="`${githubUrl}/tree/main/src/components/ui`" target="_blank" rel="noopener noreferrer" class="inline-link"
                  >Browse source on GitHub <ArrowUpRight :size="15"
                /></a>
              </div>
            </section>
            <section>
              <span class="doc-number">02</span>
              <div>
                <h2>Install dependencies</h2>
                <div class="docs-code docs-command">
                  <AnimatedIcon name="terminal" :size="16" :interactive="false" />
                  <CodeViewer
                    code="npm install lucide-vue-next"
                    compact
                  /><button
                    type="button"
                    class="icon-button"
                    aria-label="Copy install command"
                    @click="copy('npm install lucide-vue-next')"
                  >
                    <AnimatedIcon :name="copiedValue === 'npm install lucide-vue-next' ? 'check' : 'copy'" :motion-key="copiedValue === 'npm install lucide-vue-next' ? 1 : undefined" :size="15" />
                  </button>
                </div>
              </div>
            </section>
            <section>
              <span class="doc-number">03</span>
              <div>
                <h2>Import and use</h2>
                <div class="docs-example">
                  <div class="docs-example-header">
                    <span><AnimatedIcon name="doc" :size="14" :interactive="false" /> App.vue</span>
                    <button type="button" @click="copy(usage, 'Example copied')">
                      <AnimatedIcon :name="copiedValue === usage ? 'check' : 'copy'" :motion-key="copiedValue === usage ? 1 : undefined" :size="14" />
                      {{ copiedValue === usage ? 'Copied' : 'Copy example' }}
                    </button>
                  </div>
                  <CodeViewer :code="usage" compact />
                </div>
              </div>
            </section>
          </article>
        </div></Transition
      >
    </main>
  </div>

  <footer class="site-footer" :inert="compactNav && mobileNav">
    <div class="footer-inner">
      <a href="#/" class="footer-brand"
        ><AnimatedIcon name="sparkles" :size="20" /><strong>Harness UI</strong
        ></a
      >
      <nav aria-label="Footer navigation">
        <a href="#/components">Components</a><a href="#/icons">Icons</a
        ><a :href="githubUrl" target="_blank" rel="noopener noreferrer">Documentation</a>
      </nav>
      <span>© 2026 · MIT License</span>
    </div>
  </footer>
  <Transition name="toast"
    ><div v-if="toast" class="toast-message" role="status">
      <span><Check :size="13" /></span>{{ toast }}
    </div></Transition
  >
</template>

<style>
.site-header .brand-name { white-space: nowrap; }
.site-header .brand { letter-spacing: -1px; }
.site-header .header-actions { min-width: 0; }
.github-star-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 94px;
  height: 36px;
  flex: 0 0 94px;
  padding: 0 12px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition: color 160ms ease;
}
.github-star-pill:hover { color: var(--text); }
.github-star-pill:focus-visible, .site-header .theme-toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}
.github-star-icon { position: relative; display: block; width: 20px; height: 20px; flex: 0 0 20px; }
.github-mark, .github-star-mark { position: absolute; inset: 0; margin: auto; transition: opacity 180ms ease, transform 220ms ease; }
.github-mark { opacity: 1; transform: scale(1); }
.github-star-mark { color: #a96700; opacity: 0; transform: scale(.72); }
html.dark .github-star-mark { color: #ffd166; }
.github-star-pill:is(:hover, :focus-visible) .github-mark { opacity: 0; transform: scale(.72); }
.github-star-pill:is(:hover, :focus-visible) .github-star-mark { opacity: 1; transform: scale(1); }
.github-star-label { min-width: 26px; text-align: center; font-variant-numeric: tabular-nums; white-space: nowrap; }
.github-star-pill:is(:hover, :focus-visible) .github-sparkle { transform-box: fill-box; transform-origin: center; animation: github-twinkle 600ms ease-out both; }
.github-star-pill:is(:hover, :focus-visible) .github-sparkle-late { animation-delay: 100ms; }
@keyframes github-twinkle { 0% { opacity: 0; transform: scale(.2); } 65% { opacity: 1; transform: scale(1.18); } 100% { opacity: 1; transform: scale(1); } }
.site-header .theme-toggle {
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  color: var(--text-secondary);
  background: transparent;
  box-shadow: none;
  transition: background-color 160ms ease, color 160ms ease;
}
.site-header .theme-toggle:hover, .site-header .theme-toggle:focus-visible { background: color-mix(in srgb, var(--text) 5%, transparent); color: var(--text); }
.theme-icon-stack { position: relative; display: inline-flex; width: 18px; height: 18px; align-items: center; justify-content: center; }
.theme-icon { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transform: rotate(-90deg) scale(.55); transition: opacity 280ms ease, transform 280ms ease; pointer-events: none; }
.theme-icon-moon { view-transition-name: harness-theme-moon; }
.theme-icon-sun { view-transition-name: harness-theme-sun; transform: rotate(90deg) scale(.55); }
.theme-icon.is-active { opacity: 1; transform: rotate(0deg) scale(1); }
html.harness-theme-capture .theme-icon { transition: none; }
html.harness-theme-capture .theme-icon .agent-icon path { animation: none !important; }
html.harness-theme-motion::view-transition { pointer-events: none; }
html.harness-theme-motion::view-transition-old(root),
html.harness-theme-motion::view-transition-new(root) {
  animation-duration: 200ms;
  animation-timing-function: ease-out;
  mix-blend-mode: normal;
}
html.harness-theme-motion::view-transition-group(harness-theme-moon),
html.harness-theme-motion::view-transition-group(harness-theme-sun) { animation-duration: 280ms; }
html.harness-theme-motion::view-transition-old(harness-theme-moon) { animation: harness-theme-moon-out 280ms ease both; mix-blend-mode: normal; }
html.harness-theme-motion::view-transition-new(harness-theme-moon) { animation: harness-theme-moon-in 280ms ease both; mix-blend-mode: normal; }
html.harness-theme-motion::view-transition-old(harness-theme-sun) { animation: harness-theme-sun-out 280ms ease both; mix-blend-mode: normal; }
html.harness-theme-motion::view-transition-new(harness-theme-sun) { animation: harness-theme-sun-in 280ms ease both; mix-blend-mode: normal; }
@keyframes harness-theme-moon-out { to { opacity: 0; transform: rotate(-90deg) scale(.55); } }
@keyframes harness-theme-moon-in { from { opacity: 0; transform: rotate(-90deg) scale(.55); } }
@keyframes harness-theme-sun-out { to { opacity: 0; transform: rotate(90deg) scale(.55); } }
@keyframes harness-theme-sun-in { from { opacity: 0; transform: rotate(90deg) scale(.55); } }
@media (max-width: 1190px) {
  .site-header .header-brand { min-width: 180px; }
  .site-header .header-inner { gap: 24px; }
  .site-header .top-nav { gap: 22px; }
  .site-header .header-actions { gap: 10px; }
}
@media (max-width: 1050px) and (min-width: 701px) {
  .site-header .header-inner { gap: 18px; }
  .site-header .header-brand { min-width: 170px; }
}
@media (max-width: 700px) {
  .site-header .header-inner { gap: 10px; }
  .site-header .header-brand { min-width: 0; }
  .site-header .header-actions { gap: 7px; }
  .site-header .brand { font-size: 21px; letter-spacing: -.7px; }
  .github-star-pill { width: 78px; flex-basis: 78px; height: 36px; padding: 0 9px; gap: 4px; font-size: 12px; }
  .site-header .theme-toggle { width: 32px; height: 32px; }
}
@media (max-width: 430px) {
  .site-header .brand-mark { display: none; }
  .site-header .brand { font-size: 20px; }
  .site-header .header-actions { gap: 5px; }
}
@media (prefers-reduced-motion: reduce) {
  .github-mark, .github-star-mark, .github-star-pill, .theme-icon { transition: none; }
  .github-sparkle { animation: none !important; }
  .github-mark, .github-star-mark, .github-star-pill:is(:hover, :focus-visible) .github-mark, .github-star-pill:is(:hover, :focus-visible) .github-star-mark { transform: none; }
  html.harness-theme-motion::view-transition-old(root), html.harness-theme-motion::view-transition-new(root),
  html.harness-theme-motion::view-transition-group(harness-theme-moon), html.harness-theme-motion::view-transition-old(harness-theme-moon), html.harness-theme-motion::view-transition-new(harness-theme-moon), html.harness-theme-motion::view-transition-group(harness-theme-sun), html.harness-theme-motion::view-transition-old(harness-theme-sun), html.harness-theme-motion::view-transition-new(harness-theme-sun) { animation: none; }
}
</style>
