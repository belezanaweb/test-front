import { useEffect } from 'react'
import { ProductsList } from 'components/ProductsList'
import { useCart } from 'context/Cart'
import { useGetCart } from 'hooks/api/useGetCart'
import { PageContainer } from 'components/PageContainer'
import { CheckoutSummary } from 'components/CheckoutSummary'
import { ContentWrapper } from 'components/ContentWrapper'

export const Bag = () => {
  const { setCart } = useCart()
  const { data, isLoading, isError, error } = useGetCart()

  console.log(data)

  useEffect(() => {
    if (!isLoading && data) {
      setCart(data)
    }
  }, [data])

  return (
    <PageContainer>
      <ContentWrapper>
        <ProductsList isLoading={isLoading} products={data?.items} />
      </ContentWrapper>
      <CheckoutSummary
        itemsTotal={data?.items.length || 0}
        subTotal={data?.subTotal || 0}
        shippingTotal={data?.shippingTotal || 0}
        discount={data?.discount || 0}
        total={data?.total || 0}
        action={() => {}}
      />
    </PageContainer>
  )
}
