<script setup lang="ts">
import { ref } from 'vue';
import { FixedBottomSheet } from '@coderoycc/bottom-sheet-wrappers';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-primary" @click="isOpen = true">Abrir con Header Personalizado</button>

    <FixedBottomSheet v-model="isOpen" show-backdrop>
      <!-- HEADER SLOT: reemplaza completamente el encabezado nativo -->
      <template #header>
        <div class="custom-header">
          <span class="custom-title">📋 Detalle del Elemento</span>
          <span class="custom-badge">v2.0</span>
        </div>
      </template>

      <!-- CONTENIDO PRINCIPAL -->
      <div class="content-body">
        <p>El slot <code>header</code> reemplaza completamente el encabezado nativo del panel.</p>
        <p>Úsalo para agregar iconos, badges, acciones contextuales o cualquier layout que necesites.</p>
        <div class="info-row">
          <div class="info-item">📌 ID: #A1023</div>
          <div class="info-item">📅 Fecha: 06/04/2026</div>
          <div class="info-item">✅ Estado: Activo</div>
        </div>
      </div>

      <!-- El modo Fixed no se cierra por gestos: se necesita un botón explícito -->
      <div class="sheet-footer">
        <button class="btn-close" @click="isOpen = false">Cerrar panel</button>
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
