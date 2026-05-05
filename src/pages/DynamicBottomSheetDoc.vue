<template>
  <div class="doc-page">
    <div class="header-banner">
      <h1>{{ $t('dynamic_docs.header.title') }}</h1>
      <p class="description">
        {{ $t('dynamic_docs.header.description') }}
      </p>
    </div>

    <div class="doc-section">
      <h2>{{ $t('dynamic_docs.sections.usage') }}</h2>

      <h3>{{ $t('dynamic_docs.sections.installation') }}</h3>
      <CodeHighlight code='import { BsDynamic } from "@coderoycc/bottom-sheet-wrappers";
// optional
import "@coderoycc/bottom-sheet-wrappers/style.css";' language="javascript" />
    </div>
    <div class="info-callout">
      <span class="callout-icon">📌</span>
      <div>
        <strong>{{ $t('dynamic_docs.callout.key_diff') }} </strong>
        <i18n-t keypath="dynamic_docs.callout.desc" tag="span">
          <template #collapsed><code>collapsed</code></template>
          <template #half><code>half</code></template>
          <template #full><code>full</code></template>
        </i18n-t>
      </div>
    </div>

    <div class="doc-section">
      <h2>{{ $t('dynamic_docs.sections.props') }}</h2>
      <ApiTable :title="$t('dynamic_docs.table.title.props')" :columns="propsColumns" :rows="propsData" />
      <ApiTable :title="$t('dynamic_docs.table.title.events')" :columns="eventsColumns" :rows="eventsData" />
      <ApiTable :title="$t('dynamic_docs.table.title.slots')" :columns="slotsColumns" :rows="slotsData" />
    </div>

    <div class="doc-section">
      <h2>{{ $t('dynamic_docs.sections.examples') }}</h2>

      <h3>{{ $t('dynamic_docs.examples.simple.title') }}</h3>
      <p>{{ $t('dynamic_docs.examples.simple.description') }}</p>
      <DocExample :codeString="simpleExampleCode">
        <template #result>
          <SimpleExample />
        </template>
      </DocExample>

      <h3>{{ $t('dynamic_docs.examples.backdrop.title') }}</h3>
      <i18n-t keypath="dynamic_docs.examples.backdrop.description" tag="p">
        <template #prop><code>show-backdrop</code></template>
      </i18n-t>
      <DocExample :codeString="backdropExampleCode">
        <template #result>
          <BackdropExample />
        </template>
      </DocExample>

      <h3>{{ $t('dynamic_docs.examples.slots.title') }}</h3>
      <i18n-t keypath="dynamic_docs.examples.slots.desc1" tag="p">
        <template #state_collapsed><code>collapsed</code></template>
        <template #collapsed><code>collapsed-content</code></template>
      </i18n-t>
      <i18n-t keypath="dynamic_docs.examples.slots.desc2" tag="p">
        <template #header><code>header</code></template>
      </i18n-t>
      <DocExample :codeString="complexSlotsExampleCode">
        <template #result>
          <ComplexSlotsExample />
        </template>
      </DocExample>

      <div class="separator" />


      <h3>{{ $t('dynamic_docs.examples.dark_mode.title') }}</h3>
      <p>{{ $t('dynamic_docs.examples.dark_mode.description') }}</p>
      <DocExample :codeString="darkModeExampleCode">
        <template #result>
          <DarkModeExample />
        </template>
      </DocExample>

      <h3>{{ $t('dynamic_docs.examples.custom_handle.title') }}</h3>
      <p>{{ $t('dynamic_docs.examples.custom_handle.description') }}</p>
      <i18n-t keypath="dynamic_docs.examples.custom_handle.note" tag="p">
        <template #scoped><code>scoped</code></template>
      </i18n-t>
      <DocExample :codeString="customHandleExampleCode">
        <template #result>
          <CustomHandleExample />
        </template>
      </DocExample>

      <h3>{{ $t('dynamic_docs.examples.zindex.title') }}</h3>
      <i18n-t keypath="dynamic_docs.examples.zindex.description" tag="p">
        <template #zIndex><code>zIndex</code></template>
        <template #base><code>9000 + zIndex</code></template>
      </i18n-t>
      <DocExample :codeString="zIndexExampleCode">
        <template #result>
          <ZIndexExample />
        </template>
      </DocExample>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import ApiTable from '../components/ApiTable.vue';
import DocExample from '../components/DocExample.vue';
import CodeHighlight from '../components/CodeHighlight.vue';

import SimpleExample from '../examples/SimpleExample.vue';
import simpleExampleCode from '../examples/SimpleExample.vue?raw';

import BackdropExample from '../examples/BackdropExample.vue';
import backdropExampleCode from '../examples/BackdropExample.vue?raw';



import DarkModeExample from '../examples/DarkModeExample.vue';
import darkModeExampleCode from '../examples/DarkModeExample.vue?raw';

import ComplexSlotsExample from '../examples/ComplexSlotsExample.vue';
import complexSlotsExampleCode from '../examples/ComplexSlotsExample.vue?raw';


import ZIndexExample from '../examples/ZIndexExample.vue';
import zIndexExampleCode from '../examples/ZIndexExample.vue?raw';

import CustomHandleExample from '../examples/CustomHandleExample.vue';
import customHandleExampleCode from '../examples/CustomHandleExample.vue?raw';

const { t } = useI18n();

const propsColumns = computed(() => [
  { key: 'name', label: t('simple_docs.table.columns.name'), isCode: true },
  { key: 'type', label: t('simple_docs.table.columns.type'), isCode: true },
  { key: 'default', label: t('simple_docs.table.columns.default'), isCode: true },
  { key: 'desc', label: t('simple_docs.table.columns.desc') }
]);

const propsData = computed(() => [
  { name: 'modelValue (v-model)', type: 'boolean', default: 'false', desc: t('dynamic_docs.table.props.model') },
  { name: 'title', type: 'string', default: "''", desc: t('dynamic_docs.table.props.title') },
  { name: 'initialSize', type: 'DynamicSize', default: "'half'", desc: t('dynamic_docs.table.props.initialSize') },
  { name: 'half', type: 'string', default: "'45dvh'", desc: t('dynamic_docs.table.props.half') },
  { name: 'full', type: 'string', default: "'95dvh'", desc: t('dynamic_docs.table.props.full') },
  { name: 'showCloseButton', type: 'boolean', default: 'true', desc: t('dynamic_docs.table.props.showCloseButton') },
  { name: 'showBackdrop', type: 'boolean', default: 'false', desc: t('dynamic_docs.table.props.showBackdrop') },
  { name: 'hideDragHandle', type: 'boolean', default: 'false', desc: t('dynamic_docs.table.props.hideDragHandle') },
  { name: 'zIndex', type: 'number', default: '1', desc: t('dynamic_docs.table.props.zIndex') }
]);

const eventsColumns = computed(() => [
  { key: 'name', label: t('simple_docs.table.columns.name'), isCode: true },
  { key: 'params', label: t('simple_docs.table.columns.params'), isCode: true },
  { key: 'desc', label: t('simple_docs.table.columns.desc') }
]);

const eventsData = computed(() => [
  { name: 'update:modelValue', params: 'value: boolean', desc: t('dynamic_docs.table.events.model') },
  { name: 'close', params: '-', desc: t('dynamic_docs.table.events.close') },
  { name: 'opened', params: '-', desc: t('dynamic_docs.table.events.opened') },
  { name: 'closed', params: '-', desc: t('dynamic_docs.table.events.closed') },
  { name: 'size-change', params: 'size: DynamicSize', desc: t('dynamic_docs.table.events.size_change') }
]);

const slotsColumns = computed(() => [
  { key: 'name', label: t('simple_docs.table.columns.name'), isCode: true },
  { key: 'desc', label: t('simple_docs.table.columns.desc') }
]);

const slotsData = computed(() => [
  { name: 'default', desc: t('dynamic_docs.table.slots.default') },
  { name: 'header', desc: t('dynamic_docs.table.slots.header') },
  { name: 'collapsed-content', desc: t('dynamic_docs.table.slots.collapsed_content') }
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
