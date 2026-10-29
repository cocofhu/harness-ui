# Harness UI

Vue 3 components and animated SVG icons for agent interfaces. Explore working examples, copy the standalone source, and connect it to your own application.

[Live site](https://cocofhu.github.io/harness-ui/) · [Components](https://cocofhu.github.io/harness-ui/#/components) · [Icons](https://cocofhu.github.io/harness-ui/#/icons)

## Quick start

Requires Node.js 22.12+ and npm.

```bash
git clone https://github.com/cocofhu/harness-ui.git
cd harness-ui
npm ci
npm run dev
```

The development server runs at [localhost:5174](http://localhost:5174).

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Use a component

1. Install the icon dependency in your Vue 3 project: `npm install lucide-vue-next`.
2. Copy the component you need from [`src/components/ui`](./src/components/ui).
3. Optionally copy [`src/styles/tokens.css`](./src/styles/tokens.css) for shared theme colors. Components include light theme defaults; use a `.dark` ancestor for dark mode.
4. Import the component and connect its props and events.

```vue
<script setup lang="ts">
import { ref } from 'vue';
import ChatComposer from './components/ui/ChatComposer.vue';

const draft = ref('');

function sendMessage(message: { text: string; model: string; files: File[] }) {
  // Connect your application here.
  console.log(message);
}
</script>

<template>
  <ChatComposer v-model="draft" @send="sendMessage" />
</template>
```

Components handle interface interactions. Your application supplies message requests, uploads, and task execution. The showcase uses local example data.

## Components

| Component | Interactions |
| --- | --- |
| ChatConversation | Messages, streaming responses, process details, attachments, send and stop |
| ChatComposer | Input, attachments, model selection, and send events |
| ModelSelector | Model search, provider logos, and selection |
| ThinkingIndicator | Thinking status with a subtle light animation |
| StatusBadge | Data-driven status labels |
| ActivityTimeline | Expandable environment, thinking, and tool details |
| ClarificationCard | Question choices, submission, and answer summary |
| SlidingTabs | Keyboard navigation and a sliding selection indicator |
| Selector | Searchable dropdown, hints, custom values, and keyboard selection |
| GroupedTaskList | Task groups, collapsible history, selection, and a new-task hover overlay |

The icon gallery contains 141 SVG icons, including 140 with individual animations. Hover or focus a glyph to preview its motion, or copy its SVG or standalone Vue source. Animations respect reduced-motion preferences.

### Selector

Copy [`Selector.vue`](./src/components/ui/Selector.vue) to your project. It supports `v-model`, search, option hints, disabled options, custom values, and both `outline` and `ghost` variants. Its menu stays within the viewport and escapes clipped containers.

```vue
<script setup lang="ts">
import { ref } from 'vue';
import Selector from './components/ui/Selector.vue';

const status = ref('in-progress');
const options = [
  { value: 'backlog', label: 'Backlog' },
  { value: 'in-progress', label: 'In progress', hint: 'Active' },
  { value: 'done', label: 'Done' },
];
</script>

<template>
  <Selector v-model="status" :options="options" searchable aria-label="Task status" />
</template>
```

Use `allow-custom` with `searchable` to accept typed values; use `disabled`, `invalid`, `loading`, and `empty-text` for form states. The optional `leading` and `option-leading` slots provide custom icons. Each option has a string `value`, a `label`, and optional `hint` and `disabled` fields.

## GitHub Pages

Source lives on `main`. Every push to `main` runs [Publish GitHub Pages](./.github/workflows/pages.yml):

1. Install the locked dependencies and typecheck the project.
2. Build with the `/harness-ui/` base path.
3. Commit the static output to `gh-pages`, keeping deployment history.
4. Request a Pages build from that branch.

Pages is configured to publish **`gh-pages` → `/ (root)`**. No personal access token or additional repository secret is required; the workflow uses GitHub's automatic token with `contents: write` and `pages: write` permissions. You can also start a deployment from the workflow's **Run workflow** action.

To check a build with the deployed path locally:

```bash
npm run build -- --base=/harness-ui/
npm run preview -- --base=/harness-ui/
```

Then open [localhost:4173/harness-ui/](http://localhost:4173/harness-ui/).

## Development checks

```bash
npx playwright install chromium
npm test
npm run build
```

## Project structure

```text
src/
├── App.vue              # Navigation and component catalog
├── data/catalog.ts      # Component metadata and copyable source
├── components/ui/       # Standalone Vue components
├── styles/base.css      # Showcase styles
└── styles/tokens.css    # Optional shared theme tokens
```

The component browsing layout draws on [Rare UI](https://www.rareui.com/), while the homepage demonstration takes inspiration from [Metabind](https://www.metabind.ai/). Components are extracted from existing application interfaces and adapted for standalone use.

Built with Vue 3, TypeScript, and Vite. Licensed under [MIT](./LICENSE). Third-party icon and font notices are included in [`licenses`](./licenses) and [`public/fonts`](./public/fonts).
