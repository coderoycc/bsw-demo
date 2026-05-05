<script setup lang="ts">
import { ref } from 'vue';
import { BsDynamic } from '@coderoycc/bottom-sheet-wrappers';

const openSheet1 = ref(false);
const openSheet2 = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="openSheet1 = true">{{ $t('zindex_example.btn_base') }}</button>

    <bs-dynamic v-model="openSheet1" :title="$t('zindex_example.title_base')" initial-size="half" show-backdrop :z-index="1">
      <div class="sheet-content">
        <i18n-t keypath="zindex_example.desc1_base" tag="p">
          <template #code><code>:z-index="1"</code></template>
        </i18n-t>
        <i18n-t keypath="zindex_example.desc2_base" tag="p">
          <template #code><code>Teleport → body</code></template>
          <template #zIndex><code>zIndex</code></template>
        </i18n-t>
        <button class="btn-secondary" @click="openSheet2 = true">
          {{ $t('zindex_example.btn_top') }}
        </button>
      </div>
    </bs-dynamic>

    <bs-dynamic v-model="openSheet2" :title="$t('zindex_example.title_top')" initial-size="half" show-backdrop
      :z-index="2">
      <div class="sheet-content sheet-content--top">
        <i18n-t keypath="zindex_example.desc1_top" tag="p">
          <template #code><code>:z-index="2"</code></template>
        </i18n-t>
        <i18n-t keypath="zindex_example.desc2_top" tag="p">
          <template #zIndex><code>zIndex</code></template>
        </i18n-t>
        <div class="stack-viz">
          <div class="stack-layer stack-layer--2">{{ $t('zindex_example.stack_2') }}</div>
          <div class="stack-layer stack-layer--1">{{ $t('zindex_example.stack_1') }}</div>
          <div class="stack-layer stack-layer--0">{{ $t('zindex_example.stack_0') }}</div>
        </div>
      </div>
    </bs-dynamic>
  </div>
</template>

<style scoped>
.btn-primary {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s;
}

.btn-primary:hover {
  filter: brightness(0.9);
}

.btn-secondary {
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 0.55rem 1.1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.75rem;
  transition: filter 0.2s;
}

.btn-secondary:hover {
  filter: brightness(0.9);
}

.sheet-content {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sheet-content code {
  background: #eff6ff;
  color: #1d4ed8;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.sheet-content--top code {
  background: #eef2ff;
  color: #4338ca;
}

.stack-viz {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stack-layer {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
}

.stack-layer--2 {
  background: #6366f1;
  color: white;
}

.stack-layer--1 {
  background: #bfdbfe;
  color: #1e40af;
}

.stack-layer--0 {
  background: #f1f5f9;
  color: #64748b;
  border: 1px dashed #cbd5e1;
}
</style>
