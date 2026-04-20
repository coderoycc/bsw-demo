<script setup lang="ts">
import { ref } from 'vue';
import { DynamicBottomSheet } from '@coderoycc/bottom-sheet-wrappers';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-dark" @click="isOpen = true">Abrir Dark Mode Local</button>

    <DynamicBottomSheet class="dark-mode-sheet" v-model="isOpen" initial-size="half" show-backdrop close-on-backdrop
      title="Modo oscuro">
      <div class="dark-content">
        <h3>Modo Oscuro Integrado</h3>
        <p>Este sheet modificó localmente las variables CSS del fondo y sobrescribió colores de encabezados para modo
          noche.</p>
        <p>Nota: el estilo CSS variables "dark-mode-sheet" usa la etiqueta &lt;style&gt; global.</p>
      </div>
    </DynamicBottomSheet>
  </div>
</template>

<style>
/* 
  Utilizamos variables CSS. Se definen sin "scoped" para que 
  la directiva Teleport encuentre la clase válida desde el DOM raíz.
*/
.dark-mode-sheet {
  --bsw-background: #1e293b;
  --bsw-border-radius: 20px;
  --bsw-header-color: #f8fafc;
  --bsw-close-btn-color: #f8fafc;
  --bsw-handle-background: #475569;
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

/* El interior se mantiene en <style scoped> ya que pertenece a los slots hijos */
.dark-content {
  padding: 1.5rem;
}

.dark-content h3 {
  margin-top: 0;
  color: #f8fafc;
}
</style>
