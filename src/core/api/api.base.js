import axios from 'axios'
import { REACT_APP_API_URL } from '../../utils/constants'

const baseAPI = axios.create({
  baseURL: REACT_APP_API_URL
})

export default baseAPI
