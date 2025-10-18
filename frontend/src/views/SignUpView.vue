<script lang="ts">
export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"
export const iframeHeight = '600px'
export const containerClass = 'w-full h-screen flex items-center justify-center px-4'
</script>

<script setup lang="ts">
import axiosInstance, { apiUrl } from '@/api/config'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/toast'
import { ref } from 'vue'

const formData = ref<{
  first_name: string
  last_name: string
  email: string
  password: string
}>({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
})

const resetForm = () => {
  formData.value.first_name = ''
  formData.value.last_name = ''
  formData.value.email = ''
  formData.value.password = ''
}

const handleSubmit = async () => {
  try {
    await axiosInstance.post(`${apiUrl}/auth/sign-up/email`, {
      name: `${formData.value.first_name} ${formData.value.last_name}`,
      email: formData.value.email,
      password: formData.value.password,
    })

    toast({
      variant: 'default',
      title: 'Success',
      description: 'Sign up success, enjoy!',
    })

    setTimeout(() => {
      resetForm()
      window.location.pathname = '/sign-in'
    }, 2000)
  } catch (e) {
    console.error('error', e)
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Sign up error, please make sure all fields correct',
    })
    return
  }
}
</script>

<template>
  <div class="mt-20">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl"> Sign Up </CardTitle>
        <CardDescription> Enter your information to create an account </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit" class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input
                id="first-name"
                type="text"
                v-model="formData.first_name"
                placeholder="Max"
                required
              />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input
                id="last-name"
                type="text"
                v-model="formData.last_name"
                placeholder="Robinson"
                required
              />
            </div>
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
            <Label for="password">Password</Label>
            <Input
              id="password"
              v-model="formData.password"
              type="password"
              placeholder="*********"
              required
            />
          </div>
          <!-- TODO: ADD PASSWORD CONFIRMATION
          <div class="grid gap-2">
            <Label for="password">Confirm Password</Label>
            <Input
              id="password"
              v-model="formData.password"
              type="password"
              placeholder="*********"
              required
            />
          </div>
          -->
          <Button type="submit" class="w-full"> Create an account </Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <RouterLink to="/sign-in" class="underline"> Sign in </RouterLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
