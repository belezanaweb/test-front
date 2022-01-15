import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

function GET(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  return axios.get(path, config)
}

export default {
  GET
}
