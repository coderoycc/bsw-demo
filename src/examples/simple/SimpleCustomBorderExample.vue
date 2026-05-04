<script setup lang="ts">
import { ref } from 'vue';
import { BsSimple } from '@coderoycc/bottom-sheet-wrappers';
import ExampleContentShort from '../../components/ExampleContentShort.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-custom" @click="isOpen = true">Open Custom Style</button>

    <bs-simple class="custom-fixed-sheet" v-model="isOpen" title="Estilo Personalizado">
      <div style="padding: 1.5rem; text-align: center;">
        <h4 style="margin:0; color: var(--bsw-header-color);">Custom Theme</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae dolores ipsa provident
          repellendus, laboriosam asperiores. <code>Officiis</code> aspernatur ut odit ipsa, ratione delectus hic, quasi
          tempora
          dolores, officia minus ipsum?</p>
      </div>
      <ExampleContentShort />
    </bs-simple>
  </div>
</template>

<style>
.custom-fixed-sheet {
  /* Panel */
  --bsw-background: #f5f3ff;
  --bsw-border-radius: 0px;
  --bsw-box-shadow: 0 -10px 40px rgba(124, 58, 237, 0.15);

  /* Base colors */
  --bsw-text-color: #5b21b6;
  --bsw-muted-color: #7c3aed;

  /* Specific overrides */
  --bsw-header-color: #4c1d95;
  --bsw-handle-background: #6d28d9;
}
</style>

<style scoped>
.btn-custom {
  background-color: #7c3aed;
  color: white;
  border: 1px solid transparent;
  padding: 0.6rem 1.2rem;
  border-radius: 0px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-custom:hover {
  opacity: 0.9;
}

.sheet-footer {
  padding: 0.75rem 1rem 1.25rem;
  display: flex;
  justify-content: flex-end;
}
</style>
