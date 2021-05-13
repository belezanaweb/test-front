import axios from 'axios'

export const mock = axios.create({
  baseURL: 'http://www.mocky.io/v2/'
})
