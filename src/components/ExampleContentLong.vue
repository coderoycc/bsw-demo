<template>
  <div class="example-content-long">
    <h3>Contenido Largo (Scrollable)</h3>
    <p>Este contenido supera el límite máximo de altura (full), por lo tanto, el contenido interior se vuelve scrolleable. La barra indicadora del header intercepta eventos de touch para manejar el deslizamiento, mientras que el contenido mismo scrollea de forma nativa.</p>
    
    <div class="list">
      <div v-for="i in 15" :key="i" class="list-item">
        <div class="avatar">{{ i }}</div>
        <div class="details">
          <h5>Elemento de Lista {{ i }}</h5>
          <span>Subtítulo o descripción larga del elemento de la lista.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.example-content-long {
  padding: 1rem;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}
.list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: #e0e7ff;
  color: #4f46e5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.details h5 {
  margin: 0 0 0.25rem 0;
  color: #1e293b;
}
.details span {
  font-size: 0.85rem;
  color: #64748b;
}
</style>
