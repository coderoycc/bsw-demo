<template>
  <div class="doc-page home-doc">
    <div class="hero-section">
      <h1>📱 Bottom Sheet Wrappers</h1>
      <p class="subtitle">
        Una librería de Vue 3 flexible y poderosa diseñada específicamente para <b>dispositivos móviles</b> 
        con soporte para gestos táctiles nativos y modos de visualización distintos.
      </p>
      
      <div class="badges">
        <span class="badge badge-primary">Mobile-First</span>
        <span class="badge badge-success">Vue 3</span>
        <span class="badge badge-warning">TypeScript</span>
        <span class="badge badge-info">Zero Deps</span>
      </div>
    </div>

    <div class="doc-section row-2">
      <div class="card card-hover" @click="$emit('navigate', 'dynamic')">
        <h3>✨ DynamicBottomSheet</h3>
        <p>Un panel redimensionable con soporte para estados (collapsed, half, full). Permite arrastre y comportamientos de mini-player.</p>
        <div class="card-action">Ver Documentación ➔</div>
      </div>
      
      <div class="card card-hover" @click="$emit('navigate', 'fixed')">
        <h3>📌 FixedBottomSheet</h3>
        <p>Un panel de altura estática o que se ajusta automáticamente a su contenido. Perfecto para modales simples o menús fijos.</p>
        <div class="card-action">Ver Documentación ➔</div>
      </div>
    </div>

    <div class="doc-section">
      <h2>🚀 Inicio Rápido</h2>
      
      <h3>1. Instalación</h3>
      <div class="code-block">
        <pre><code>npm install @coderoycc/bottom-sheet-wrappers</code></pre>
      </div>

      <h3>2. Registro e Importación</h3>
      <p>Puedes importar y usar los componentes directamente en tu archivo <code>.vue</code>:</p>
      <div class="code-block">
        <pre><code>&lt;script setup&gt;
import { ref } from "vue";
import { DynamicBottomSheet } from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/dist/bottom-sheet-wrappers.css";

const isOpen = ref(false);
&lt;/script&gt;</code></pre>
      </div>
      <p>O registrarlo globalmente en <code>main.ts</code>:</p>
      <div class="code-block">
        <pre><code>import { createApp } from "vue";
import App from "./App.vue";
import BottomSheetPlugin from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/dist/bottom-sheet-wrappers.css";

const app = createApp(App);
app.use(BottomSheetPlugin);
app.mount("#app");</code></pre>
      </div>
    </div>

    <div class="doc-section">
      <h2>🎨 Estilos y Temas</h2>
      <p>Puedes personalizar los estilos sobrescribiendo las variables CSS o apuntando directamente a las clases.</p>
      
      <h3>Variables CSS y Clases</h3>
      <p>Por ejemplo, para cambiar la opacidad del fondo (backdrop) o el color de la manija de arrastre:</p>
      <div class="code-block">
        <pre><code>/* Cambiar la opacidad del backdrop */
.bsw-bottom-sheet-backdrop--visible {
  background: rgba(0, 0, 0, 0.75) !important;
}

/* Cambiar el color de la manija de arrastre */
.bsw-bottom-sheet-handle {
  background: var(--tu-color-primario) !important;
}</code></pre>
      </div>

      <h3>Modo Oscuro (Dark Mode)</h3>
      <p>La librería se adapta fácilmente a configuraciones de temas o modo oscuro aislando las clases:</p>
      <div class="code-block">
        <pre><code>&lt;DynamicBottomSheet v-model="isOpen" class="my-dark-theme"&gt;
  &lt;p&gt;Contenido...&lt;/p&gt;
&lt;/DynamicBottomSheet&gt;

&lt;style&gt;
.my-dark-theme .bsw-bottom-sheet-panel {
  background: #1a1a1a;
  color: #ffffff;
}
&lt;/style&gt;</code></pre>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'navigate', tab: string): void
}>()
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
  color: #0f172a;
}

.subtitle {
  font-size: 1.25rem;
  color: #475569;
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

.badge-primary { background-color: #3b82f6; }
.badge-success { background-color: #10b981; }
.badge-warning { background-color: #f59e0b; color: #fff; }
.badge-info { background-color: #0ea5e9; }

.row-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: #cbd5e1;
}

.card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #1e293b;
}

.card p {
  color: #64748b;
  flex: 1;
}

.card-action {
  margin-top: 1.5rem;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.95rem;
}

.code-block {
  background: #1e293b;
  color: #f8fafc;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  background: transparent;
  color: inherit;
  padding: 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
}
</style>
