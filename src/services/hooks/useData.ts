import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

export function useData() {
  return useQuery({
    queryKey: ['checkout-data'],
    queryFn: async () => {
      const response = await api.get('d6e9a93f-9741-4494-b81e-637a8e9b8ddd')

      return response
    }
  })
}
