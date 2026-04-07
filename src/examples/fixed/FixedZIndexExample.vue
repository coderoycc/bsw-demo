<script setup lang="ts">
import { ref } from 'vue';
import { FixedBottomSheet } from '@coderoycc/bottom-sheet-wrappers';

const openSheet1 = ref(false);
const openSheet2 = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="openSheet1 = true">Abrir Panel Base (z-index: 1)</button>

    <!-- Panel base: z-index 1 (por defecto) -->
    <FixedBottomSheet
      v-model="openSheet1"
      title="Panel Base · zIndex: 1"
      show-backdrop
      :z-index="1"
    >
      <div class="sheet-content">
        <p>Este panel Fixed tiene <code>:z-index="1"</code>. El valor efectivo es <strong>9001</strong> (se suma a la base 9000 interna).</p>
        <p>A diferencia del modo Dynamic, este panel no se puede expandir ni cerrar arrastrando. Usa los botones para navegar entre paneles.</p>
        <div class="action-row">
          <button class="btn-secondary" @click="openSheet2 = true">
            Abrir Panel Superpuesto (z-index: 2)
          </button>
          <!-- El modo Fixed no se cierra por gestos: se necesita un botón explícito -->
          <button class="btn-close" @click="openSheet1 = false">Cerrar panel</button>
        </div>
      </div>
    </FixedBottomSheet>

    <!-- Panel superpuesto: z-index 2 (aparece sobre el anterior) -->
    <FixedBottomSheet
      v-model="openSheet2"
      title="Panel Superpuesto · zIndex: 2"
      show-backdrop
      :z-index="2"
    >
      <div class="sheet-content sheet-content--top">
        <p>Este panel usa <code>:z-index="2"</code> (9002 efectivo). Se muestra por encima del panel anterior sin importar el orden en el DOM.</p>
        <p>Ciérralo con el botón para volver al panel base. El Panel Fixed <strong>no se cierra con gestos</strong>.</p>
        <div class="stack-viz">
          <div class="stack-layer stack-layer--2">Panel Fixed zIndex: 2 ← estás aquí</div>
          <div class="stack-layer stack-layer--1">Panel Fixed zIndex: 1</div>
          <div class="stack-layer stack-layer--0">App / Página</div>
        </div>
        <!-- El modo Fixed no se cierra por gestos: se necesita un botón explícito -->
        <div class="action-row">
          <button class="btn-close btn-close--cyan" @click="openSheet2 = false">Cerrar panel</button>
        </div>
      </div>
    </FixedBottomSheet>
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
  background-color: #0891b2;
  color: white;
  border: none;
  padding: 0.55rem 1.1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
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
  background: #ecfeff;
  color: #0e7490;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.sheet-content--top code {
  background: #cffafe;
  color: #155e75;
}

.action-row {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
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
.btn-close--cyan {
  background: #ecfeff;
  color: #155e75;
  border-color: #a5f3fc;
}
.btn-close--cyan:hover {
  background: #cffafe;
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
  background: #0891b2;
  color: white;
}
.stack-layer--1 {
  background: #a5f3fc;
  color: #164e63;
}
.stack-layer--0 {
  background: #f1f5f9;
  color: #64748b;
  border: 1px dashed #cbd5e1;
}
</style>
