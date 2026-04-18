<template>
  <div class="code-highlight-wrapper">
    <pre><code class="hljs" :class="language" v-html="highlightedCode"></code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import { useDarkMode } from '../composables/useDarkMode';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('css', css);

const props = defineProps({
  code: { type: String, required: true },
  language: { type: String, default: 'vue' }
});

const { isDark } = useDarkMode();

const highlightedCode = computed(() => {
  return hljs.highlight(props.code, { language: props.language }).value;
});

// Función para cargar el tema de highlight.js dinámicamente
function loadHighlightTheme(dark: boolean) {
  const themeId = 'hljs-theme';
  let existingLink = document.getElementById(themeId) as HTMLLinkElement;
  
  if (existingLink) {
    existingLink.remove();
  }
  
  const link = document.createElement('link');
  link.id = themeId;
  link.rel = 'stylesheet';
  link.href = dark 
    ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css'
    : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css';
  document.head.appendChild(link);
}

onMounted(() => {
  loadHighlightTheme(isDark.value);
});

watch(isDark, (newValue) => {
  loadHighlightTheme(newValue);
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
  background-color: var(--code-block-bg, #1e293b);
  border-radius: 8px;
  overflow-x: auto;
  transition: background-color 0.3s ease;
}
.code-highlight-wrapper code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
