<template>
  <div class="doc-page">
    <div class="header-banner">
      <h1>Fixed Bottom Sheet</h1>
      <p class="description">
        Un panel inferior que permanece <strong>fijo</strong> en pantalla, adaptándose al tamaño del contenido o a una altura definida. No puede ser redimensionado por el usuario mediante scroll: su tamaño es estático y predecible.
      </p>
    </div>

    <!-- ===== SECCIÓN DE USO ===== -->
    <div class="doc-section">
      <h2>Uso en el Proyecto</h2>

      <h3>Instalación e Importación</h3>
      <CodeHighlight
        code='import { FixedBottomSheet } from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/dist/bottom-sheet-wrappers.css";'
        language="javascript"
      />

      <div class="info-callout">
        <span class="callout-icon">📌</span>
        <div>
          <strong>Diferencia clave con el modo Dynamic:</strong> el panel Fixed <em>no se puede redimensionar ni cerrar mediante gestos o swipe</em>. Su tamaño es determinado por el prop <code>height</code> o se ajusta automáticamente al contenido, pero permanece fijo. Para cerrarlo, <strong>es obligatorio incluir un botón de acción explícito</strong> dentro del contenido del panel que setee el <code>v-model</code> a <code>false</code>.
        </div>
      </div>
    </div>

    <!-- ===== SECCIÓN DE API ===== -->
    <div class="doc-section">
      <h2>API de Propiedades</h2>
      <ApiTable title="Props" :columns="propsColumns" :rows="propsData" />
      <ApiTable title="Eventos" :columns="eventsColumns" :rows="eventsData" />
      <ApiTable title="Slots" :columns="slotsColumns" :rows="slotsData" />
    </div>

    <!-- ===== SECCIÓN DE EJEMPLOS ===== -->
    <div class="doc-section">
      <h2>Módulos y Ejemplos de Uso</h2>

      <h3>Uso Simple (Auto-Ajuste al Contenido)</h3>
      <p>Cuando no se pasa el prop <code>height</code>, el panel se ajusta automáticamente a la altura natural del contenido interno. Es perfecto para modales con información resumida o snackbars de acción.</p>
      <DocExample :codeString="simpleExampleCode">
        <template #result>
          <FixedSimpleExample />
        </template>
      </DocExample>

      <h3>Con Altura Fija y Backdrop</h3>
      <p>Usando el prop <code>height</code> se establece una altura estricta. Aunque el contenido sea más pequeño o grande, el panel respetará ese límite. Habilitar <code>show-backdrop</code> añade la capa oscura de fondo.</p>
      <DocExample :codeString="heightExampleCode">
        <template #result>
          <FixedHeightExample />
        </template>
      </DocExample>

      <h3>Customización de Bordes y Colores (Local)</h3>
      <p>Al igual que el modo Dynamic, puedes sobreescribir las variables CSS pasando una clase al componente. Las variables afectarán localmente a este panel sin tocar otros. Nota el fondo morado y esquinas cuadradas.</p>
      <DocExample :codeString="customBorderExampleCode">
        <template #result>
          <FixedCustomBorderExample />
        </template>
      </DocExample>

      <h3>Uso en Modo Oscuro Integrado</h3>
      <p>Inyectando variables CSS oscuras directamente al componente mediante una clase global (sin <code>scoped</code>), el panel toma el tema oscuro localmente. El resto de la app no se ve afectado.</p>
      <DocExample :codeString="darkModeExampleCode">
        <template #result>
          <FixedDarkModeExample />
        </template>
      </DocExample>

      <h3>Slot Header Personalizado</h3>
      <p>El slot <code>header</code> reemplaza completamente la zona de encabezado nativa. Úsalo para agregar acciones contextuales, badges, iconos o cualquier layout que necesite tu interfaz.</p>
      <DocExample :codeString="customHeaderExampleCode">
        <template #result>
          <FixedCustomHeaderExample />
        </template>
      </DocExample>

      <h3>Tematización y Customización Global (Recomendado)</h3>
      <p>Como los paneles se montan mediante <code>Teleport</code> al final del cuerpo de la app, inyectar clases de tema a nivel de <code>&lt;body&gt;</code> es la manera más robusta de crear múltiples variaciones escalables para toda la aplicación.</p>
      <DocExample :codeString="themeExampleCode">
        <template #result>
          <!-- Se envuelve con style width 100% para que ocupe todo el panel -->
          <FixedThemeExample style="width: 100%;" />
        </template>
      </DocExample>

      <h3>Apilamiento con zIndex</h3>
      <p>El prop <code>zIndex</code> controla el orden de apilamiento cuando varios paneles Fixed están abiertos simultáneamente. El valor efectivo es <code>9000 + zIndex</code>. Cada panel puede abrirse desde dentro de otro, y el de mayor <code>zIndex</code> siempre quedará al frente. Dado que el modo Fixed no se puede redimensionar, este patrón es ideal para asistentes paso a paso o confirmaciones modales en cascada.</p>
      <DocExample :codeString="zIndexExampleCode">
        <template #result>
          <FixedZIndexExample />
        </template>
      </DocExample>
    </div>

  </div>
</template>

<script setup lang="ts">
import ApiTable from '../components/ApiTable.vue';
import DocExample from '../components/DocExample.vue';
import CodeHighlight from '../components/CodeHighlight.vue';

// ===== IMPORTACIÓN DE COMPONENTES DE EJEMPLO AISLADOS =====
import FixedSimpleExample from '../examples/fixed/FixedSimpleExample.vue';
import simpleExampleCode from '../examples/fixed/FixedSimpleExample.vue?raw';

import FixedHeightExample from '../examples/fixed/FixedHeightExample.vue';
import heightExampleCode from '../examples/fixed/FixedHeightExample.vue?raw';

import FixedCustomBorderExample from '../examples/fixed/FixedCustomBorderExample.vue';
import customBorderExampleCode from '../examples/fixed/FixedCustomBorderExample.vue?raw';

import FixedDarkModeExample from '../examples/fixed/FixedDarkModeExample.vue';
import darkModeExampleCode from '../examples/fixed/FixedDarkModeExample.vue?raw';

import FixedCustomHeaderExample from '../examples/fixed/FixedCustomHeaderExample.vue';
import customHeaderExampleCode from '../examples/fixed/FixedCustomHeaderExample.vue?raw';

import FixedThemeExample from '../examples/fixed/FixedThemeExample.vue';
import themeExampleCode from '../examples/fixed/FixedThemeExample.vue?raw';

import FixedZIndexExample from '../examples/fixed/FixedZIndexExample.vue';
import zIndexExampleCode from '../examples/fixed/FixedZIndexExample.vue?raw';


// ======================== API TABLES DATA ========================
const propsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'type', label: 'Tipo', isCode: true },
  { key: 'default', label: 'Por Defecto', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const propsData = [
  { name: 'modelValue (v-model)', type: 'boolean', default: 'false', desc: 'Controla la visibilidad del panel fijo.' },
  { name: 'title', type: 'string', default: "''", desc: 'Título básico que se imprime en el header nativo.' },
  { name: 'height', type: 'string | number', default: 'undefined', desc: 'Altura forzada del panel. Si se omite, el panel se ajusta automáticamente a la altura del contenido.' },
  { name: 'showBackdrop', type: 'boolean', default: 'false', desc: 'Muestra un overlay oscuro semitransparente detrás del panel.' },
  { name: 'zIndex', type: 'number', default: '0', desc: 'Índice de elevación (se suma a 9000 como base).' },
  { name: 'props', type: 'Record<string, any>', default: '{}', desc: 'Objeto adicional para vincular payloads extra al componente si es necesario.' }
];

const eventsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'params', label: 'Parámetros', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const eventsData = [
  { name: 'update:modelValue', params: 'value: boolean', desc: 'Sincronización bidireccional del estado de visibilidad.' },
  { name: 'opened', params: '-', desc: 'Se dispara cuando el panel ha terminado de aparecer en pantalla.' },
  { name: 'closed', params: '-', desc: 'Se dispara cuando el panel ha terminado de ocultarse y es removido del DOM.' },
  { name: 'before-close', params: '-', desc: 'Se emite justo antes de iniciar la animación de cierre.' }
];

const slotsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const slotsData = [
  { name: 'default', desc: 'Pinta el cuerpo completo del panel sin control del header.' },
  { name: 'header', desc: 'Reemplaza completamente el área del encabezado nativo, permitiendo layouts completamente personalizados.' }
];
</script>

<style scoped>
.header-banner {
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1.5rem;
}
h1 {
  font-size: 2.2rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
}
h2 {
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}
h3 {
  font-size: 1.25rem;
  color: #334155;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.description {
  font-size: 1.1rem;
  color: #64748b;
}

.info-callout {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-left: 4px solid #0ea5e9;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin-top: 1.25rem;
  font-size: 0.95rem;
  color: #0c4a6e;
  line-height: 1.6;
}
.callout-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 1px;
}
.info-callout code {
  background: #e0f2fe;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #0369a1;
}
</style>
