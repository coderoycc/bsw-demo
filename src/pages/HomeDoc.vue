<template>
  <div class="doc-page home-doc">
    <div class="hero-section">
      <h1>{{ $t('home.hero.title') }}</h1>
      <i18n-t keypath="home.hero.subtitle" tag="p" class="subtitle">
        <template #mobile>
          <b>{{ $t('home.hero.mobile_devices') }}</b>
        </template>
      </i18n-t>

      <div class="badges">
        <span class="badge badge-primary">Mobile</span>
        <span class="badge badge-success">Vue 3</span>
        <span class="badge badge-warning">TypeScript</span>
        <span class="badge badge-info">Zero Deps</span>
      </div>
    </div>

    <div class="title-modes">
      <h2 class="title-elegant">{{ $t('home.wrappers.title') }}</h2>
    </div>

    <div class="doc-section row-2">
      <RouterLink class="card card-hover" to="/simple">
        <h3 class="title-elegant">{{ $t('home.wrappers.simple.title') }}</h3>
        <i18n-t keypath="home.wrappers.simple.description" tag="p">
          <template #panel>
            <strong>{{ $t('home.wrappers.simple.panel') }}</strong>
          </template>
        </i18n-t>
        <div class="card-action">{{ $t('home.actions.view_docs') }}</div>
      </RouterLink>
      <RouterLink class="card card-hover" to="/dynamic">
        <h3 class="title-elegant">{{ $t('home.wrappers.dynamic.title') }}</h3>
        <i18n-t keypath="home.wrappers.dynamic.description" tag="p">
          <template #panel>
            <strong>{{ $t('home.wrappers.dynamic.panel') }}</strong>
          </template>
        </i18n-t>
        <div class="card-action">{{ $t('home.actions.view_docs') }}</div>
      </RouterLink>
    </div>

    <div class="doc-section">
      <h2 class="title-elegant">{{ $t('home.quick_start.title') }}</h2>

      <h3 class="title-elegant">{{ $t('home.quick_start.steps.install.title') }}</h3>
      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="installCode" language="bash" />
      </div>

      <h3 class="title-elegant">{{ $t('home.quick_start.steps.register.title') }}</h3>
      <i18n-t keypath="home.quick_start.steps.register.description" tag="p">
        <template #important>
          <b>{{ $t('home.quick_start.steps.register.important') }}</b>
        </template>
        <template #ext>
          <code>.vue</code>
        </template>
      </i18n-t>

      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="registerCode1" language="vue" />
      </div>

      <i18n-t keypath="home.quick_start.steps.register.alternative" tag="p">
        <template #file>
          <code>main.ts</code>
        </template>
      </i18n-t>

      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="registerCode2" language="typescript" />
      </div>

      <h3 class="title-elegant">{{ $t('home.quick_start.steps.usage.title') }}</h3>
      <i18n-t keypath="home.quick_start.steps.usage.description" tag="p">
        <template #mode>
          <strong>Dynamic</strong>
        </template>
      </i18n-t>
      <div style="margin-bottom: 1.5rem; display: flex; justify-content: center;">
        <SimpleExample />
      </div>
      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="simpleExampleCode" language="vue" />
      </div>

      <h2 class="title-elegant">{{ $t('home.customization.title') }}</h2>
      <i18n-t keypath="home.customization.description" tag="p">
        <template #vars>
          <b>{{ $t('home.customization.vars_text') }}</b>
        </template>
        <template #prefix>
          <code>--bsw-</code>
        </template>
      </i18n-t>

      <div class="vars-grid">
        <div class="var-card">
          <h4>{{ $t('home.customization.sections.base.title') }}</h4>
          <p>{{ $t('home.customization.sections.base.description') }}</p>
          <ul>
            <li><code>--bsw-text-color</code>: {{ $t('home.customization.sections.base.vars.text') }}</li>
            <li><code>--bsw-muted-color</code>: {{ $t('home.customization.sections.base.vars.muted') }}</li>
          </ul>
        </div>
        <div class="var-card">
          <h4>{{ $t('home.customization.sections.specific.title') }}</h4>
          <p>{{ $t('home.customization.sections.specific.description') }}</p>
          <ul>
            <li><code>--bsw-background</code>: {{ $t('home.customization.sections.specific.vars.bg') }}</li>
            <li><code>--bsw-border-radius</code>: {{ $t('home.customization.sections.specific.vars.radius') }}</li>
            <li><code>--bsw-box-shadow</code>: {{ $t('home.customization.sections.specific.vars.shadow') }}</li>
          </ul>
        </div>
      </div>

      <i18n-t keypath="home.customization.footer" tag="p">
        <template #root>
          <code>:root</code>
        </template>
      </i18n-t>
      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="customVarsCode" language="css" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import CodeHighlight from '../components/CodeHighlight.vue';

import simpleExampleCode from '../examples/SimpleExample.vue?raw';
import SimpleExample from '../examples/SimpleExample.vue';

const installCode = `npm install @coderoycc/bottom-sheet-wrappers`;

const registerCode1 = `<script setup>
import { ref } from "vue";
import { BsDynamic } from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/style.css";

const isOpen = ref(false);
<\/script>`;

const registerCode2 = `import { createApp } from "vue";
import App from "./App.vue";
import "@coderoycc/bottom-sheet-wrappers/style.css";

const app = createApp(App);
app.mount("#app");`;
const customVarsCode = `.mi-bottom-sheet {
  --bsw-background: #1e1e2e;
  --bsw-text-color: #cdd6f4;
  --bsw-muted-color: rgba(255, 255, 255, 0.45);
  --bsw-border-radius: 24px;
}`;
</script>

<style scoped>
.hero-section {
  text-align: center;
  padding: 3rem 0 4rem 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 3rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  letter-spacing: -0.05em;
  margin-bottom: 1rem;
  color: var(--heading-h1, #0f172a);
}

.subtitle {
  font-size: 1.25rem;
  color: var(--heading-description, #475569);
  max-width: 700px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
}

.badges {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
}

.badge-primary {
  background-color: #3b82f6;
}

.badge-success {
  background-color: #10b981;
}

.badge-warning {
  background-color: #f59e0b;
  color: #fff;
}

.badge-info {
  background-color: #0ea5e9;
}

.row-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.card {
  background: var(--doc-card-bg, white);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

html.dark .card {
  background: var(--bg-muted);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--heading-h3, #1e293b);
}

.card p {
  color: var(--text-muted, #64748b);
  flex: 1;
}

.card-action {
  margin-top: 1.5rem;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.95rem;
}

.code-block code {
  background: transparent;
  color: inherit;
  padding: 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
}

.title-modes {
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.title-elegant {
  color: var(--heading-h1, #0f172a);
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
}

.card .title-elegant {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.vars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.var-card {
  background: var(--bg-muted, #f8fafc);
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.var-card h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.var-card p {
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.var-card ul {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.9rem;
}

.var-card li {
  margin-bottom: 0.25rem;
}

html.dark .var-card {
  background: rgba(255, 255, 255, 0.03);
}
</style>
