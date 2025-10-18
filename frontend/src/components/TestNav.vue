<script setup lang="ts">
import axiosInstance, { apiUrl } from '@/api/config'
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { toast } from './ui/toast'
import router from '@/router'
import { isTrue } from '@/App.vue'

const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
  open.value = !open.value
}

const navLinkItems = ref([
  { text: 'Home', href: '/' },
  { text: 'Menu', href: '/menu' },
  { text: 'Reservation', href: '/reservation' },
  { text: 'About', href: '/about' },
])

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleSignOut = async () => {
  try {
    await axiosInstance.post(`${apiUrl}/auth/sign-out`)

    toast({
      variant: 'default',
      title: 'Success',
      description: 'Sign out success, enjoy!',
    })

    setTimeout(() => {
      window.location.pathname = '/'
    }, 2000)
  } catch (e) {
    console.error('error', e)
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Sign out error',
    })
    return
  }
}
</script>

<template>
  <header class="flex w-full items-center justify-center bg-card">
    <div class="container">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full px-4">
          <RouterLink to="/" class="block w-full py-5">
            <img src="/DineEase-NOBG.png" alt="logo" class="" />
          </RouterLink>
        </div>
        <div class="flex w-full items-center justify-between px-4 relative">
          <div class="">
            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              id="navbarToggler"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span class="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
              <span class="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
              <span class="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
            </button>
            <nav
              :class="{ hidden: !open }"
              id="navbarCollapse"
              class="absolute right-12 top-8 w-full max-w-[250px] rounded-lg px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none bg-card border border-border lg:border-none lg:bg-card z-20"
            >
              <ul class="block lg:flex">
                <template v-for="(item, index) in navLinkItems" :key="index">
                  <li>
                    <RouterLink
                      v-if="item.href"
                      :to="item.href"
                      class="flex py-2 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary-foreground lg:ml-12 lg:inline-flex"
                    >
                      {{ item.text }}
                    </RouterLink>
                  </li>
                </template>
                <li v-if="!isTrue" class="py-2 sm:hidden">
                  <RouterLink to="/sign-in">Sign In</RouterLink>
                </li>
                <li v-if="!isTrue" class="py-2 sm:hidden">
                  <RouterLink to="/sign-up">Sign Up</RouterLink>
                </li>
                <li v-if="isTrue" class="py-2 sm:hidden">
                  <button v-on:click="handleSignOut">Sign Out</button>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 mt-2 sm:flex lg:pr-0">
            <RouterLink
              v-if="!isTrue"
              to="/sign-in"
              class="px-7 py-3 text-base font-medium text-dark hover:text-primary hover:bg-secondary-foreground"
              >Sign in
            </RouterLink>
            <RouterLink
              v-if="!isTrue"
              to="/sign-up"
              class="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >Sign Up
            </RouterLink>
            <button
              v-if="isTrue"
              v-on:click="handleSignOut"
              class="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
