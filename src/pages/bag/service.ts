import { belezaNaWebApi } from '../../api'

type ProductResponse = {
  items: ProductBag[]
}

export const getProducts = async () => {
  const { data } = await belezaNaWebApi.get<ProductResponse>('5b15c4923100004a006f3c07')
  return data.items
}
