<template>
  <div class="doc-page">
    <h1>Dynamic Bottom Sheet</h1>
    <p class="description">
      Un panel inferior (bottom sheet) dinámico que ajusta su tamaño mediante gestos o interacciones. 
      Soporta tamaños iniciales, arrastre y animaciones fluidas, ideal para vistas ricas en contenido móvil o web.
    </p>

    <div class="doc-section">
      <h2>🛠 Uso</h2>
      
      <h3>Cómo Importar</h3>
      <div class="code-block">
        <pre><code>import { DynamicBottomSheet } from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/dist/bottom-sheet-wrappers.css";</code></pre>
      </div>

      <h3>Simple</h3>
      <p>
        Este componente está diseñado con 3 posiciones (<code>collapsed</code>, <code>half</code>, y <code>full</code>). 
        El usuario puede expandir el contenido deslizando (swipe upward), y minimizarlo deslizando hacia abajo.
      </p>

      <h3>Código</h3>
      <div class="code-block">
        <pre><code>&lt;script setup&gt;
import { ref } from "vue";
import { DynamicBottomSheet } from "@coderoycc/bottom-sheet-wrappers";

const isOpen = ref(false);
&lt;/script&gt;

&lt;template&gt;
  &lt;DynamicBottomSheet 
    v-model="isOpen" 
    initial-size="half" 
    half="45dvh" 
    full="95dvh"
  &gt;
    &lt;p&gt;Desliza hacia arriba para redimensionar el contenido&lt;/p&gt;
  &lt;/DynamicBottomSheet&gt;
&lt;/template&gt;</code></pre>
      </div>
    </div>

    <div class="doc-section">
      <h2>💡 Ejemplo de Usos</h2>
      <div class="doc-card showcase">
        <div class="controls">
          <div class="form-group">
            <label>Tamaño Inicial</label>
            <select v-model="initialSize" class="form-control">
              <option value="collapsed">Collapsed</option>
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>
          <div class="form-group">
            <label>Mostrar Backdrop</label>
            <input type="checkbox" v-model="showBackdrop" />
          </div>
          <div class="form-group" style="text-align: center; margin-top: 1.5rem;">
            <button class="btn-primary" @click="isOpen = true">Abrir Bottom Sheet</button>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-section">
      <h2>API</h2>
      
      <!-- Props -->
      <ApiTable title="Props" :columns="propsColumns" :rows="propsData" />

      <!-- Events -->
      <ApiTable title="Eventos" :columns="eventsColumns" :rows="eventsData" />

      <!-- Slots -->
      <ApiTable title="Slots" :columns="slotsColumns" :rows="slotsData" />
    </div>

    <!-- El Modal DynamicBottomSheet -->
    <dynamic-bottom-sheet
      v-model="isOpen"
      :initial-size="initialSize"
      :show-backdrop="showBackdrop"
      title="Ejemplo Activo"
      close-on-backdrop
    >
      <template #header>
        <div class="custom-header">
          <h3>{{ sheetTitle }}</h3>
          <span class="badge">Nuevo</span>
        </div>
      </template>

      <div class="content-example">
        <p>Este es el contenido principal del Bottom Sheet.</p>
        <p>Puedes arrastrar el panel hacia arriba o abajo, o usar el contenido colapsado si lo configuras.</p>
        
        <div class="dummy-blocks">
          <div v-for="i in 10" :key="i" class="dummy-block">Item de ejemplo {{ i }}</div>
        </div>
      </div>
    </dynamic-bottom-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DynamicBottomSheet } from '@coderoycc/bottom-sheet-wrappers';
import ApiTable from '../components/ApiTable.vue';
import type { DynamicSize } from '@coderoycc/bottom-sheet-wrappers';

// Estado del ejemplo
const isOpen = ref(false);
const initialSize = ref<DynamicSize>('half');
const showBackdrop = ref(true);
const sheetTitle = ref('Mi Componente Dinámico');

// Datos para las tablas de API
const propsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'type', label: 'Tipo', isCode: true },
  { key: 'default', label: 'Por Defecto', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const propsData = [
  { name: 'modelValue (v-model)', type: 'boolean', default: 'false', desc: 'Controla la visibilidad del componente.' },
  { name: 'title', type: 'string', default: "''", desc: 'Título básico que se muestra en el header.' },
  { name: 'initialSize', type: 'DynamicSize', default: "'half'", desc: "Tamaño inicial al abrirse. Valores: 'collapsed', 'half', 'full'." },
  { name: 'half', type: 'string', default: "'45dvh'", desc: 'Alto del tamaño "half". Usa unidades CSS (px, %, dvh).' },
  { name: 'full', type: 'string', default: "'95dvh'", desc: 'Alto del tamaño "full". Usa unidades CSS.' },
  { name: 'showCloseButton', type: 'boolean', default: 'true', desc: 'Muestra u oculta el botón de cerrar por defecto.' },
  { name: 'showBackdrop', type: 'boolean', default: 'false', desc: 'Muestra un fondo oscuro detrás del panel.' },
  { name: 'closeOnBackdrop', type: 'boolean', default: 'false', desc: 'Permite cerrar el panel al hacer clic en el backdrop.' },
  { name: 'persistent', type: 'boolean', default: 'false', desc: 'Si es true, no se podrá cerrar ni arrastrando ni clickeando fuera.' },
  { name: 'zIndex', type: 'number', default: '1', desc: 'Base del z-index (se suma a 9000 internamente).' }
];

const eventsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'params', label: 'Parámetros', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const eventsData = [
  { name: 'update:modelValue', params: 'value: boolean', desc: 'Emitido cuando cambia el estado de visibilidad.' },
  { name: 'close', params: '-', desc: 'Emitido cuando se inicia el proceso de cerrado.' },
  { name: 'opened', params: '-', desc: 'Emitido cuando el panel termina la animación de apertura.' },
  { name: 'closed', params: '-', desc: 'Emitido cuando el panel termina la animación de cerrado.' },
  { name: 'size-change', params: 'size: DynamicSize', desc: 'Emitido cuando el panel cambia de tamaño (collapsed/half/full).' }
];

const slotsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const slotsData = [
  { name: 'default', desc: 'Contenido principal del bottom sheet.' },
  { name: 'header', desc: 'Reemplaza el contenido completo del header. Recibe el botón de cerrar y la barra de arrastre por defecto, pero el contenido del texto se reemplaza.' },
  { name: 'collapsed-content', desc: 'Contenido que solo se muestra cuando el estado es `collapsed`.' }
];

</script>

<style scoped>
.description {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 800px;
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

.form-group {
  margin-bottom: 1.25rem;
}

.form-group:last-child {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

/* Custom header for the modal */
.custom-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.custom-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.badge {
  background-color: #10b981;
  color: white;
  font-size: 0.75rem;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  font-weight: 600;
}

/* Content Example */
.content-example {
  padding: 1rem;
}

.dummy-blocks {
  margin-top: 1.5rem;
}

.dummy-block {
  background-color: #f1f5f9;
  border: 1px dashed #cbd5e1;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  text-align: center;
  color: #64748b;
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
