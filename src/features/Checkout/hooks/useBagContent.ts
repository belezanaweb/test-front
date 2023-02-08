import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getBagContentResolve = async () => {
  return (await axios.get('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd'))?.data
}

export const bagContentQueryKey = ['bag-content']

export const useBagContent = () => {
  return useQuery<any>({ queryKey: bagContentQueryKey, queryFn: getBagContentResolve })
}