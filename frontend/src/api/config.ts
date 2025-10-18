import axios from 'axios'

export const apiUrl = "http://localhost:3000/api"
const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
