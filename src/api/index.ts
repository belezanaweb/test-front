import axios from 'axios'

const belezaNaWebApi = axios.create({
  baseURL: 'http://www.mocky.io/v2/'
})

export { belezaNaWebApi }
