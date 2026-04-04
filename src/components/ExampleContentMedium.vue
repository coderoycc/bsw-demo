<template>
  <div class="example-content-medium">
    <h3>Contenido Medio</h3>
    <p>Un contenido con altura intermedia. Aquí podemos observar cómo cambia de un tamaño 'halft' al 'full' de forma fluida.</p>
    
    <div class="grid">
      <div v-for="i in 4" :key="i" class="card">
        <h4>Opción {{ i }}</h4>
        <p>Descripción detallada de la opción número {{ i }} para simular una tarjeta de acción.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.example-content-medium {
  padding: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
}
.card {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  background: #f8fafc;
}
h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #334155;
}
p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}
</style>
