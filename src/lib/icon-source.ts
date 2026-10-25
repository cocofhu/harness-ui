import motionCSS from "../styles/icons.css?raw";
import componentSource from "../components/AnimatedIcon.vue?raw";
import { iconDefinitions, resolveIcon } from "../data/icons";
import type { IconName } from "../data/icons";

export function iconSvgSource(name: string): string {
  const icon = resolveIcon(name);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="${icon.viewBox}" fill="${icon.filled ? "currentColor" : "none"}" stroke="${icon.strokeWidth ? "currentColor" : "none"}" stroke-width="${icon.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n  ${icon.body.replaceAll("><", ">\n  <")}\n</svg>`;
}

/** Extract one glyph's selectors and their referenced keyframes for portable copies. */
export function iconMotionSource(name: string): string {
  const css = motionCSS.replace(/\/\*[\s\S]*?\*\//g, "");
  const blocks: { selector: string; rule: string }[] = [];
  let start = 0;
  while (start < css.length) {
    const open = css.indexOf("{", start);
    if (open === -1) break;
    let end = open + 1;
    let depth = 1;
    while (end < css.length && depth) {
      if (css[end] === "{") depth++;
      if (css[end] === "}") depth--;
      end++;
    }
    blocks.push({
      selector: css.slice(start, open).trim(),
      rule: css.slice(start, end).trim(),
    });
    start = end;
  }
  const rules = blocks.filter(
    ({ selector }) =>
      !selector.startsWith("@") && selector.includes(`[data-icon="${name}"]`),
  );
  const keys = new Set(
    rules.flatMap(
      ({ rule }) => rule.match(/agentIcon(?:_[\w]+|Busy\w+)/g) || [],
    ),
  );
  return [
    ".agent-icon { display: inline-block; flex: none; overflow: visible; vertical-align: middle; }",
    ...rules.map(({ rule }) => rule),
    ...blocks
      .filter(
        ({ selector }) =>
          selector.startsWith("@keyframes ") && keys.has(selector.slice(11)),
      )
      .map(({ rule }) => rule),
    '.agent-icon[data-icon-motion="busy"] * { animation-iteration-count: infinite !important; }',
    "@media (prefers-reduced-motion: reduce) { .agent-icon, .agent-icon * { animation: none !important; transition: none !important; } }",
  ].join("\n");
}

export function iconVueSource(name: string): string {
  const safeName = Object.hasOwn(iconDefinitions, name)
    ? (name as IconName)
    : "dot";
  const component = componentSource
    .replace(/^import \{ resolveIcon \}[^\n]*\n/m, "")
    .replace(/^import type \{ IconName \}[^\n]*\n/m, "")
    .replace(/^import ['"]\.\.\/styles\/icons.css['"][^\n]*\n/m, "")
    .replace("name: IconName | (string & {})", "name?: string")
    .replace("size: 20,", `name: '${safeName}',\n  size: 20,`)
    .replace(
      "resolveIcon(props.name)",
      `(${JSON.stringify(resolveIcon(safeName))})`,
    );
  const license = motionCSS.slice(0, motionCSS.indexOf("*/") + 2);
  return `${component.trim().replace('<script setup lang=\"ts\">', `<script setup lang=\"ts\">\n${license}`)}\n\n<style>\n${iconMotionSource(safeName)}\n</style>\n`;
}
