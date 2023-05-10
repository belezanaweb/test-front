import { useEffect } from 'react'
import { ProductsList } from 'components/ProductsList'
import { useCart } from 'context/Cart'
import { useGetCart } from 'hooks/api/useGetCart'

export const Bag = () => {
  const { setCart } = useCart()
  const { data, isLoading, isError, error } = useGetCart()

  console.log(data)

  useEffect(() => {
    if (!isLoading && data) {
      setCart(data)
    }
  }, [data])

  return <ProductsList isLoading={isLoading} products={data?.items} />
}
