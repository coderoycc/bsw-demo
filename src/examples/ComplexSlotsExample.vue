<script setup lang="ts">
import { ref } from 'vue';
import { BsDynamic } from '@coderoycc/bottom-sheet-wrappers';
import ExampleContentLong from '../components/ExampleContentLong.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="isOpen = true">Customslots</button>

    <bs-dynamic v-model="isOpen" initial-size="collapsed" hide-close-button>
      <!-- HEADER SLOT -->
      <template #header>
        <div class="custom-header">
          <span class="custom-title">My custom header</span>
          <span class="custom-badge">Info</span>
        </div>
      </template>

      <!-- COLLAPSED SLOT -->
      <template #collapsed-content>
        <div class="hint-box">
          🔥 Slide up for more information.
        </div>
      </template>

      <!-- MAIN CONTENT -->
      <ExampleContentLong />
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
}

.btn-primary:hover {
  background-color: #2563eb;
}

.custom-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.custom-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #4f46e5;
}

.custom-badge {
  background: #3b82f6;
  color: white;
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 0.8rem;
}

.hint-box {
  padding: 10px;
  text-align: center;
  color: #854d0e;
  font-weight: 500;
}
</style>
