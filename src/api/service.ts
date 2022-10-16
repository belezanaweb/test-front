import { api } from './api'
import { ProductCart } from '../interfaces/ProductCart.interface'

export const getProducts = async (): Promise<ProductCart> => {
  const { data } = await api.get<ProductCart>
    ('5b15c4923100004a006f3c07',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  return data
}
