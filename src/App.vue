<script setup lang="ts">
import { ref } from "vue";
import { DynamicBottomSheet } from "@coderoycc/bottom-sheet-wrappers";
const open = ref(false)
</script>

<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 100vh;">
    <button @click="open = true">Open</button>
  </div>
  <div>
    <dynamic-bottom-sheet v-model="open">
      <template #header>
        <div class="header-custom">
          <span>Hola mundo</span>
          <button @click="open = false">X</button>
        </div>
      </template>
      <div class="border">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      </div>
    </dynamic-bottom-sheet>
  </div>
</template>

<style scoped>
.border {
  border: 1px solid red;
}
.header-custom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
