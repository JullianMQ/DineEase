<script setup lang="ts">
import { Card } from '@/components/ui/card'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardFooter from '@/components/ui/card/CardFooter.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'

const items = [
  {
    name: "Garlic Parmesan Fries",
    description: "Crispy fries tossed in garlic butter and Parmesan cheese.",
    price: 89.0,
    image_url: "https://images.unsplash.com/photo-1736826201130-c8a3d4e1427c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    category: "Appetizer",
    available: true,
  },
  {
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan.",
    price: 120.0,
    image_url: "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Appetizer",
    available: true,
  },
  {
    name: "Mozzarella Sticks",
    description: "Golden fried mozzarella served with marinara dipping sauce.",
    price: 95.0,
    image_url: "https://imgs.search.brave.com/yhoy7N2BzA2ttUQFGjZHY27_cnm8Eb5TeBMPPvWYtpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzkwLzA4LzQ3/LzM2MF9GXzE2OTAw/ODQ3NTdfam96T3Ay/emVVMUdRRGFDbXQx/UGlyT1VrakkzdHl1/QUguanBn",
    category: "Appetizer",
    available: false,
  },
  {
    name: "Classic Burger",
    description:
      "Juicy beef patty with lettuce, tomato, and melted cheese on a brioche bun.",
    price: 159.0,
    image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=999",
    category: "Main Course",
    available: true,
  },
  {
    name: "Grilled Chicken Alfredo",
    description:
      "Creamy pasta topped with grilled chicken and Parmesan cheese.",
    price: 189.0,
    image_url: "https://images.unsplash.com/photo-1645066803665-d16a79a21566?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Main Course",
    available: true,
  },
  {
    name: "Beef Steak with Mashed Potatoes",
    description:
      "Tender beef steak served with creamy mashed potatoes and gravy.",
    price: 249.0,
    image_url: "https://images.unsplash.com/photo-1732763898578-8374f3ba911a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Main Course",
    available: false,
  },
  {
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
    price: 110.0,
    image_url: "https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Dessert",
    available: true,
  },
  {
    name: "Classic Cheesecake",
    description:
      "Creamy New York-style cheesecake with a graham cracker crust.",
    price: 125.0,
    image_url: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
    category: "Dessert",
    available: true,
  },
  {
    name: "Iced Caramel Latte",
    description:
      "Freshly brewed espresso with milk and caramel syrup served over ice.",
    price: 99.0,
    image_url: "https://images.unsplash.com/photo-1579888071069-c107a6f79d82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Beverage",
    available: true,
  },
  {
    name: "Fresh Lemon Iced Tea",
    description: "Refreshing brewed tea with lemon slices and ice.",
    price: 79.0,
    image_url: "https://images.unsplash.com/photo-1656936632107-0bfa69ea06de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    category: "Beverage",
    available: true,
  },
]
</script>

<template>
  <main class="mt-20">
    <h1 class="text-4xl lg:text-5xl font-bold text-center">Have a look at the menu</h1>

    <section class="flex flex-wrap justify-center mt-8 gap-6 mb-20">
      <Card v-for="item in items" class="max-w-[300px] min-w-[300px] gap-2">
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
  </main>
</template>
