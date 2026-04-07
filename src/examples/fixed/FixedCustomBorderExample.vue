<script setup lang="ts">
import { ref } from 'vue';
import { FixedBottomSheet } from '@coderoycc/bottom-sheet-wrappers';
import ExampleContentShort from '../../components/ExampleContentShort.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-custom" @click="isOpen = true">Abrir Tema Personalizado</button>

    <!-- Usamos class para sobreescribir las variables CSS localmente -->
    <FixedBottomSheet
      class="custom-fixed-sheet"
      v-model="isOpen"
      title="Estilo Personalizado"
    >
      <div style="padding: 1.5rem; text-align: center;">
        <h4 style="margin:0; color: #7c3aed;">¡Fondo Morado y Bordes Únicos!</h4>
        <p style="color: #6d28d9;">Las variables CSS se reescribieron con una clase no "scoped" para que el Teleport las herede.</p>
      </div>
      <ExampleContentShort />
      <!-- El modo Fixed no se cierra por gestos: se necesita un botón explícito -->
      <div class="sheet-footer">
        <button class="btn-close" @click="isOpen = false">Cerrar panel</button>
      </div>
    </FixedBottomSheet>
  </div>
</template>

<!-- Sin scoped: la clase la debe encontrar el Teleport al body -->
<style>
.custom-fixed-sheet {
  --bsw-background: #f5f3ff;
  --bsw-border-radius: 0px;
  --bsw-handle-background: #7c3aed;
  --bsw-box-shadow: 0 -10px 40px rgba(124, 58, 237, 0.2);
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
