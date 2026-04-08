<template>
  <div class="api-table-container">
    <h3 class="api-title">{{ title }}</h3>
    <div class="table-wrapper">
      <table class="api-table">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <td v-for="col in columns" :key="col.key">
              <span v-if="col.isCode" class="code-text">{{ row[col.key] }}</span>
              <span v-else v-html="row[col.key]"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ApiColumn {
  key: string;
  label: string;
  isCode?: boolean;
}

defineProps<{
  title: string;
  columns: ApiColumn[];
  rows: Record<string, any>[];
}>();
</script>

<style scoped>
.api-table-container {
  margin-bottom: 2rem;
}

.api-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--heading-h3, var(--text-main));
  transition: color 0.3s ease;
}

.table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--table-border, var(--border-color));
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.95rem;
}

.api-table th,
.api-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--table-border, var(--border-color));
  color: var(--text-main);
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.api-table th {
  background-color: var(--table-header-bg, var(--bg-muted));
  font-weight: 600;
  color: var(--table-header-color, var(--text-muted));
}

.api-table tbody tr {
  background-color: var(--table-row-bg, var(--bg-main));
}

.api-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-bg, var(--bg-muted));
}

.api-table tbody tr:hover {
  background-color: var(--table-row-hover-bg);
}

.api-table tr:last-child td {
  border-bottom: none;
}

.code-text {
  font-family: 'Fira Code', monospace;
  background-color: var(--table-code-bg, var(--bg-muted));
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85em;
  color: var(--table-code-color, #059669);
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
