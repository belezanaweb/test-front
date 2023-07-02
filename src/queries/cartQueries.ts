import { useQuery } from 'react-query'
import api from '../services/api'

export type productProps = {
  name: string,
  imageObjects: {
    thumbnail: string
  }[],
  priceSpecification: {
    price: number,
    originalPrice: number,
    maxPrice: number,
    percent: number,
    discount: number
  }
}

export type itemProps = {
  quantity: number,
  product: productProps
}

export type cartProducts = {
  total: number,
  shippingTotal: number,
  discount: number,
  subTotal: number,
  items: itemProps[]
}

async function getCartProducts(): Promise<cartProducts> {
  const { data } = await api.get('/')
  return data
}

export function useCartProducts() {
  return useQuery(['cartProducts'], getCartProducts)
}
