<template>
  <div class="layout">
    <!-- Top Toolbar -->
    <header class="toolbar">
      <div class="toolbar-content">
        <div class="toolbar-brand" @click="setTab('home')">
          <span class="brand-short">BSW</span>
          <span class="brand-full">Bottom Sheet Wrappers</span>
        </div>
        <nav class="toolbar-nav">
          <ul>
            <li>
              <a href="#" :class="{ active: currentTab === 'home' }" @click.prevent="setTab('home')">Inicio</a>
            </li>
            <li>
              <a href="#" :class="{ active: currentTab === 'dynamic' }" @click.prevent="setTab('dynamic')">Dynamic</a>
            </li>
            <li>
              <a href="#" :class="{ active: currentTab === 'fixed' }" @click.prevent="setTab('fixed')">Fixed</a>
            </li>
          </ul>
        </nav>
        <!-- Dark Mode Toggle -->
        <DarkModeToggle />
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="content-container">
        <slot :currentTab="currentTab" :setTab="setTab"></slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DarkModeToggle from '../components/DarkModeToggle.vue';
import { useDarkMode } from '../composables/useDarkMode';

const currentTab = ref('home');

const setTab = (tab: string) => {
  currentTab.value = tab;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Inicializar el dark mode globalmente desde el layout raíz
useDarkMode();
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-main);
  transition: background-color 0.3s ease;
}

.toolbar {
  background-color: var(--toolbar-bg);
  border-bottom: 1px solid var(--toolbar-border);
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: var(--toolbar-shadow);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.toolbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.toolbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

/* Estilos compartidos del texto de marca */
.brand-short,
.brand-full {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--primary-color);
  text-shadow: 0 0 2px var(--primary-color);
  transition: color 0.3s ease;
  white-space: nowrap;
}

/* Versión corta: solo en mobile */
.brand-short {
  font-size: 1.2rem;
  color: var(--primary-color);
  text-transform: uppercase;
  text-shadow: 0 0 2px var(--primary-color);
  display: none;
  /* oculto por defecto (desktop) */
}

/* Versión larga: solo en desktop */
.brand-full {
  font-size: 1.25rem;
  display: inline;
  /* visible por defecto (desktop) */
}

.toolbar-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.toolbar-nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.toolbar-nav a {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0.25rem;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.toolbar-nav a:hover,
.toolbar-nav a.active {
  color: var(--primary-color);
  text-decoration: none;
}

.toolbar-nav a.active {
  border-bottom-color: var(--primary-color);
}

.main-content {
  flex: 1;
  background-color: var(--content-bg);
  transition: background-color 0.3s ease;
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

@media (max-width: 768px) {
  .toolbar-content {
    padding: 0 1rem;
  }

  .toolbar-nav ul {
    gap: 1rem;
  }

  /* En mobile: mostrar la versión corta, ocultar la larga */
  .brand-short {
    display: inline;
  }

  .brand-full {
    display: none;
  }
}
</style>
