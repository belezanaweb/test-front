import { useQuery } from "react-query"

export const BASE_URL = 'https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd'


const getData = async () => {
  const result = await fetch(BASE_URL)
  return await result.json()
}

type FetchCart = {
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
  items: Array<{
    quantity: number
    product: {
      name: string
      imageObjects: Array<{ small: string }>
      priceSpecification: {
        price: number
        maxPrice: number
      }
    }
  }>
}

const  useCart = () => {
  return useQuery<FetchCart>({ queryKey: ['cart'], queryFn: getData })
}

export default useCart
