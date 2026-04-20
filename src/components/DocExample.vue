<template>
  <div class="doc-example">
    <div class="example-tabs">
      <button :class="['tab-btn', { active: activeTab === 'result' }]" @click="activeTab = 'result'">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        Vista
      </button>
      <button :class="['tab-btn', { active: activeTab === 'code' }]" @click="activeTab = 'code'">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        Código
      </button>
    </div>
    <div class="example-content">
      <div v-show="activeTab === 'result'" class="tab-pane result-pane">
        <slot name="result"></slot>
      </div>
      <div v-show="activeTab === 'code'" class="tab-pane code-pane">
        <CodeHighlight v-if="codeString" :code="codeString" language="vue" />
        <div v-else class="code-block">
          <pre><code><slot name="code"></slot></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CodeHighlight from './CodeHighlight.vue';

defineProps({
  codeString: {
    type: String,
    default: ''
  }
});

const activeTab = ref('result');
</script>

<style scoped>
.doc-example {
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 8px;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: border-color 0.3s ease;
}
.example-tabs {
  display: flex;
  background: var(--tab-bg, #f8fafc);
  border-bottom: 1px solid var(--tab-border, #e2e8f0);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.tab-btn {
  padding: 0.85rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--tab-btn-color, #64748b);
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  display: flex;
  align-items: center;
}
.tab-btn:hover {
  color: var(--tab-btn-hover-color, #334155);
  background: var(--tab-btn-hover-bg, #f1f5f9);
}
.tab-btn.active {
  color: var(--tab-btn-active-color, #0f172a);
  border-bottom-color: var(--primary-color, #3b82f6);
  background: var(--tab-btn-active-bg, white);
}
.tab-pane {
  background: var(--tab-pane-bg, white);
  transition: background-color 0.3s ease;
}
.result-pane {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
}
.code-pane {
  padding: 0;
  background-color: var(--code-block-bg, #1e293b);
  transition: background-color 0.3s ease;
}
.code-block {
  background: var(--code-block-bg, #1e293b);
  color: var(--code-block-text, #f8fafc);
  padding: 1.5rem;
  overflow-x: auto;
  margin: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.code-block pre {
  margin: 0;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem; line-height: 1.5;
}
</style>
