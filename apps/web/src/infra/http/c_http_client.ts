import axios from 'axios'
import { HttpClient } from './http_client'

export class CHttpClient implements HttpClient {
  async get(url: string): Promise<any> {
    try {
      return await axios.get(url)
    } catch (error) {
      return error
    }
  }
}
