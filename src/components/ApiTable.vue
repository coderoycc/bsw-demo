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
  color: var(--text-main);
}

.table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
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
  border-bottom: 1px solid var(--border-color);
}

.api-table th {
  background-color: var(--bg-muted);
  font-weight: 600;
  color: var(--text-main);
}

.api-table tr:last-child td {
  border-bottom: none;
}

.code-text {
  font-family: 'Fira Code', monospace;
  background-color: var(--bg-muted);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85em;
  color: #059669; /* Verde para props/tipos */
}
</style>
