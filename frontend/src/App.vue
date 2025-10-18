<script setup lang="ts">
import { RouterView } from 'vue-router'
import TestNav from './components/TestNav.vue'
import Toaster from './components/ui/toast/Toaster.vue'
import axiosInstance, { apiUrl } from './api/config'
</script>

<script lang="ts">
const isSignedIn = async () => {
  try {
    const res = await axiosInstance.get(`${apiUrl}/auth/get-session`)
    if (!res.data) {
      return false
    }
    return true
  } catch (e) {
    return false
  }
}

export const isTrue = await isSignedIn()
</script>

<template>
  <Toaster />
  <TestNav></TestNav>
  <div class="flex justify-center max-w-6xl mx-auto">
    <Suspense>
      <template #default>
        <RouterView />
      </template>

      <template #fallback>
        <div class="flex justify-center items-center h-64">
          <p class="text-xl">Loading menu...</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>
