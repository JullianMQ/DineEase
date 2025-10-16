<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
</script>

<template>
  <div class="bg-card">
    <NavigationMenu class="flex max-w-6xl w-full justify-start mx-auto">
      <NavigationMenuList class="flex w-full space-x-10">
        <NavigationMenuItem>
          <NavigationMenuLink class="text-xl">
            <RouterLink to="/">Home</RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink class="text-xl">
            <RouterLink to="/menu">Menu</RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink class="text-xl">
            <RouterLink to="/about">About</RouterLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuItem class="flex w-full justify-end">
        <NavigationMenuLink class="text-xl">
          <RouterLink to="/sign-in">Sign In</RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  </div>
</template>
