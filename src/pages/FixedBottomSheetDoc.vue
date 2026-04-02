<template>
  <div class="doc-page">
    <h1>Fixed Bottom Sheet</h1>
    <p class="description">
      Un panel de altura estática o que se ajusta automáticamente a su contenido. Perfecto para modales simples, menús fijos o vistas donde no se necesita el redimensionamiento del usuario.
    </p>

    <div class="doc-section">
      <h2>🛠 Uso</h2>
      
      <h3>Cómo Importar</h3>
      <div class="code-block">
        <pre><code>import { FixedBottomSheet } from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/dist/bottom-sheet-wrappers.css";</code></pre>
      </div>

      <h3>Simple</h3>
      <p>
        El componente tiene dos comportamientos basados en si pasas la prop <code>height</code> o no:
        <ul>
          <li><strong>Altura estática (Fixed Height):</strong> Se define un height estricto. (Ej. <code>height="50dvh"</code>).</li>
          <li><strong>Ajuste automático (Auto-fit):</strong> Si omites <code>height</code>, el sheet tomará la altura natural del contenido interno.</li>
        </ul>
      </p>

      <h3>Código</h3>
      <div class="code-block">
        <pre><code>&lt;script setup&gt;
import { ref } from "vue";
import { FixedBottomSheet } from "@coderoycc/bottom-sheet-wrappers";

const isOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;FixedBottomSheet v-model="isOpen" title="Mi Panel Fijo" height="50dvh"&gt;
    &lt;p&gt;Contenido de altura fija.&lt;/p&gt;
  &lt;/FixedBottomSheet&gt;
&lt;/template&gt;</code></pre>
      </div>
    </div>

    <!-- Playground -->
    <div class="doc-section">
      <h2>💡 Ejemplo de Usos</h2>
      <div class="doc-card showcase">
        <div class="controls">
          <div class="form-group">
            <label>Tipo de Altura (Modo)</label>
            <select v-model="heightMode" class="form-control">
              <option value="auto">Auto-Ajustable (Auto-fit)</option>
              <option value="fixed">Fijo (50dvh)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Mostrar Backdrop</label>
            <input type="checkbox" v-model="showBackdrop" />
          </div>
          <div class="form-group" style="margin-top: 1.5rem; text-align: center;">
            <button class="btn-primary" @click="isOpen = true">Abrir Fixed Sheet</button>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-section">
      <h2>📚 API</h2>
      
      <!-- Props -->
      <ApiTable title="Props" :columns="propsColumns" :rows="propsData" />

      <!-- Events -->
      <ApiTable title="Eventos" :columns="eventsColumns" :rows="eventsData" />

      <!-- Slots -->
      <ApiTable title="Slots" :columns="slotsColumns" :rows="slotsData" />
    </div>

    <!-- Modal FixedBottomSheet -->
    <fixed-bottom-sheet
      v-model="isOpen"
      :show-backdrop="showBackdrop"
      :height="computedHeight"
      :title="heightMode === 'auto' ? 'Auto-Adjust Panel' : 'Fixed Panel'"
    >
      <div class="content-example">
        <p v-if="heightMode === 'auto'">
          Este panel toma automáticamente la altura de mi contenido. Como soy pequeño, ¡el panel también lo es!
        </p>
        <p v-else>
          Este panel tiene una altura fija de 50%. Aunque el contenido sea poco, el panel respetará su límite.
        </p>

        <div style="margin-top: 1rem;" v-if="heightMode === 'auto'">
          <div class="dummy-block">Elemento 1</div>
          <div class="dummy-block">Elemento 2</div>
        </div>
      </div>
    </fixed-bottom-sheet>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { FixedBottomSheet } from '@coderoycc/bottom-sheet-wrappers';
import ApiTable from '../components/ApiTable.vue';

// Estado
const isOpen = ref(false);
const showBackdrop = ref(true);
const heightMode = ref('auto');

const computedHeight = computed(() => {
  return heightMode.value === 'fixed' ? '50dvh' : undefined;
});

// API config
const propsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'type', label: 'Tipo', isCode: true },
  { key: 'default', label: 'Por Defecto', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const propsData = [
  { name: 'modelValue (v-model)', type: 'boolean', default: 'false', desc: 'Controla la visibilidad del componente.' },
  { name: 'title', type: 'string', default: "''", desc: 'Título básico que se muestra en el header.' },
  { name: 'height', type: 'string | number', default: 'undefined', desc: 'Altura forzada del panel. Si se omite, se intentará ajustar al tamaño de su contenido.' },
  { name: 'showBackdrop', type: 'boolean', default: 'false', desc: 'Muestra un fondo oscuro detrás del panel.' },
  { name: 'zIndex', type: 'number', default: '0', desc: 'Base del z-index sumada a 9000.' },
  { name: 'props', type: 'Record<string, any>', default: '{}', desc: 'Objeto adicional para vincular payloads extra si es necesario.' }
];

const eventsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'params', label: 'Parámetros', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const eventsData = [
  { name: 'update:modelValue', params: 'value: boolean', desc: 'Emitido cuando cambia la visibilidad.' },
  { name: 'opened', params: '-', desc: 'Emitido cuando el panel ha sido cargado.' },
  { name: 'closed', params: '-', desc: 'Emitido cuando el panel finaliza de ser borrado de la pantalla.' },
  { name: 'before-close', params: '-', desc: 'Emitido justo antes de iniciar la secuencia de cierre.' }
];

const slotsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const slotsData = [
  { name: 'default', desc: 'Contenido dinámico en el área principal de lectura.' },
  { name: 'header', desc: 'Reemplaza la porción superior (incluyendo el título). Se mantiene el handler de cierre.' }
];
</script>

<style scoped>
.description {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 800px;
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

.showcase {
  background-color: var(--bg-muted);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}

.controls {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  min-width: 300px;
}

.dummy-block {
  background-color: #f1f5f9;
  border: 1px dashed #cbd5e1;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  text-align: center;
  color: #64748b;
}

.content-example {
  padding: 1.5rem;
}
</style>
