<script setup lang="ts">
import { ref, watchEffect, onUnmounted } from 'vue';
import { BsSimple } from '@coderoycc/bottom-sheet-wrappers';

type ThemeKey = 'default' | 'rounded' | 'dark' | 'soft';

const theme = ref<ThemeKey>('default');
const openFixed = ref(false);
const openLocal = ref(false);

watchEffect(() => {
  document.body.classList.remove('theme-default', 'theme-rounded', 'theme-dark', 'theme-soft');
  document.body.classList.add(`theme-${theme.value}`);
});

onUnmounted(() => {
  document.body.classList.remove('theme-default', 'theme-rounded', 'theme-dark', 'theme-soft');
});
</script>

<template>
  <div class="theme-demo">
    <h3>Controles de Temas Globales</h3>
    <div class="theme-controls">
      <button :class="{ active: theme === 'default' }" @click="theme = 'default'">Default</button>
      <button :class="{ active: theme === 'rounded' }" @click="theme = 'rounded'">Rounded</button>
      <button :class="{ active: theme === 'dark' }" @click="theme = 'dark'">Dark</button>
      <button :class="{ active: theme === 'soft' }" @click="theme = 'soft'">Soft</button>
    </div>

    <div class="demo-actions" style="margin-top: 15px;">
      <button class="primary-btn" @click="openFixed = true">Fixed con tema global</button>
      <button class="primary-btn" @click="openLocal = true">Override local</button>
    </div>
  </div>

  <bs-simple v-model="openFixed" title="Fixed con tema global">
    <div class="sheet-body">
      <h3>Tema global en Fixed</h3>
      <p>Las variables CSS del tema se aplican al body, y por herencia del DOM, afectan al panel aunque esté en un
        Teleport.</p>
      <p>Cambia el tema cerrando el panel y eligiendo otro.</p>
      <button class="secondary-btn" @click="openFixed = false">Cerrar</button>
    </div>
  </bs-simple>

  <bs-simple v-model="openLocal" title="Override local" class="local-fixed-theme">
    <div class="sheet-body">
      <h3>Override local</h3>
      <p>Solo este panel modifica sus variables CSS. Ignora cualquier tema global activo en el body.</p>
      <button class="secondary-btn" style="background: rgba(255,255,255,0.2);"
        @click="openLocal = false">Cerrar</button>
    </div>
  </bs-simple>
</template>

<style scoped>
.theme-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 24px 16px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  border: 1px dashed #cbd5e1;
}

.theme-controls,
.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

button {
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.primary-btn {
  background: #111827;
  color: white;
}

.secondary-btn {
  background: rgba(0, 0, 0, 0.08);
  color: #111827;
  padding: 8px 16px;
  border-radius: 8px;
}

.theme-controls button {
  background: rgba(0, 0, 0, 0.08);
  color: #111827;
}

.theme-controls button.active {
  background: #111827;
  color: white;
}

.sheet-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Override local for this panel */
.local-fixed-theme {
  --bsw-background: linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%);
  --bsw-border-radius: 24px;
  --bsw-box-shadow: 0 -8px 28px rgba(168, 85, 247, 0.25);
  --bsw-handle-background: rgba(168, 85, 247, 0.4);
}
</style>
