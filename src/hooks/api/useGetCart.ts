import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { Cart } from 'types/api'

export const useGetCart = (): UseQueryResult<Cart, Error> => {
  return useQuery('products', async () => {
    const { data } = await axios.get<Cart>(
      import.meta.env.VITE_API_URL as string
    )

    return data
  })
}
