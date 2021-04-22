import axios from 'axios'

const api = axios.create({
  baseURL: 'http://www.mocky.io'
})

export default api
