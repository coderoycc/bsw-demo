<script setup lang="ts">
import { ref, watchEffect, onUnmounted } from "vue";
import { BsDynamic } from "@coderoycc/bottom-sheet-wrappers";

type ThemeKey = "default" | "rounded" | "dark" | "soft";

const theme = ref<ThemeKey>("default");

const openDynamic = ref(false);
const openLocal = ref(false);

watchEffect(() => {
  document.body.classList.remove("theme-default", "theme-rounded", "theme-dark", "theme-soft");
  document.body.classList.add(`theme-${theme.value}`);
});

onUnmounted(() => {
  document.body.classList.remove("theme-default", "theme-rounded", "theme-dark", "theme-soft");
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
      <button class="primary-btn" @click="openDynamic = true">Dynamic global</button>
      <button class="primary-btn" @click="openLocal = true">Override local</button>
    </div>
  </div>

  <bs-dynamic v-model="openDynamic" title="Dynamic con tema global" initial-size="half">
    <template #collapsed-content>
      <div>
        <p>Las variables CSS se aplican desde el body.</p>
      </div>
    </template>

    <div class="sheet-body">
      <h3>Theme global</h3>
      <p>Las variables CSS se aplican desde el body y al heredarse a través del Teleport, tiñen automáticamente todos
        los
        panales.</p>
      <p>Cambia el tema pulsando fuera y seleccionando otro botón rojo.</p>
      <button class="secondary-btn" @click="openDynamic = false">Cerrar</button>
    </div>
  </bs-dynamic>

  <bs-dynamic v-model="openLocal" title="Override local" class="local-theme" initial-size="half">
    <div class="sheet-body">
      <h3>Override local</h3>
      <p>Solo este sheet modifica sus variables CSS mediante una clase inyectada directamente al componente.</p>
      <p>Ignora la configuración redondeada, dark, soft o default que esté puesta en el body.</p>
      <button class="secondary-btn" style="background: rgba(255,255,255,0.2); color: inherit;"
        @click="openLocal = false">Cerrar</button>
    </div>
  </bs-dynamic>
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

/* Local override variables - injected in scoped */
.local-theme {
  --bsw-background: linear-gradient(135deg, #ecfeff 0%, #cffafe 100%);
  --bsw-border-radius: 24px;
  --bsw-box-shadow: 0 -8px 28px rgba(8, 145, 178, 0.25);
  --bsw-muted-color: rgba(8, 145, 178, 0.6);
  --bsw-text-color: #0e7490;
}
</style>

<!-- CSS Globaaaallll -->
<style>
/* CSS globales inyectados en el html document para testing */
body.theme-default {
  --bsw-background: #ffffff;
  --bsw-border-radius: 16px;
  --bsw-text-color: #111827;
  --bsw-muted-color: rgba(0, 0, 0, 0.5);
  --bsw-box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.15);
  background-color: #f5f5f5;
  color: #111827;
}

body.theme-rounded {
  --bsw-background: #ffffff;
  --bsw-border-radius: 28px;
  --bsw-box-shadow: 0 -10px 32px rgba(0, 0, 0, 0.18);
  --bsw-muted-color: rgba(17, 24, 39, 0.35);
  --bsw-text-color: #111827;
  background-color: #eef2ff;
  color: #111827;
}

body.theme-dark {
  --bsw-background: #1e1e2e;
  --bsw-text-color: #cdd6f4;
  --bsw-muted-color: rgba(255, 255, 255, 0.45);
  --bsw-box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.5);
  --bsw-border-radius: 14px;
  background-color: #0b0f19;
  color: #f9fafb;
}

body.theme-soft {
  --bsw-background: #fff7ed;
  --bsw-text-color: #7c2d12;
  --bsw-muted-color: rgba(124, 45, 18, 0.4);
  --bsw-box-shadow: 0 -6px 18px rgba(124, 45, 18, 0.2);
  --bsw-border-radius: 20px;
  background-color: #fff7ed;
  color: #7c2d12;
}

/* Make sure text adapts globally recursively for demo */
body.theme-dark h1,
body.theme-dark h2,
body.theme-dark h3,
body.theme-dark p,
body.theme-dark span,
body.theme-dark div.description,
body.theme-dark td,
body.theme-dark th {
  color: inherit;
}

body.theme-soft h1,
body.theme-soft h2,
body.theme-soft h3,
body.theme-soft p,
body.theme-soft span,
body.theme-soft div.description {
  color: inherit;
}
</style>