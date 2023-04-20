import axios from 'axios'

const URL = process.env.REACT_APP_BASE_URL_ENDPOINT

const instance = axios.create({
  baseURL: URL,
  timeout: 30000,
})

export const fetch = async (resource: string) => {
  return await instance.get(resource)
}

export default instance
