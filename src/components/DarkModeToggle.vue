<template>
  <button class="dark-toggle" :class="{ 'is-dark': isDark }" @click="toggle"
    :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'" aria-label="Toggle dark mode">
    <span class="toggle-track">
      <span class="toggle-thumb">
        <svg v-if="!isDark" class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <svg v-else class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode';

const { isDark, toggle } = useDarkMode();
</script>

<style scoped>
.dark-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
}

.dark-toggle:focus-visible .toggle-track {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.toggle-track {
  position: relative;
  width: 52px;
  height: 28px;
  border-radius: 14px;
  background: #cbd5e1;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 3px;
}

.dark-toggle.is-dark .toggle-track {
  background: #3b82f6;
}

.toggle-thumb {
  position: absolute;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

.dark-toggle.is-dark .toggle-thumb {
  transform: translateX(24px);
  background: #1e1b4b;
}

.toggle-icon {
  width: 13px;
  height: 13px;
  color: #64748b;
  transition: color 0.2s;
}

.dark-toggle.is-dark .toggle-icon {
  color: #a5b4fc;
}
</style>
