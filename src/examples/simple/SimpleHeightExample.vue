<script setup lang="ts">
import { ref } from 'vue';
import { BsSimple } from '@coderoycc/bottom-sheet-wrappers';
import ExampleContentMedium from '../../components/ExampleContentMedium.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="isOpen = true">Open Panel (30dvh)</button>

    <bs-simple v-model="isOpen" title="Height Panel" height="30dvh" show-backdrop>
      <ExampleContentMedium />
    </bs-simple>
  </div>
</template>

<style scoped>
.sheet-footer {
  padding: 0.75rem 1rem 1.25rem;
  display: flex;
  justify-content: flex-end;
}

.btn-close {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #cbd5e1;
  padding: 0.5rem 1.1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-close:hover {
  background: #e2e8f0;
}
</style>
