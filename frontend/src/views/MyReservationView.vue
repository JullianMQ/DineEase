<script setup lang="ts">
import axiosInstance, { apiUrl, cancelReservation, confirmReservation } from '@/api/config'
import { role } from '@/App.vue'
import Button from '@/components/ui/button/Button.vue'
import Card from '@/components/ui/card/Card.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import { toast } from '@/components/ui/toast'
import { ref } from 'vue'

let items = ref<
  {
    _id: string
    reservee_name: string
    email: string
    seat_num: number
    date: string
    time: string
    status: string
  }[]
>([])

try {
  const res = await axiosInstance.get(`${apiUrl}/reservations`)
  items = res.data
} catch (e) {
  console.error('Error:', e)
  toast({
    variant: "destructive",
    title: "Failed",
    description: "Make sure to have an account or sign-in to see your reservations"
  })
}
</script>

<template>
  <main class="my-20 w-full self-center flex flex-col items-center">
    <div class="">
      <h1 class="text-5xl font-bold">Reservations</h1>
      <Button class="mt-4 max-w-[180px] items-end">
        <RouterLink class="pr-2" to="/reservation">
          <span class="text-lg">&larr;</span>
          Go Back
        </RouterLink>
      </Button>
    </div>
    <section class="flex flex-wrap justify-center mt-8 gap-6 mb-20">
      <Card v-for="(item, idx) in items" :key="idx" class="max-w-[300px] min-w-[300px] gap-2">
        <CardHeader class="text-2xl">Seat No. {{ item.seat_num }}</CardHeader>
        <CardContent>
          <div class="">
            <div class="flex gap-2 items-center *:text-lg">
              <img src="/date.svg" alt="" class="size-6" />
              <p class="">{{ item.date }}</p>
            </div>
            <div class="flex gap-2 items-center *:text-lg">
              <img src="/time.svg" alt="" class="size-6" />
              <p class="">{{ item.time }}</p>
            </div>
            <div class="flex gap-2 items-center *:text-lg">
              <img src="/user.svg" alt="" class="size-6" />
              <p class="">{{ item.reservee_name }}</p>
            </div>
            <div class="flex gap-2 items-center *:text-lg">
              <img src="/email.svg" alt="" class="size-6" />
              <p class="">{{ item.email }}</p>
            </div>
            <div v-if="role === 'user'" class="flex mt-4 gap-2">
              <Button @click="confirmReservation(item._id)">Confirm</Button>
              <Button
                @click="cancelReservation(item._id)"
                variant="ghost"
                class="border border-gray-300"
              >
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  </main>
</template>
