<template>
  <div class="doc-page home-doc">
    <div class="hero-section">
      <h1>📱 Bottom Sheet Wrappers</h1>
      <p class="subtitle">
        Una librería de Vue 3 flexible diseñada específicamente para <b>dispositivos móviles</b>
        con soporte para gestos táctiles nativos y modos de visualización distintos.
      </p>

      <div class="badges">
        <span class="badge badge-primary">Mobile</span>
        <span class="badge badge-success">Vue 3</span>
        <span class="badge badge-warning">TypeScript</span>
        <span class="badge badge-info">Zero Deps</span>
      </div>
    </div>

    <div class="title-modes">
      <h2>Wrappers</h2>
    </div>

    <div class="doc-section row-2">
      <RouterLink class="card card-hover" to="/dynamic">
        <h3>✨ Dynamic</h3>
        <p>Un <strong>panel redimensionable y colapsable</strong>, ideal para contenido que requiere
          interacción
          táctil fluida.</p>
        <div class="card-action">Ver Documentación ➔</div>
      </RouterLink>

      <RouterLink class="card card-hover" to="/fixed">
        <h3>📌 Fixed</h3>
        <p>Un <strong>panel de altura estática</strong> o que se ajusta automáticamente a su contenido.</p>
        <div class="card-action">Ver Documentación ➔</div>
      </RouterLink>
    </div>

    <div class="doc-section">
      <h2>🚀 Inicio Rápido</h2>

      <h3>1. Instalación</h3>
      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="installCode" language="bash" />
      </div>

      <h3>2. Registro e Importación</h3>
      <p>Paso <b>importante</b> para que el componente se vea y actúe correctamente en tu proyecto. Solo
        necesitas
        importar la hoja de estilos y los componentes que deseas usar. Puedes
        importar y usar los componentes directamente en tu archivo <code>.vue</code>:</p>

      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="registerCode1" language="vue" />
      </div>

      <p>O puedes importar la hoja de estilos en <code>main.ts</code> para que esté disponible globalmente:</p>

      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="registerCode2" language="typescript" />
      </div>

      <h3>3. Uso del componente</h3>
      <p>Ahora puedes usar el componente en tu proyecto. En este ejemplo, uso simple para el modo
        <strong>Dynamic</strong>
      </p>
      <div style="margin-bottom: 1.5rem; display: flex; justify-content: center;">
        <SimpleExample />
      </div>
      <div style="margin-bottom: 1.5rem;">
        <CodeHighlight :code="simpleExampleCode" language="vue" />
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
import { DynamicBottomSheet } from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/style.css";

const isOpen = ref(false);
<\/script>`;

const registerCode2 = `import { createApp } from "vue";
import App from "./App.vue";
import "@coderoycc/bottom-sheet-wrappers/style.css";

const app = createApp(App);
app.mount("#app");`;
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
  margin-bottom: 0rem;
  margin-top: 0rem;
  color: inherit;
}
</style>
