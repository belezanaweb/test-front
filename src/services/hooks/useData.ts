import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

type SummaryBilling = {
  subTotal: number,
  shippingTotal: number,
  discount: number,
  total: number,
  totalItems: number
}

export type Product = {
  name: string,
  image: string,
  sku: string,
  price: number,
  maxPrice: number
}

type BagItem = {
  quantity: number,
  product: Product
}

type Bag = {
  summary: SummaryBilling,
  items: BagItem[]
}

async function getData(): Promise<Bag> {
  const { data } = await api.get('d6e9a93f-9741-4494-b81e-637a8e9b8ddd')
  let totalItems = 0

  const items: BagItem[] = data.items.map((item: any) => {
    if (item.quantity > 0) {
      totalItems += item.quantity

      return {
        product: {
          sku: item.product.sku,
          name: item.product.name,
          image: item.product.imageObjects[0].small,
          price: item.product.priceSpecification.price,
          maxPrice: item.product.priceSpecification.maxPrice
        }
      }
    }
  })

  const bag: Bag = {
    summary: {
      subTotal: data.subTotal,
      shippingTotal: data.shippingTotal,
      discount: data.discount,
      total: data.total,
      totalItems: totalItems
    },
    items: items
  }

  return bag
}

export function useData() {
  return useQuery({
    queryKey: ['checkout-data'],
    queryFn: getData
  })
}
