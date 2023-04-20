import { useQuery } from 'react-query'
import { fetchProducts } from 'services'

const useCheckout = () => {
  const { isLoading, isError, data, error } = useQuery('repoData', fetchProducts, {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return {
    isLoading,
    isError,
    data,
    error,
  }
}

export default useCheckout
