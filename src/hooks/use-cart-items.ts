import { apiClient } from '@/services/api-client'
import { useQuery } from '@tanstack/react-query'

import { CartApiResponse } from '@/types'

export const fetchCartItems = async () => {
  const response = await apiClient.get<CartApiResponse>('d6e9a93f-9741-4494-b81e-637a8e9b8ddd')
  return response.data
}

export const cartItemsQueryKey = 'cart-items'

export const useCartItems = () =>
  useQuery({
    queryKey: [cartItemsQueryKey],
    queryFn: fetchCartItems,
    staleTime: 10000
  })
