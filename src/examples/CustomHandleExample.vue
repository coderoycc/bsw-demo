<script setup lang="ts">
import { ref } from 'vue';
import { DynamicBottomSheet } from '@coderoycc/bottom-sheet-wrappers';

const isOpen = ref(false);
</script>
<template>
  <div>
    <button @click="isOpen = true" class="btn-open-handle">Abrir con Handle Personalizado</button>

    <!-- 1. Le das una clase única a tu Bottom Sheet -->
    <DynamicBottomSheet class="custom-handle-sheet" v-model="isOpen" title="Handle modificado">
      <div style="padding: 1.5rem;">
        <p>El indicador de la parte superior ahora es más ancho y grueso.</p>
      </div>
    </DynamicBottomSheet>
  </div>
</template>

<style>
.btn-open-handle {
  background-color: #0eaedf;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.btn-open-handle:hover {
  background-color: #0891b2;
}

.custom-handle-sheet {
  --bsw-handle-background: #ec4899;
}

.custom-handle-sheet .bsw-bottom-sheet-handle {
  width: 80px;
  height: 8px;
  border-radius: 8px;
}
</style>
