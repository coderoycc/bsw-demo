<script setup lang="ts">
import { ref } from 'vue';
import { DynamicBottomSheet } from '@coderoycc/bottom-sheet-wrappers';
import ExampleContentShort from '../components/ExampleContentShort.vue';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-custom" @click="isOpen = true">Abrir Tema Cuadrado C/Borde Único</button>

    <!-- Usamos class para que reciba las variables CSS locales -->
    <DynamicBottomSheet 
      class="custom-sheet-borders" 
      v-model="isOpen" 
      title="Diseño Customizado" 
      initial-size="half" 
      show-backdrop 
      close-on-backdrop
    >
      <div style="padding: 1.5rem; text-align: center;">
        <h4 style="margin:0; color: #db2777;">¡Bordes Cuadrados y Color Pastel!</h4>
        <p style="color: #be185d;">Las propiedades CSS fueron reescritas individualmente con una clase no "scoped".</p>
      </div>
      <ExampleContentShort />
    </DynamicBottomSheet>
  </div>
</template>

<!-- IMPORTANTE: No usamos scoped para que la clase global pueda ser heredada por el Teleport al body -->
<style>
.custom-sheet-borders {
  --bsw-background: #fdf2f8; 
  --bsw-border-radius: 0px; /* Borde totalmente cuadrado para que se note el cambio */
  --bsw-handle-background: #db2777; 
  --bsw-box-shadow: 0 -10px 40px rgba(219, 39, 119, 0.2);
}
</style>

<style scoped>
.btn-custom {
  background-color: #db2777;
  color: white;
  border: 1px solid transparent;
  padding: 0.6rem 1.2rem;
  border-radius: 0px; /* Consistente con modal */
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-custom:hover {
  opacity: 0.9;
}
</style>
