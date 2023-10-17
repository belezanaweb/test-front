import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd',
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
    }
    return Promise.reject(error)
  }
)
