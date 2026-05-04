<template>
  <div class="doc-page">
    <div class="header-banner">
      <h1>Dynamic Bottom Sheet</h1>
      <p class="description">
        Un panel inferior dinámico que ajusta su tamaño interactuando para interfaces móviles o web modernas.
      </p>
    </div>

    <div class="doc-section">
      <h2>Uso en el Proyecto</h2>

      <h3>Instalación e Importación</h3>
      <CodeHighlight code='import { BsDynamic } from "@coderoycc/bottom-sheet-wrappers";
// optional
import "@coderoycc/bottom-sheet-wrappers/style.css";' language="javascript" />
    </div>
    <div class="info-callout">
      <span class="callout-icon">📌</span>
      <div>
        <strong>Diferencia clave con el modo simple:</strong> este panel puede redimensionarse en tres diferentes
        estados. <code>collapsed</code>, <code>half</code> y <code>full</code>.
        Muy útil para acciones dinámicas que requieren una interacción sin perder el contexto de la página.
      </div>
    </div>

    <div class="doc-section">
      <h2>API de Propiedades</h2>
      <ApiTable title="Props" :columns="propsColumns" :rows="propsData" />
      <ApiTable title="Eventos" :columns="eventsColumns" :rows="eventsData" />
      <ApiTable title="Slots" :columns="slotsColumns" :rows="slotsData" />
    </div>

    <div class="doc-section">
      <h2>Módulos y Ejemplos de Uso</h2>

      <h3>Uso Simple</h3>
      <p>Un bottom sheet básico con solo el contenido y el comportamiento de cerrado predeterminado. Utiliza la altura
        configurada.</p>
      <DocExample :codeString="simpleExampleCode">
        <template #result>
          <SimpleExample />
        </template>
      </DocExample>

      <h3>Uso con Backdrop</h3>
      <p>Habilita la aparición de una capa oscura en el fondo agregando la propiedad <code>show-backdrop</code>.
        Adicionalmente, cuando se hace click en el backdrop se colapsa el contendor.</p>
      <DocExample :codeString="backdropExampleCode">
        <template #result>
          <BackdropExample />
        </template>
      </DocExample>

      <h3>Slots (Header y Collapsed)</h3>
      <p>El slot <code>collapsed-content</code> muestra el contenido personalizado cuando el contenedor se encuentra en
        estado <code>collapsed</code>.</p>
      <p>El slot <code>header</code> muestra el contenido personalizado en el header del contenedor.</p>
      <DocExample :codeString="complexSlotsExampleCode">
        <template #result>
          <ComplexSlotsExample />
        </template>
      </DocExample>

      <div class="separator" />

      <h3>Customización de Bordes y Colores (Local)</h3>
      <p>Puedes sobreescribir las variables CSS pasándole una clase a componente. Las variables afectarán localmente a
        este
        sheet. Nota el uso de color de <b>fondo rosado</b> y <b>bordes cuadrados</b>.</p>
      <DocExample :codeString="customBorderExampleCode">
        <template #result>
          <CustomBorderExample />
        </template>
      </DocExample>

      <h3>Uso en Modo Oscuro Integrado</h3>
      <p>Inyectando variables para aplicar el respectivo tema oscuro local directamente a un bottom sheet.</p>
      <DocExample :codeString="darkModeExampleCode">
        <template #result>
          <DarkModeExample />
        </template>
      </DocExample>

      <h3>Customización de Handle</h3>
      <p>Puedes sobreescribir las variables CSS pasándole una clase a componente. Las variables afectarán localmente a
        este
        sheet.
      </p>
      <p><i>Nota: Mejor si los estilos se aplican globalmente o en un componente sin usar <code>scoped</code>.</i></p>
      <DocExample :codeString="customHandleExampleCode">
        <template #result>
          <CustomHandleExample />
        </template>
      </DocExample>

      <h3>Apilamiento con zIndex</h3>
      <p>El prop <code>zIndex</code> permite manejar el orden visual cuando varios panels están abiertos al mismo
        tiempo. El
        valor final efectivo es <code>9000 + zIndex</code>, lo que asegura que los sheets siempre estén por encima del
        contenido normal de la app. Asigna valores crecientes para definir cuál panel queda al frente.</p>
      <DocExample :codeString="zIndexExampleCode">
        <template #result>
          <ZIndexExample />
        </template>
      </DocExample>
    </div>

  </div>
</template>

<script setup lang="ts">
import ApiTable from '../components/ApiTable.vue';
import DocExample from '../components/DocExample.vue';
import CodeHighlight from '../components/CodeHighlight.vue';

import SimpleExample from '../examples/SimpleExample.vue';
import simpleExampleCode from '../examples/SimpleExample.vue?raw';

import BackdropExample from '../examples/BackdropExample.vue';
import backdropExampleCode from '../examples/BackdropExample.vue?raw';

import CustomBorderExample from '../examples/CustomBorderExample.vue';
import customBorderExampleCode from '../examples/CustomBorderExample.vue?raw';

import DarkModeExample from '../examples/DarkModeExample.vue';
import darkModeExampleCode from '../examples/DarkModeExample.vue?raw';

import ComplexSlotsExample from '../examples/ComplexSlotsExample.vue';
import complexSlotsExampleCode from '../examples/ComplexSlotsExample.vue?raw';


import ZIndexExample from '../examples/ZIndexExample.vue';
import zIndexExampleCode from '../examples/ZIndexExample.vue?raw';

import CustomHandleExample from '../examples/CustomHandleExample.vue';
import customHandleExampleCode from '../examples/CustomHandleExample.vue?raw';

const propsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'type', label: 'Tipo', isCode: true },
  { key: 'default', label: 'Por Defecto', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const propsData = [
  { name: 'modelValue (v-model)', type: 'boolean', default: 'false', desc: 'Controla la visibilidad del modal dinámico.' },
  { name: 'title', type: 'string', default: "''", desc: 'Título básico que se imprime en el header nativo.' },
  { name: 'initialSize', type: 'DynamicSize', default: "'half'", desc: "Tamaño inicial a mostrar: 'collapsed', 'half', 'full'." },
  { name: 'half', type: 'string', default: "'45dvh'", desc: 'Dimensión en alto para el estado "half".' },
  { name: 'full', type: 'string', default: "'95dvh'", desc: 'Dimensión en alto para el estado máximo "full".' },
  { name: 'showCloseButton', type: 'boolean', default: 'true', desc: 'Mostrar u ocultar botón con cruz de cierre.' },
  { name: 'showBackdrop', type: 'boolean', default: 'false', desc: 'Saca y muestra un overlay oscuro semitransparente.' },
  { name: 'hideDragHandle', type: 'boolean', default: 'false', desc: 'Oculta el handle de arrastre.' },
  { name: 'zIndex', type: 'number', default: '1', desc: 'Índice de elevación (es baseada sobre suma a 9000).' }
];

const eventsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'params', label: 'Parámetros', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const eventsData = [
  { name: 'update:modelValue', params: 'value: boolean', desc: 'Cambia estado de componente y sync bidireccional.' },
  { name: 'close', params: '-', desc: 'Se gatilla al inicio del pedido de cerrado.' },
  { name: 'opened', params: '-', desc: 'Se dispara cuando acaba la animación visual de entrada CSS.' },
  { name: 'closed', params: '-', desc: 'Se dispara cuando acaba la animación visual de retirada CSS.' },
  { name: 'size-change', params: 'size: DynamicSize', desc: 'Avisa cuando se ha terminado de cambiar el tamaño. Los valores que se emiten son de DynamicSize: "collapsed" | "half" | "full".' }
];

const slotsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const slotsData = [
  { name: 'default', desc: 'Slot para el contenido del bottomsheet.' },
  { name: 'header', desc: 'Slot para el header del bottomsheet. Si se usa este slot, se pierde el header por defecto.' },
  { name: 'collapsed-content', desc: 'Slot para el contenido del bottomsheet en estado "collapsed".' }
];

</script>

<style scoped>
.header-banner {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color, #e2e8f0);
  padding-bottom: 1.5rem;
}

h1 {
  font-size: 2.2rem;
  color: var(--heading-h1, #0f172a);
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--heading-h2, #1e293b);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--heading-border, #e2e8f0);
}

h3 {
  font-size: 1.25rem;
  color: var(--heading-h3, #334155);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.description {
  font-size: 1.1rem;
  color: var(--heading-description, #64748b);
}

.separator {
  margin: 2rem 0;
  border-bottom: 1px solid var(--border-color, #e2e8f0);
}

.info-callout {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  background: var(--callout-bg, #f0f9ff);
  border: 1px solid var(--callout-border, #bae6fd);
  border-left: 4px solid var(--callout-border-left, #0ea5e9);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  color: var(--callout-color, #0c4a6e);
  line-height: 1.6;
}

.callout-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 1px;
}

.info-callout code {
  background: var(--callout-code-bg, #e0f2fe);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: var(--callout-code-color, #0369a1);
}
</style>
