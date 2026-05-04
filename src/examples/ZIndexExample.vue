<script setup lang="ts">
import { ref } from 'vue';
import { BsDynamic } from '@coderoycc/bottom-sheet-wrappers';

const openSheet1 = ref(false);
const openSheet2 = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="openSheet1 = true">Abrir Panel Base (z-index: 1)</button>

    <bs-dynamic v-model="openSheet1" title="Panel Base · zIndex: 1" initial-size="half" show-backdrop :z-index="1">
      <div class="sheet-content">
        <p>Este panel tiene <code>:z-index="1"</code>, que internamente suma 9000. Es el primer nivel del stack.</p>
        <p>Ahora abre un segundo panel encima. Aunque ambos comparten el mismo punto de montaje
          (<code>Teleport → body</code>), el de mayor <code>zIndex</code> se muestra al frente.</p>
        <button class="btn-secondary" @click="openSheet2 = true">
          Abrir Panel Superpuesto (z-index: 2)
        </button>
      </div>
    </bs-dynamic>

    <bs-dynamic v-model="openSheet2" title="Panel Superpuesto · zIndex: 2" initial-size="half" show-backdrop
      :z-index="2">
      <div class="sheet-content sheet-content--top">
        <p>Este panel usa <code>:z-index="2"</code> (9002 efectivo) y aparece sobre el panel anterior.</p>
        <p>Ciérralo para volver al panel base. El apilamiento es completamente controlado por el prop
          <code>zIndex</code>.
        </p>
        <div class="stack-viz">
          <div class="stack-layer stack-layer--2">Panel zIndex: 2 ← estás aquí</div>
          <div class="stack-layer stack-layer--1">Panel zIndex: 1</div>
          <div class="stack-layer stack-layer--0">App / Página</div>
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
