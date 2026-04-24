<template>
  <div class="layout">
    <!-- Top Toolbar -->
    <header class="toolbar">
      <div class="toolbar-content">
        <RouterLink class="toolbar-brand" to="/">
          <span class="brand-short">BSW</span>
          <span class="brand-full">Bottom Sheet Wrappers</span>
        </RouterLink>
        <nav class="toolbar-nav">
          <ul>
            <li>
              <RouterLink to="/" exact-active-class="active">Inicio</RouterLink>
            </li>
            <li>
              <RouterLink to="/simple" active-class="active">Simple</RouterLink>
            </li>
            <li>
              <RouterLink to="/dynamic" active-class="active">Dynamic</RouterLink>
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
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import DarkModeToggle from '../components/DarkModeToggle.vue';
import { useDarkMode } from '../composables/useDarkMode';

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
  text-decoration: none;
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
