import { useQuery } from '@tanstack/react-query'
import { BagProductsService } from './bag-products.services'

const STALE_TIME = 10 * 1000
const GET_BAG_PRODUCTS_QUERY_KEY = ''

export const useGetBagProducts = (
) => {
  return useQuery({
    queryKey: [GET_BAG_PRODUCTS_QUERY_KEY],
    queryFn: async () => BagProductsService.getBagProducts(),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  })
}
