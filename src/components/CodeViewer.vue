<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ code: string; compact?: boolean }>();
const lines = computed(() =>
  props.code
    .trim()
    .split("\n")
    .map((line) =>
      line
        .split(
          /(\"[^\"]*\"|'[^']*'|`[^`]*`|\/\/.*$|\b(?:import|from|const|let|function|return|export|default|interface|type|if|await|async|true|false)\b)/g,
        )
        .filter(Boolean),
    ),
);
function tokenClass(token: string) {
  if (/^["'`]/.test(token)) return "code-string";
  if (token.startsWith("//")) return "code-comment";
  if (
    /^(import|from|const|let|function|return|export|default|interface|type|if|await|async|true|false)$/.test(
      token,
    )
  )
    return "code-keyword";
  return "";
}
</script>

<template>
  <pre
    class="source-code"
    aria-label="Source code"
    :class="{ compact }"
  ><code><span v-for="(line, i) in lines" :key="i" class="code-line"><span v-if="!compact" class="line-number" aria-hidden="true">{{ i + 1 }}</span><span class="line-content"><span v-for="(token, j) in line" :key="j" :class="tokenClass(token)">{{ token }}</span>{{ line.length ? '' : ' ' }}</span></span></code></pre>
</template>
