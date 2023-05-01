import { useQuery } from '@tanstack/react-query'
import getCart from '../services/getCart'

export default function useCart() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      try {
        return getCart()
      } catch (error) {
        throw error
      }
    },
    refetchOnWindowFocus: false
  })

  return { data, isLoading, isError }
}
