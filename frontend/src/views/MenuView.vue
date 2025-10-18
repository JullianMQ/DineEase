<script scope setup lang="ts">
import axiosInstance, { apiUrl } from '@/api/config'
import Footer from '@/components/Footer.vue'
import { Card } from '@/components/ui/card'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardFooter from '@/components/ui/card/CardFooter.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import { ref } from 'vue'

let items = ref<
  {
    name: string
    description: string
    price: number
    image_url: string
    category: string
    available: boolean
  }[]
>([])

const res = await axiosInstance.get(`${apiUrl}/menu`)
items.value = res.data
</script>

<template>
  <main class="mt-20">
    <h1 class="text-4xl lg:text-5xl font-bold text-center">Have a look at the menu</h1>
    <section class="flex flex-wrap justify-center mt-8 gap-6 mb-20">
      <Card v-for="item in items" :key="item.name" class="max-w-[300px] min-w-[300px] gap-2">
        <CardContent>
          <div class="image-container">
            <img :src="item.image_url" :alt="item.name" class="rounded-sm h-44 object-cover" />
          </div>
        </CardContent>
        <CardHeader class="text-2xl">{{ item.name }}</CardHeader>
        <CardFooter class="text-4xl">${{ item.price }}</CardFooter>
        <CardDescription class="ml-6 mr-2">{{ item.description }}</CardDescription>
      </Card>
    </section>
    <Footer />
  </main>
</template>
