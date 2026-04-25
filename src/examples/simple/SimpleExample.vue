<script setup lang="ts">
import { ref } from 'vue';
import { BsSimple } from '@coderoycc/bottom-sheet-wrappers';
import ExampleContentShort from '../../components/ExampleContentShort.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="isOpen = true">Open</button>

    <bs-simple v-model="isOpen" title="Panel Fijo Simple">
      <ExampleContentShort />
    </bs-simple>
  </div>
</template>

<style scoped>
.btn-primary {
  background-color: #3b82f6;
  color: white;
  border: 1px solid transparent;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s;
}

.btn-primary:hover {
  filter: brightness(0.9);
}

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
