<script lang="ts" setup>
import { BsSimple } from "@coderoycc/bottom-sheet-wrappers";
import { ref } from "vue";
const isOpen = ref(false);
</script>
<template>
  <button class="btn-primary" @click="isOpen = true">Open Persistent Example</button>
  <bs-simple v-model="isOpen" persistent title="Panel Persistente">
    <!-- Poner un formalario pequeño con estilos tipo bootstrap -->
    <div class="container">
      <div>
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Some Name" />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Address</label>
        <input type="text" class="form-control" id="lastName" placeholder="Some Adress, #555" />
      </div>
      <button class="btn-send" @click="isOpen = false">Cerrar</button>
    </div>
  </bs-simple>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 1rem 1rem;
}

.input-form {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.1rem;
  font-size: 0.8rem;
  color: #64748b;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.mb-3 {
  margin-bottom: 1rem;
}

.btn-send {
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: white;
  background-color: #10b981;
  font-weight: 600;
  display: block;
  margin-left: auto;
}
</style>