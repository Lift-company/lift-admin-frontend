<script setup lang="ts">
import Sidebar from '@/components/widget/Sidebar.vue'
</script>

<template>
  <main class="flex">
    <Sidebar />
    <slot />
  </main>
</template>
