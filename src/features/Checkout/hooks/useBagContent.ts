import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { URI_BASE } from '../../../constants'

export const getBagContentResolve = async () => {
  const id = 'd6e9a93f-9741-4494-b81e-637a8e9b8ddd'
  return (await axios.get(`${URI_BASE}/${id}`))?.data
}

export const bagContentQueryKey = ['bag-content']

export const useBagContent = () => {
  return useQuery({ queryKey: bagContentQueryKey, queryFn: getBagContentResolve })
}