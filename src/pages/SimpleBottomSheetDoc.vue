<template>
  <div class="doc-page">
    <div class="header-banner">
      <h1>{{ $t('simple_docs.header.title') }}</h1>
      <p class="description">
        {{ $t('simple_docs.header.description') }}
      </p>
    </div>

    <div class="doc-section">
      <h2>{{ $t('simple_docs.sections.usage') }}</h2>

      <h3>Instalación e Importación</h3>
      <CodeHighlight code='import { SimpleBottomSheet } from "@coderoycc/bottom-sheet-wrappers";
import "@coderoycc/bottom-sheet-wrappers/dist/style.css";' language="javascript" />


    </div>

    <div class="doc-section">
      <h2>{{ $t('simple_docs.sections.props') }}</h2>
      <ApiTable :title="$t('simple_docs.table.columns.prop')" :columns="propsColumns" :rows="propsData" />
    </div>

    <div class="doc-section">
      <h2>{{ $t('simple_docs.sections.events') }}</h2>
      <ApiTable :title="$t('simple_docs.table.columns.name')" :columns="eventsColumns" :rows="eventsData" />
    </div>

    <div class="doc-section">
      <h2>{{ $t('simple_docs.sections.slots') }}</h2>
      <ApiTable :title="$t('simple_docs.table.columns.name')" :columns="slotsColumns" :rows="slotsData" />
    </div>

    <!-- ===== SECCIÓN DE EJEMPLOS ===== -->
    <div class="doc-section">
      <h2>{{ $t('simple_docs.sections.examples') }}</h2>

      <h3>{{ $t('simple_docs.examples.basic.title') }}</h3>
      <p>{{ $t('simple_docs.examples.basic.description') }}</p>
      <DocExample :codeString="simpleExampleCode">
        <template #result>
          <SimpleSimpleExample />
        </template>
      </DocExample>

      <h3>{{ $t('simple_docs.examples.height.title') }}</h3>
      <i18n-t keypath="simple_docs.examples.height.description" tag="p">
        <template #height>
          <code>height</code>
        </template>
        <template #backdrop>
          <code>show-backdrop</code>
        </template>
        <template #closeOnBackdrop>
          <code>close-on-backdrop</code>
        </template>
      </i18n-t>
      <DocExample :codeString="heightExampleCode">
        <template #result>
          <SimpleHeightExample />
        </template>
      </DocExample>

      <h3>{{ $t('simple_docs.examples.custom.title') }}</h3>
      <p>{{ $t('simple_docs.examples.custom.description') }}</p>
      <i18n-t keypath="simple_docs.examples.custom.dark_mode" tag="p" style="margin-left: 0.4rem">
        <template #dark_mode>
          <i>{{ $t('dark_mode') }}</i>
        </template>
      </i18n-t>
      <DocExample :codeString="customBorderExampleCode">
        <template #result>
          <SimpleCustomBorderExample />
        </template>
      </DocExample>

      <h3>{{ $t('simple_docs.examples.persistent.title') }}</h3>
      <i18n-t keypath="simple_docs.examples.persistent.description" tag="p">
        <template #vmodel>
          <code>v-model</code>
        </template>
      </i18n-t>
      <DocExample :codeString="simplePersistentExampleCode">
        <template #result>
          <SimplePersistentExample />
        </template>
      </DocExample>

      <h3>{{ $t('simple_docs.examples.header.title') }}</h3>
      <p>{{ $t('simple_docs.examples.header.description') }}</p>
      <DocExample :codeString="customHeaderExampleCode">
        <template #result>
          <SimpleCustomHeaderExample />
        </template>
      </DocExample>

      <h3>{{ $t('simple_docs.examples.zindex.title') }}</h3>
      <i18n-t keypath="simple_docs.examples.zindex.description" tag="p">
        <template #zIndex>
          <code>zIndex</code>
        </template>
        <template #base>
          <code>9000 + zIndex</code>
        </template>
      </i18n-t>
      <DocExample :codeString="zIndexExampleCode">
        <template #result>
          <SimpleZIndexExample />
        </template>
      </DocExample>
    </div>

  </div>
</template>

<script setup lang="ts">
import ApiTable from '../components/ApiTable.vue';
import DocExample from '../components/DocExample.vue';
import CodeHighlight from '../components/CodeHighlight.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

import SimpleSimpleExample from '../examples/simple/SimpleExample.vue';
import simpleExampleCode from '../examples/simple/SimpleExample.vue?raw';

import SimpleHeightExample from '../examples/simple/SimpleHeightExample.vue';
import heightExampleCode from '../examples/simple/SimpleHeightExample.vue?raw';

import SimpleCustomBorderExample from '../examples/simple/SimpleCustomBorderExample.vue';
import customBorderExampleCode from '../examples/simple/SimpleCustomBorderExample.vue?raw';

import SimplePersistentExample from '../examples/simple/SimplePersistentExample.vue';
import simplePersistentExampleCode from '../examples/simple/SimplePersistentExample.vue?raw';

import SimpleCustomHeaderExample from '../examples/simple/SimpleCustomHeaderExample.vue';
import customHeaderExampleCode from '../examples/simple/SimpleCustomHeaderExample.vue?raw';

import SimpleZIndexExample from '../examples/simple/SimpleZIndexExample.vue';
import zIndexExampleCode from '../examples/simple/SimpleZIndexExample.vue?raw';


const propsColumns = computed(() => [
  { key: 'name', label: t('simple_docs.table.columns.name'), isCode: true },
  { key: 'type', label: t('simple_docs.table.columns.type'), isCode: true },
  { key: 'default', label: t('simple_docs.table.columns.default'), isCode: true },
  { key: 'desc', label: t('simple_docs.table.columns.desc') }
]);

const propsData = computed(() => [
  { name: 'modelValue (v-model)', type: 'boolean', default: 'false', desc: t('simple_docs.table.props.model') },
  { name: 'title', type: 'string', default: "''", desc: t('simple_docs.table.props.title') },
  { name: 'height', type: 'string | number', default: 'undefined', desc: t('simple_docs.table.props.height') },
  { name: 'showBackdrop', type: 'boolean', default: 'false', desc: t('simple_docs.table.props.backdrop') },
  { name: 'zIndex', type: 'number', default: '0', desc: t('simple_docs.table.props.zindex') },
  { name: 'props', type: 'Record<string, any>', default: '{}', desc: t('simple_docs.table.props.props_obj') }
]);

const eventsColumns = computed(() => [
  { key: 'name', label: t('simple_docs.table.columns.name'), isCode: true },
  { key: 'params', label: t('simple_docs.table.columns.params'), isCode: true },
  { key: 'desc', label: t('simple_docs.table.columns.desc') }
]);

const eventsData = computed(() => [
  { name: 'update:modelValue', params: 'value: boolean', desc: t('simple_docs.table.events.model') },
  { name: 'opened', params: '-', desc: t('simple_docs.table.events.opened') },
  { name: 'closed', params: '-', desc: t('simple_docs.table.events.closed') },
  { name: 'before-close', params: '-', desc: t('simple_docs.table.events.before_close') }
]);

const slotsColumns = computed(() => [
  { key: 'name', label: t('simple_docs.table.columns.name'), isCode: true },
  { key: 'desc', label: t('simple_docs.table.columns.desc') }
]);

const slotsData = computed(() => [
  { name: 'default', desc: t('simple_docs.table.slots.default') },
  { name: 'header', desc: t('simple_docs.table.slots.header') }
]);
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
