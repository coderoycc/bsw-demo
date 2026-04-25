<script setup lang="ts">
import { ref } from 'vue';
import { BsDynamic } from '@coderoycc/bottom-sheet-wrappers';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-dark" @click="isOpen = true">Abrir Dark Mode Local</button>

    <bs-dynamic class="dark-mode-sheet" v-model="isOpen" initial-size="half" show-backdrop close-on-backdrop
      title="Modo oscuro">
      <div class="dark-content">
        <h3>Modo Oscuro Integrado</h3>
        <p>Este sheet modificó localmente las variables CSS del fondo y sobrescribió colores de encabezados para modo
          noche.</p>
        <p>Nota: el estilo CSS variables "dark-mode-sheet" usa la etiqueta &lt;style&gt; global.</p>
      </div>
    </bs-dynamic>
  </div>
</template>

<style>
/**
  The style is outside of style scoped to be accessible by the teleport directive
*/
.dark-mode-sheet {
  --bsw-background: #1e1e2e;
  --bsw-text-color: #cdd6f4;
  --bsw-muted-color: rgba(255, 255, 255, 0.45);
  --bsw-box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.5);
  --bsw-border-radius: 20px;
}
</style>

<style scoped>
.btn-dark {
  background-color: #1e293b;
  color: white;
  border: 1px solid #0f172a;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.btn-dark:hover {
  background-color: #0f172a;
}

.dark-content {
  padding: 1.5rem;
}

.dark-content h3 {
  margin-top: 0;
  color: #f8fafc;
}
</style>
