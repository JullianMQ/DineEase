<script setup lang="ts">
import axiosInstance, { apiUrl } from '@/api/config'
import Footer from '@/components/Footer.vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardFooter from '@/components/ui/card/CardFooter.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from '@/components/ui/toast'
import { ref } from 'vue'
import { role } from '@/App.vue'
import { X } from 'lucide-vue-next'

interface MenuItem {
  _id?: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  available: boolean
}

let items = ref<MenuItem[]>([])

const isDialogOpen = ref(false)
const isSubmitting = ref(false)
const isDeleteMode = ref(false)
const isDeleteDialogOpen = ref(false)
const itemToDelete = ref<MenuItem | null>(null)

const formData = ref({
  name: '',
  description: '',
  price: 0,
  image: null as File | null,
  category: '',
  available: true,
})

const resetForm = () => {
  formData.value = {
    name: '',
    description: '',
    price: 0,
    image: null,
    category: '',
    available: true,
  }
}

const handleImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    formData.value.image = target.files[0]
  }
}

const handleSubmit = async () => {
  try {
    isSubmitting.value = true

    if (
      !formData.value.name ||
      !formData.value.description ||
      !formData.value.category ||
      !formData.value.image
    ) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please fill in all required fields',
      })
      return
    }

    const imageFormData = new FormData()
    imageFormData.append('image', formData.value.image)

    const uploadRes = await axiosInstance.post(`${apiUrl}/upload/image`, imageFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    const imagePath = uploadRes.data.path

    const menuItemData = {
      name: formData.value.name,
      description: formData.value.description,
      price: formData.value.price,
      image_url: imagePath,
      category: formData.value.category,
      available: formData.value.available,
    }

    await axiosInstance.post(`${apiUrl}/menu`, menuItemData)

    items.value.push(menuItemData)

    toast({
      variant: 'default',
      title: 'Success',
      description: 'Menu item created successfully!',
    })

    isDialogOpen.value = false
    resetForm()
  } catch (e) {
    console.error('Error creating menu item:', e)
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Failed to create menu item. Please try again.',
    })
  } finally {
    isSubmitting.value = false
  }
}

const toggleDeleteMode = () => {
  isDeleteMode.value = !isDeleteMode.value
}

const openDeleteDialog = (item: MenuItem) => {
  itemToDelete.value = item
  isDeleteDialogOpen.value = true
}

const confirmDelete = async () => {
  if (!itemToDelete.value || !itemToDelete.value._id) return

  try {
    await axiosInstance.delete(`${apiUrl}/menu/${itemToDelete.value._id}`)

    items.value = items.value.filter((item) => item._id !== itemToDelete.value!._id)

    toast({
      variant: 'default',
      title: 'Success',
      description: `${itemToDelete.value.name} has been deleted successfully!`,
    })

    isDeleteDialogOpen.value = false
    itemToDelete.value = null
  } catch (e) {
    console.error('Error deleting menu item:', e)
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Failed to delete menu item. Please try again.',
    })
  }
}

const res = await axiosInstance.get(`${apiUrl}/menu`)
items.value = res.data
</script>

<template>
  <main class="mt-20">
    <div class="flex justify-between items-center px-8 mb-4">
      <h1 class="text-4xl lg:text-5xl font-bold">Have a look at the menu</h1>

      <div v-if="role === 'admin'" class="flex gap-3">
        <Button @click="toggleDeleteMode" :variant="isDeleteMode ? 'destructive' : 'outline'">
          {{ isDeleteMode ? 'Exit Delete Mode' : 'Delete Mode' }}
        </Button>

        <Dialog v-model:open="isDialogOpen">
          <DialogTrigger as-child>
            <Button>Create Menu Item</Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create Menu Item</DialogTitle>
              <DialogDescription>
                Add a new item to the menu. Fill in all the details below.
              </DialogDescription>
            </DialogHeader>
            <form @submit.prevent="handleSubmit" class="grid gap-4 py-4">
              <div class="grid gap-2">
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  v-model="formData.name"
                  placeholder="Spaghetti Carbonara"
                  required
                />
              </div>

              <div class="grid gap-2">
                <Label for="description">Description</Label>
                <Textarea
                  id="description"
                  v-model="formData.description"
                  placeholder="Delicious pasta with creamy sauce..."
                  required
                />
              </div>

              <div class="grid gap-2">
                <Label for="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  v-model.number="formData.price"
                  placeholder="12.99"
                  required
                />
              </div>

              <div class="grid gap-2">
                <Label for="category">Category</Label>
                <Select v-model="formData.category" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Appetizer">Appetizer</SelectItem>
                    <SelectItem value="Main Course">Main Course</SelectItem>
                    <SelectItem value="Dessert">Dessert</SelectItem>
                    <SelectItem value="Beverage">Beverage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div class="grid gap-2">
                <Label for="image">Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  @change="handleImageChange"
                  required
                />
              </div>

              <div class="flex items-center space-x-2">
                <Checkbox
                  id="available"
                  :checked="formData.available"
                  @update:checked="(val) => (formData.available = val as boolean)"
                />
                <Label for="available" class="cursor-pointer">Available</Label>
              </div>

              <DialogFooter>
                <Button type="submit" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Creating...' : 'Create Menu Item' }}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>

    <section class="flex flex-wrap justify-center mt-8 gap-6 mb-20">
      <Card
        v-for="item in items"
        :key="item._id || item.name"
        class="max-w-[300px] min-w-[300px] gap-2 relative"
        :class="{ 'ring-2 ring-red-500': isDeleteMode }"
      >
        <button
          v-if="isDeleteMode && role === 'admin'"
          @click="openDeleteDialog(item)"
          class="absolute -top-3 -right-3 z-10 w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        >
          <X :size="18" :stroke-width="3" />
        </button>

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

    <AlertDialog v-model:open="isDeleteDialogOpen">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete <strong>{{ itemToDelete?.name }}</strong> from the menu.
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction @click="confirmDelete" class="bg-red-600 hover:bg-red-700">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <Footer />
  </main>
</template>
