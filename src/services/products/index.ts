import { AxiosResponse } from 'axios'
import { fetch } from '../api'

import { Products } from './interfaces'

const fetchProducts = async (): Promise<AxiosResponse<Products>> => {
  return await fetch('/products')
}

export default fetchProducts
