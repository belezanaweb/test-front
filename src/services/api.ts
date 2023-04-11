import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/',
  timeout: 5000
})
