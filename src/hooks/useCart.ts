import { useQuery } from '@tanstack/react-query'
import getCart from '../services/getCart'

export default function useCart() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCart(),
    refetchOnWindowFocus: false
  })

  return { data, isLoading, isSuccess }
}
