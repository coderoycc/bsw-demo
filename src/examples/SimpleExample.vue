<script setup lang="ts">
import { ref } from 'vue';
import { BsDynamic } from '@coderoycc/bottom-sheet-wrappers';
import ExampleContentMedium from '../components/ExampleContentMedium.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="isOpen = true">Open Simple Usage</button>

    <bs-dynamic v-model="isOpen" title="Simple Usage" initial-size="half">
      <ExampleContentMedium />
    </bs-dynamic>
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
</style>
