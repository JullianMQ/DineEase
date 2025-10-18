import { toast } from '@/components/ui/toast'
import axios from 'axios'

export const apiUrl = "http://localhost:3000/api"
const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const confirmReservation = async (id: string) => {
  await axiosInstance.put(`${apiUrl}/reservations/${id}`, {
    status: 'Confirmed'
  })

  toast({
    title: "Success",
    description: "Reservation was confirmed successfully"
  })
}

export const cancelReservation = async (id: string) => {
  await axiosInstance.put(`${apiUrl}/reservations/${id}`, {
    status: 'Cancelled'
  })

  toast({
    title: "Success",
    description: "Reservation was cancelled successfully"
  })
}

export default axiosInstance
