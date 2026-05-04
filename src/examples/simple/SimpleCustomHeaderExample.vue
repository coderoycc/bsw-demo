<script setup lang="ts">
import { ref } from 'vue';
import { BsSimple } from '@coderoycc/bottom-sheet-wrappers';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="isOpen = true">Open Custom Header</button>

    <bs-simple v-model="isOpen" show-backdrop>
      <template #header>
        <div class="custom-header">
          <span class="custom-title">📋 Custom Header Title</span>
          <span class="custom-badge">v2.0</span>
        </div>
      </template>

      <div class="content-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, molestias.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil odit maxime, velit cumque totam amet
          error,
          placeat laborum officiis molestias repellendus vel dolorem nesciunt voluptates? Doloremque facere aperiam
          modi?</p>
        <div class="info-row">
          <div class="info-item">Lorem ipsum dolor sit amet.</div>
          <div class="info-item">Lorem ipsum dolor sit amet.</div>
          <div class="info-item">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </bs-simple>
  </div>
</template>

<style scoped>
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.custom-title {
  font-weight: bold;
  font-size: 1.1rem;
  color: #1d4ed8;
}

.custom-badge {
  background: #3b82f6;
  color: white;
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 0.8rem;
}

.content-body {
  padding: 1.25rem 1.5rem 0.5rem;
}

.content-body code {
  background: #eff6ff;
  color: #1d4ed8;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.info-row {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.info-item {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #334155;
  white-space: nowrap;
}

.sheet-footer {
  padding: 0.75rem 1.5rem 1.25rem;
  display: flex;
  justify-content: flex-end;
}
</style>
