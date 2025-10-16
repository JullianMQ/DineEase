<script lang="ts">
export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"
export const iframeHeight = '600px'
export const containerClass = 'w-full h-screen flex items-center justify-center px-4'
</script>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="mt-20 w-full">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl"> Sign In </CardTitle>
        <CardDescription> Enter your email and password to sign in</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" placeholder="*********" />
          </div>
          <Button type="submit" class="w-full"> Create an account </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <RouterLink to="/sign-up" class="underline"> Sign up </RouterLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
