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
import bash from 'highlight.js/lib/languages/bash';
import { useDarkMode } from '../composables/useDarkMode';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);

const props = defineProps({
  code: { type: String, required: true },
  language: { type: String, default: 'vue' }
});

const { isDark } = useDarkMode();

const highlightedCode = computed(() => {
  return hljs.highlight(props.code, { language: props.language }).value;
});

// Keep track of loaded status globally so we don't recreate them on multiple instances
let themesLoaded = false;

function loadHighlightTheme(dark: boolean) {
  const darkThemeId = 'hljs-theme-dark';
  const lightThemeId = 'hljs-theme-light';
  
  let darkLink = document.getElementById(darkThemeId) as HTMLLinkElement;
  let lightLink = document.getElementById(lightThemeId) as HTMLLinkElement;
  
  // Agregar los enlaces solo una vez
  if (!themesLoaded || !darkLink || !lightLink) {
    if (!darkLink) {
      darkLink = document.createElement('link');
      darkLink.id = darkThemeId;
      darkLink.rel = 'stylesheet';
      darkLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
      // Por defecto desactivamos temporalmente si no es su turno para evitar colisiones iniciales
      darkLink.disabled = !dark; 
      document.head.appendChild(darkLink);
    }
    
    if (!lightLink) {
      lightLink = document.createElement('link');
      lightLink.id = lightThemeId;
      lightLink.rel = 'stylesheet';
      lightLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css';
      lightLink.disabled = dark;
      document.head.appendChild(lightLink);
    }
    themesLoaded = true;
  }

  // Activar/Desactivar instantáneamente sin hacer request nuevamente
  if (dark) {
    if (darkLink) darkLink.disabled = false;
    if (lightLink) lightLink.disabled = true;
  } else {
    if (lightLink) lightLink.disabled = false;
    if (darkLink) darkLink.disabled = true;
  }
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
  /* IMPORTANTE: Remover las transiciones en CodeHighlight evita efecto de parpadeo durante el cambio de tema */
}
.code-highlight-wrapper code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
