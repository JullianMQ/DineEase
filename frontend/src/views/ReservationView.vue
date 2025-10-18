<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import ReservationForm from '@/components/ReservationForm.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <main class="mt-20 w-full self-center flex flex-col items-center">
    <div class="">
      <h1 class="text-5xl font-bold">Reservations</h1>
      <Button class="mt-4 max-w-[180px]">
        <RouterLink to="/reservation/mine"> Check your reservations </RouterLink>
      </Button>
    </div>
    <ReservationForm class="mt-12 w-full" />
    <Footer class="mt-18" />
  </main>
</template>
