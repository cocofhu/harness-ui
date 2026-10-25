/**
 * MIT License
 * Copyright (c) 2026 cocofhu
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import definitions from "./icon-definitions.json";

export interface IconDefinition {
  body: string;
  duration: number;
  viewBox: string;
  filled: boolean;
  strokeWidth: number;
  note: string;
}

/** The SVG bodies are trusted local assets; never substitute user-provided markup. */
export const iconDefinitions = definitions satisfies Record<
  string,
  IconDefinition
>;
export type IconName = keyof typeof iconDefinitions;
export const iconNames = Object.keys(iconDefinitions) as IconName[];
export const iconCount = iconNames.length;

export function resolveIcon(name: string): IconDefinition {
  return Object.hasOwn(iconDefinitions, name)
    ? iconDefinitions[name as IconName]
    : iconDefinitions.dot;
}

const statusIcons = new Set<IconName>([
  "check",
  "check-draw",
  "spinner",
  "arc-spinner",
  "breath-dot",
  "bubble-idle",
  "user-hold",
  "arrow-flow",
  "run-live",
  "history-back",
  "play-continue",
  "quiet-dot",
  "warn-pulse",
  "chat-stop",
  "stop",
  "pending-chat",
  "pending-review",
  "pending-approval",
  "alert",
  "ci",
  "dot",
  "clock",
  "metric-running",
  "queue",
  "confirmation-check",
  "inbox-boot",
  "inbox-reply",
  "info",
  "warning",
  "circle",
  "skip",
  "server-unavailable",
  "workflow-empty",
  "gate",
  "priority-bolt",
  "priority-low",
  "priority-medium",
  "priority-high",
]);

const labels: Record<IconName, string> = {
  "copy": "Copy",
  "trash": "Delete",
  "folder": "Folder",
  "terminal": "Terminal",
  "stage-terminal": "Terminal workspace",
  "workflow": "Workflow",
  "check": "Check",
  "check-draw": "Draw check",
  "bell": "Notifications",
  "settings": "Settings",
  "refresh": "Refresh",
  "spinner": "Loading",
  "arc-spinner": "Arc spinner",
  "breath-dot": "Breathing dot",
  "bubble-idle": "Thinking bubble",
  "user-hold": "Waiting for input",
  "arrow-flow": "Flow transition",
  "run-live": "Running",
  "history-back": "History back",
  "play-continue": "Continue",
  "quiet-dot": "Idle",
  "warn-pulse": "Warning pulse",
  "chat-send": "Send message",
  "chat-stop": "Stop response",
  "stop": "Stop",
  "send": "Send",
  "play": "Play",
  "runs": "Run history",
  "chat": "Chat",
  "brain": "Thinking",
  "robot": "Agent",
  "user": "User",
  "stage-ide": "Code editor",
  "stage-browser": "Browser",
  "stage-log": "Logs",
  "stage-resources": "Resources",
  "dashboard": "All components",
  "home-start": "Start creating",
  "new-request": "New task",
  "pending-chat": "Awaiting reply",
  "pending-review": "Awaiting review",
  "pending-approval": "Awaiting approval",
  "more-horizontal": "More actions",
  "logout": "Log out",
  "chart": "Chart",
  "board": "Board",
  "gate": "Approval gate",
  "lock": "Lock",
  "key": "Key",
  "server": "Server",
  "artifact": "Artifact",
  "skills": "Skills",
  "connector": "Connector",
  "trigger": "Trigger",
  "search": "Search",
  "filter": "Filter",
  "plus": "Add",
  "save": "Save",
  "more": "More",
  "close": "Close",
  "chat-artifacts": "Conversation artifacts",
  "alert": "Alert",
  "chevron-down": "Expand down",
  "chevron-left": "Collapse left",
  "chevron-right": "Expand right",
  "arrow-left": "Arrow left",
  "arrow-right": "Arrow right",
  "arrow-up": "Arrow up",
  "chevrons-down": "Collapse down",
  "swap": "Switch",
  "download": "Download",
  "sparkles": "Sparkles",
  "branch": "Branch",
  "ci": "Continuous integration",
  "dot": "Dot",
  "edit": "Edit",
  "eye": "Visible",
  "eye-off": "Hidden",
  "doc": "Document",
  "clock": "Clock",
  "input": "Input",
  "output": "Output",
  "flask": "Experiment",
  "sun": "Light mode",
  "moon": "Dark mode",
  "expand": "Expand",
  "flag": "Flag",
  "history": "History",
  "variable": "Variable",
  "leave": "Leave",
  "git": "Version control",
  "paperclip": "Attachment",
  "monitor": "Desktop",
  "mobile": "Mobile",
  "menu": "Menu",
  "panel-left": "Sidebar",
  "globe": "Web",
  "crosshair": "Target",
  "tag": "Tag",
  "pin": "Pin",
  "star": "Star",
  "star-filled": "Starred",
  "help": "Help",
  "token": "Usage",
  "calendar": "Calendar",
  "metric-running": "Running metric",
  "queue": "Queue",
  "undo": "Undo",
  "redo": "Redo",
  "zoom-out": "Zoom out",
  "layout": "Layout",
  "minimap": "Minimap",
  "priority-bolt": "Urgent priority",
  "priority-low": "Low priority",
  "priority-medium": "Medium priority",
  "priority-high": "High priority",
  "sort-ascending": "Sort ascending",
  "sort-descending": "Sort descending",
  "preview-expand": "Expand preview",
  "grip": "Drag handle",
  "confirmation-check": "Confirmed",
  "image-off": "Image unavailable",
  "inbox-boot": "Starting",
  "inbox-reply": "New reply",
  "qq": "QQ",
  "info": "Information",
  "warning": "Warning",
  "preview-target": "Preview target",
  "layers": "Layers",
  "preview-chat": "Chat preview",
  "drawer-collapse": "Collapse drawer",
  "review": "Review",
  "form": "Form",
  "users": "Team",
  "bell-settings": "Notification settings",
  "integration": "Integration",
  "image": "Image",
  "circle": "Circle outline",
  "skip": "Skip",
  "server-unavailable": "Server unavailable",
  "workflow-empty": "Empty workflow",
};

export function iconLabel(name: string): string {
  return labels[name as IconName] || "Icon";
}

export const iconEntries = iconNames.map((name) => ({
  name,
  label: labels[name],
  category: statusIcons.has(name)
    ? ("status" as const)
    : ("interface" as const),
  animated: name !== "qq",
}));
