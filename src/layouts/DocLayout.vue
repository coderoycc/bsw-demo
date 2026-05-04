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
              <RouterLink to="/" exact-active-class="active">{{ $t('home_nav') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/simple" active-class="active">{{ $t('simple') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/dynamic" active-class="active">{{ $t('dynamic') }}</RouterLink>
            </li>
          </ul>
        </nav>
        <div class="toolbar-actions">
          <div class="desktop-lang-container desktop-only">
            <button class="lang-btn" :title="$t('change_language')">
              <span class="icon">🌐</span>
              <span class="text">{{ locale.toUpperCase() }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="desktop-dropdown">
              <button 
                class="dropdown-item" 
                :class="{ active: locale === 'es' }"
                @click="locale = 'es'"
              >
                🇪🇸 ES
              </button>
              <button 
                class="dropdown-item" 
                :class="{ active: locale === 'en' }"
                @click="locale = 'en'"
              >
                🇺🇸 EN
              </button>
            </div>
          </div>
          
          <div class="desktop-only">
            <DarkModeToggle />
          </div>

          <div class="mobile-lang-container">
            <button class="lang-btn mobile-menu-btn" :title="$t('change_language')">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
            </button>
            <div class="mobile-dropdown">
              <div class="dropdown-header">{{ $t('language') }}</div>
              <button 
                class="dropdown-item" 
                :class="{ active: locale === 'es' }"
                @click="locale = 'es'"
              >
                🇪🇸 ES
              </button>
              <button 
                class="dropdown-item" 
                :class="{ active: locale === 'en' }"
                @click="locale = 'en'"
              >
                🇺🇸 EN
              </button>
              <div class="dropdown-divider"></div>
              <div class="dropdown-header">{{ $t('appearance') }}</div>
              <div class="dropdown-item-custom">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
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
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
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

.brand-short {
  font-size: 1.2rem;
  color: var(--primary-color);
  text-transform: uppercase;
  text-shadow: 0 0 2px var(--primary-color);
  display: none;
}

.brand-full {
  font-size: 1.25rem;
  display: inline;
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

.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.desktop-only {
  display: flex;
  align-items: center;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: 1px solid var(--toolbar-border);
  color: var(--text-muted);
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.lang-btn.mobile-lang {
  padding: 0.4rem 0.5rem;
  gap: 0.2rem;
}

.lang-btn:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.lang-btn .chevron {
  width: 14px;
  height: 14px;
  opacity: 0.7;
  transition: transform 0.2s ease;
}

.lang-btn:hover .chevron {
  opacity: 1;
}

.desktop-lang-container {
  position: relative;
}

.desktop-lang-container:hover .desktop-dropdown,
.desktop-lang-container:focus-within .desktop-dropdown {
  display: flex;
}

.desktop-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: var(--toolbar-bg);
  border: 1px solid var(--toolbar-border);
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  flex-direction: column;
  min-width: 120px;
  overflow: hidden;
  z-index: 100;
}

.mobile-lang-container {
  display: none;
  position: relative;
}

.mobile-lang-container:hover .mobile-dropdown,
.mobile-lang-container:focus-within .mobile-dropdown {
  display: flex;
}

.mobile-menu-btn {
  padding: 0.4rem;
}

.mobile-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: var(--toolbar-bg);
  border: 1px solid var(--toolbar-border);
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  flex-direction: column;
  min-width: 160px;
  overflow: hidden;
  z-index: 100;
}

.dropdown-header {
  padding: 0.75rem 1rem 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.dropdown-divider {
  height: 1px;
  background-color: var(--toolbar-border);
  margin: 0.25rem 0;
}

.dropdown-item-custom {
  padding: 0.5rem 1rem 0.75rem;
  display: flex;
  justify-content: flex-start;
}

.dropdown-item {
  background: transparent;
  border: none;
  color: var(--text-muted);
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-item:hover {
  background-color: var(--toolbar-border);
  color: var(--primary-color);
}

.dropdown-item.active {
  color: var(--primary-color);
  font-weight: 600;
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

  .brand-short {
    display: inline;
  }

  .brand-full {
    display: none;
  }

  .desktop-only {
    display: none !important;
  }
  
  .mobile-lang-container {
    display: block;
  }
}
</style>
