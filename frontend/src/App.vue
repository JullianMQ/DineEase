<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import UserNav from './components/UserNav.vue'
import TestNav from './components/TestNav.vue';
</script>

<template>
  <TestNav></TestNav>
  <div class="flex justify-center max-w-6xl mx-auto">
    <RouterView />
  </div>
</template>
