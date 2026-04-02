<script setup lang="ts">
import DocLayout from "./layouts/DocLayout.vue";
import HomeDoc from "./pages/HomeDoc.vue";
import DynamicBottomSheetDoc from "./pages/DynamicBottomSheetDoc.vue";
import FixedBottomSheetDoc from "./pages/FixedBottomSheetDoc.vue";
</script>

<template>
  <DocLayout v-slot="{ currentTab, setTab }">
    <HomeDoc v-if="currentTab === 'home'" @navigate="setTab" />
    <DynamicBottomSheetDoc v-if="currentTab === 'dynamic'" />
    <FixedBottomSheetDoc v-if="currentTab === 'fixed'" />
  </DocLayout>
</template>

<style scoped>
/* App styles are handled globally globally in style.css or locally in components */
</style>
