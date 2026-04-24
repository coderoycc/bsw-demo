<script setup lang="ts">
import { ref } from 'vue';
import { SimpleBottomSheet } from '@coderoycc/bottom-sheet-wrappers';
import ExampleContentShort from '../../components/ExampleContentShort.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-custom" @click="isOpen = true">Abrir Tema Personalizado</button>

    <!-- Usamos class para sobreescribir las variables CSS localmente -->
    <simple-bottom-sheet class="custom-fixed-sheet" v-model="isOpen" title="Estilo Personalizado">
      <div style="padding: 1.5rem; text-align: center;">
        <h4 style="margin:0; color: var(--bsw-header-color);">¡Tema Púrpura Estándar!</h4>
        <p>Este ejemplo usa el sistema de variables definido en <code>css_variables.md</code> para un control total.</p>
      </div>
      <ExampleContentShort />
      <!-- El modo Fixed no se cierra por gestos: se necesita un botón explícito -->
      <div class="sheet-footer">
        <button class="btn-close" @click="isOpen = false">Cerrar panel</button>
      </div>
    </simple-bottom-sheet>
  </div>
</template>

<!-- Sin scoped: la clase la debe encontrar el Teleport al body -->
<style>
.custom-fixed-sheet {
  /* Panel */
  --bsw-background: #f5f3ff;
  --bsw-border-radius: 0px;
  --bsw-box-shadow: 0 -10px 40px rgba(124, 58, 237, 0.15);

  /* Colores Base (Herencia) */
  --bsw-text-color: #5b21b6;
  --bsw-muted-color: #7c3aed;

  /* Overrides Específicos */
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

.btn-close {
  background: #ede9fe;
  color: #5b21b6;
  border: 1px solid #c4b5fd;
  padding: 0.5rem 1.1rem;
  border-radius: 0px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-close:hover {
  background: #ddd6fe;
}
</style>
