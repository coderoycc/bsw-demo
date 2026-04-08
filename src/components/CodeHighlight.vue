<template>
  <div class="code-highlight-wrapper">
    <pre><code class="hljs" :class="language" v-html="highlightedCode"></code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('css', css);

const props = defineProps({
  code: { type: String, required: true },
  language: { type: String, default: 'vue' }
});

const highlightedCode = computed(() => {
  return hljs.highlight(props.code, { language: props.language }).value;
});
</script>

<style scoped>
.code-highlight-wrapper {
  margin: 0;
  width: 100%;
}
.code-highlight-wrapper pre {
  margin: 0;
  padding: 1.5rem;
  background-color: #1e293b; 
  border-radius: 8px;
  overflow-x: auto;
}
.code-highlight-wrapper code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
