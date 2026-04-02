<template>
  <div class="layout">
    <!-- Top Toolbar -->
    <header class="toolbar">
      <div class="toolbar-content">
        <div class="toolbar-brand" @click="setTab('home')">
          <span class="brand-icon">📱</span>
          <h2>BSW</h2>
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

const currentTab = ref('home');

const setTab = (tab: string) => {
  currentTab.value = tab;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.toolbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toolbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.toolbar-brand h2 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-main);
  font-weight: 700;
  letter-spacing: -0.025em;
}

.brand-icon {
  font-size: 1.5rem;
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

.toolbar-nav a:hover, .toolbar-nav a.active {
  color: var(--primary-color);
  text-decoration: none;
}

.toolbar-nav a.active {
  border-bottom-color: var(--primary-color);
}

.main-content {
  flex: 1;
  background-color: #fafafa;
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
  
  .toolbar-nav gap {
    gap: 1rem;
  }
}
</style>
