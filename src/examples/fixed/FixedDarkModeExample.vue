<script setup lang="ts">
import { ref } from 'vue';
import { FixedBottomSheet } from '@coderoycc/bottom-sheet-wrappers';

const isOpen = ref(false);
</script>

<template>
  <div>
    <button class="btn-dark" @click="isOpen = true">Abrir Dark Mode Local</button>

    <FixedBottomSheet
      class="fixed-dark-sheet"
      v-model="isOpen"
      show-backdrop
    >
      <div class="dark-content">
        <h3 style="margin-top: 0;">Modo Oscuro - Fixed Panel</h3>
        <p>Este sheet inyecta variables CSS oscuras localmente. No afecta al resto de la app. Nota que el contenido también se adapta a la paleta oscura.</p>
        <p>A diferencia del modo Dynamic, este panel no puede expandirse; su tamaño se define solo por el contenido o el prop <code>height</code>.</p>
        <div class="dark-hint">
          🌙 Las variables CSS permiten crear temas oscuros sin afectar globalmente la aplicación.
        </div>
      </div>
      <!-- El modo Fixed no se cierra por gestos: se necesita un botón explícito -->
      <div class="sheet-footer">
        <button class="btn-close" @click="isOpen = false">Cerrar panel</button>
      </div>
    </FixedBottomSheet>
  </div>
</template>

<!-- Sin scoped para que el Teleport encuentre la clase -->
<style>
.fixed-dark-sheet {
  --bsw-background: #0f172a;
  --bsw-border-radius: 20px;
  --bsw-handle-background: #475569;
  --bsw-box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.6);
}
</style>

<style scoped>
.btn-dark {
  background-color: #0f172a;
  color: white;
  border: 1px solid #1e293b;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
.btn-dark:hover {
  background-color: #1e293b;
}
.dark-content {
  padding: 1.5rem 1.5rem 0.5rem;
  color: #f1f5f9;
}
.dark-content code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  color: #93c5fd;
}
.dark-hint {
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: #cbd5e1;
}

.sheet-footer {
  padding: 0.75rem 1.5rem 1.25rem;
  display: flex;
  justify-content: flex-end;
}
.btn-close {
  background: rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1.1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-close:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #f1f5f9;
}
</style>
