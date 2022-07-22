import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://www.mocky.io/v2/',
  headers: {
    'Content-Type': 'application/json'
  }
})
