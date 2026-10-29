import type { Component } from "vue";
import ChatComposer from "../components/ui/ChatComposer.vue";
import ChatConversation from "../components/ui/ChatConversation.vue";
import ThinkingIndicator from "../components/ui/ThinkingIndicator.vue";
import ModelSelector from "../components/ui/ModelSelector.vue";
import StatusBadge from "../components/ui/StatusBadge.vue";
import ActivityTimeline from "../components/ui/ActivityTimeline.vue";
import ClarificationCard from "../components/ui/ClarificationCard.vue";
import SlidingTabs from "../components/ui/SlidingTabs.vue";
import GroupedTaskList from "../components/ui/GroupedTaskList.vue";
import Selector from "../components/ui/Selector.vue";

const sources = import.meta.glob("../components/ui/*.vue", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
export type Category =
  | "all"
  | "conversation"
  | "agent"
  | "workflow"
  | "navigation";
export interface ComponentEntry {
  slug: string;
  name: string;
  english: string;
  description: string;
  category: Exclude<Category, "all">;
  component: Component;
  filename: string;
  source: string;
  fresh?: boolean;
}

type Entry = [
  string,
  string,
  string,
  string,
  Exclude<Category, "all">,
  Component,
  string,
  boolean?,
];
const entries: Entry[] = [
  [
    "chat-conversation",
    "Chat Conversation",
    "Chat Conversation",
    "Messages, execution steps, and input",
    "conversation",
    ChatConversation,
    "ChatConversation",
    true,
  ],
  [
    "chat-composer",
    "Chat Composer",
    "Chat Composer",
    "Messages, attachments, and model selection",
    "conversation",
    ChatComposer,
    "ChatComposer",
    true,
  ],
  [
    "model-selector",
    "Model Selector",
    "Model Selector",
    "Search and switch models",
    "agent",
    ModelSelector,
    "ModelSelector",
  ],
  [
    "thinking-indicator",
    "Thinking Indicator",
    "Thinking Indicator",
    "A thinking status indicator",
    "conversation",
    ThinkingIndicator,
    "ThinkingIndicator",
  ],
  [
    "status-badge",
    "Status Badge",
    "Status Badge",
    "Task execution status",
    "agent",
    StatusBadge,
    "StatusBadge",
  ],
  [
    "activity-timeline",
    "Activity Timeline",
    "Activity Timeline",
    "Execution steps and tool details",
    "workflow",
    ActivityTimeline,
    "ActivityTimeline",
    true,
  ],
  [
    "clarification-card",
    "Clarification Card",
    "Clarification Card",
    "Questions, choices, and answers",
    "conversation",
    ClarificationCard,
    "ClarificationCard",
    true,
  ],
  [
    "sliding-tabs",
    "Sliding Tabs",
    "Sliding Tabs",
    "Switch between tabs",
    "navigation",
    SlidingTabs,
    "SlidingTabs",
    true,
  ],
  [
    "selector",
    "Selector",
    "Selector",
    "Search and choose from a dropdown",
    "navigation",
    Selector,
    "Selector",
  ],
  [
    "grouped-task-list",
    "Grouped Task List",
    "Grouped Task List",
    "Grouped tasks with collapse and selection",
    "navigation",
    GroupedTaskList,
    "GroupedTaskList",
    true,
  ],
];
export const catalog: ComponentEntry[] = entries.map(
  ([
    slug,
    name,
    english,
    description,
    category,
    component,
    filename,
    fresh,
  ]) => ({
    slug,
    name,
    english,
    description,
    category,
    component,
    filename,
    fresh,
    source: sources[`../components/ui/${filename}.vue`] || "",
  }),
);
export const categories: { id: Category; name: string; english: string }[] = [
  { id: "all", name: "All components", english: "All components" },
  { id: "conversation", name: "Conversation", english: "Conversation" },
  { id: "agent", name: "Agents", english: "Agent" },
  { id: "workflow", name: "Workflow", english: "Workflow" },
  { id: "navigation", name: "Navigation", english: "Navigation" },
];
export const componentFilename = (entry: ComponentEntry) => entry.filename;


const searchAliases: Record<string, string> = {
  "chat-conversation": "chat conversation messages history attachments input send stop streaming",
  "chat-composer": "chat composer message input attachments send",
  "model-selector": "model select switch dropdown picker",
  "thinking-indicator": "thinking waiting loading reasoning",
  "status-badge": "status label badge tag",
  "activity-timeline": "activity timeline fold expand collapse tools",
  "clarification-card": "question answer clarification choices form",
  "sliding-tabs": "tab tabs switch segmented control",
  "selector": "select selector dropdown options picker form searchable",
  "grouped-task-list": "list group tasks navigation sidebar fold collapse hover new task",
};

export function matchesComponent(entry: ComponentEntry, query: string) {
  return `${entry.name} ${entry.english} ${entry.description} ${searchAliases[entry.slug] || ""}`
    .toLowerCase().includes(query.trim().toLowerCase());
}
