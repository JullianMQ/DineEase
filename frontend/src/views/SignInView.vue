<script setup lang="ts">
import axiosInstance, { apiUrl } from '@/api/config'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/toast'
import router from '@/router'
import { ref } from 'vue'

const formData = ref<{
  email: string
  password: string
}>({
  email: '',
  password: '',
})

const resetForm = () => {
  formData.value.email = ''
  formData.value.password = ''
}

const handleSubmit = async () => {
  try {
    const res = await axiosInstance.post(`${apiUrl}/auth/sign-in/email`, {
      email: formData.value.email,
      password: formData.value.password,
    })
    console.log('res', res)
    toast({
      variant: 'default',
      title: 'Success',
      description: 'Sign in success, enjoy!',
    })

    resetForm()
    window.location.pathname = '/'
  } catch (e) {
    console.error('error', e)
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Sign in error, please make sure your credentials are correct',
    })
    return
  }
}
</script>

<template>
  <div class="mt-20 w-full">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl"> Sign In </CardTitle>
        <CardDescription> Enter your email and password to sign in</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit" class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              v-model="formData.email"
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
            />
          </div>
          <Button type="submit" class="w-full"> Sign In </Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <RouterLink to="/sign-up" class="underline"> Sign up </RouterLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
