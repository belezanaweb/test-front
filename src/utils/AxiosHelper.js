import axios from 'axios'
import { withRouter } from 'react-router-dom'
import config from './config'

// Triggered somewhere

const axiosInstance = axios.create({
  timeout: config.timeoutApi
})

axiosInstance.interceptors.request.use(
  (configAxios) => {
    let token = ''
    const configCustom = configAxios
    token = localStorage.getItem('accessTokenDefault')

    if (token) {
      configCustom.headers.Authorization = `Bearer ${token}`
    }

    return configCustom
  },
  (error) => Promise.reject(error)
)

export default withRouter(axiosInstance)
