<template>
  <div class="doc-page">
    <div class="header-banner">
      <h1>Dynamic Bottom Sheet</h1>
      <p class="description">
        Un panel inferior dinámico que ajusta su tamaño interactuando para interfaces móviles o web modernas.
      </p>
    </div>

    <!-- ===== SECCIÓN DE USO ===== -->
    <div class="doc-section">
      <h2>Uso en el Proyecto</h2>

      <h3>Instalación e Importación</h3>
      <CodeHighlight code='import { DynamicBottomSheet } from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/dist/bottom-sheet-wrappers.css";' language="javascript" />
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
        Adicionalmente, <code>close-on-backdrop</code> permite cerrarlo al tocar fuera.</p>
      <DocExample :codeString="backdropExampleCode">
        <template #result>
          <BackdropExample />
        </template>
      </DocExample>

      <h3>Customización de Bordes y Colores (Local)</h3>
      <p>Puedes sobreescribir las variables CSS pasándole una clase a componente. Las variables afectarán localmente a
        este
        sheet. Nota el uso de color de fondo rosado y bordes totalmente cuadrados.</p>
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

      <h3>Slots Complejos (Header y Collapsed)</h3>
      <p>Muestra una vista interactiva que permite iniciar el panel minimizado pero expandirlo revelando contenido
        oculto.</p>
      <DocExample :codeString="complexSlotsExampleCode">
        <template #result>
          <ComplexSlotsExample />
        </template>
      </DocExample>

      <!-- <h3>Tematización y Customización Global (Recomendado)</h3>
      <p>Dado que los Bottom Sheets se montan mediante <code>Teleport</code> al final del cuerpo de la app, inyectar clases de sistema global de temas a nivel de <code>&lt;body&gt;</code> es la manera más robusta de crear múltiples variaciones (redondeados, dark-mode general, combinaciones soft) escalables en tu aplicación completa.</p>
      <DocExample :codeString="themeExampleCodeRaw">
        <template #result>
          <ThemeCustomizationExample style="width: 100%;" />
        </template>
      </DocExample> -->

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

// ===== IMPORTACIÓN DE COMPONENTES DE EJEMPLO AISLADOS =====
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

import ThemeCustomizationExample from '../examples/ThemeCustomizationExample.vue';
import themeExampleCodeRaw from '../examples/ThemeCustomizationExample.vue?raw';

import ZIndexExample from '../examples/ZIndexExample.vue';
import zIndexExampleCode from '../examples/ZIndexExample.vue?raw';


// ======================== API TABLES DATA ========================
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
  { name: 'closeOnBackdrop', type: 'boolean', default: 'false', desc: 'Click en parte sobrante fuera de modal para cerrar.' },
  { name: 'persistent', type: 'boolean', default: 'false', desc: 'Bloquea forzadamente el cierre interactivo al entorno.' },
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
  { name: 'size-change', params: 'size: DynamicSize', desc: 'Avisa cambios internos en variables colapsables visuales.' }
];

const slotsColumns = [
  { key: 'name', label: 'Nombre', isCode: true },
  { key: 'desc', label: 'Descripción' }
];

const slotsData = [
  { name: 'default', desc: 'Pinta el cuerpo completo sin control del header.' },
  { name: 'header', desc: 'Toma el control entero del título del header limitando componentes.' },
  { name: 'collapsed-content', desc: 'Burbuja de contenido flotante en vista mini tamaño `collapsed`.' }
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
</style>
