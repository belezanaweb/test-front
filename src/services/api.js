import axios from 'axios'

import { BASE_URL } from 'constants/config'

export const api = axios.create({
  baseURL: BASE_URL
})
