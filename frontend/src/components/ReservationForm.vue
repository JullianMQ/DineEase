<script setup lang="ts">
import { ref } from 'vue'
import Button from './ui/button/Button.vue'
import Card from './ui/card/Card.vue'
import CardContent from './ui/card/CardContent.vue'
import CardDescription from './ui/card/CardDescription.vue'
import CardHeader from './ui/card/CardHeader.vue'
import CardTitle from './ui/card/CardTitle.vue'
import Label from './ui/label/Label.vue'
import Input from './ui/input/Input.vue'

const formData = ref<{
  reservee_name: string
  email: string
  date: string
  time: string
  seat_num: number
}>({
  reservee_name: '',
  email: '',
  date: '',
  time: '',
  seat_num: 0,
})

const handleSubmit = () => {
  console.log('Form Data:', formData.value)
  console.log('Name:', formData.value.reservee_name)
  console.log('Email:', formData.value.email)
  console.log('Date:', formData.value.date)
  console.log('Time:', formData.value.time)
}
</script>

<template>
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-xl"> Reserve Your Spot </CardTitle>
      <CardDescription> Enter your details to reserve your spot</CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="handleSubmit" class="grid gap-4">
        <div class="grid gap-2">
          <Label for="name">Name</Label>
          <Input
            id="name"
            v-model="formData.reservee_name"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div class="grid gap-2">
          <Label for="seat_num">Seat Number</Label>
          <Input
            id="seat"
            v-model="formData.seat_num"
            type="text"
            inputmode="numeric"
            placeholder="3"
            required
          />
        </div>
        <div class="grid gap-2">
          <Label for="date">Date</Label>
          <Input id="date" v-model="formData.date" type="date" />
        </div>
        <div class="grid gap-2">
          <Label for="time">Time</Label>
          <Input id="time" v-model="formData.time" type="time" />
        </div>
        <Button type="submit" class="w-full"> Reserve Your Seat </Button>
      </form>
      <div class="mt-4 text-center text-sm">
        Want to see your reservations?
        <RouterLink to="/sign-up" class="underline"> Sign up </RouterLink>
      </div>
    </CardContent>
  </Card>
</template>
