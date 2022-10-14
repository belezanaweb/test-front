import axios from 'axios'
import { ProductCart } from '../../interfaces/ProductCart.interface'

export const getProducts = async (): Promise<ProductCart[]> => {
  const result =
    await axios.get<
    ProductCart[] >
    ('http://www.mocky.io/v2/5b15c4923100004a006f3c07',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  return result.data;
}
