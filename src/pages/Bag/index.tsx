import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from 'context/Cart'
import { useGetCart } from 'hooks/api/useGetCart'

import { ProductsList } from 'components/ProductsList'
import { PageContainer } from 'components/PageContainer'
import { CheckoutSummary } from 'components/CheckoutSummary'
import { ContentWrapper } from 'components/ContentWrapper'

export const Bag = () => {
  const { setCart } = useCart()
  const { data, isLoading } = useGetCart()
  const navigate = useNavigate()

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
        itemsTotal={data?.items.length}
        subTotal={data?.subTotal}
        shippingTotal={data?.shippingTotal}
        discount={data?.discount}
        total={data?.total}
        buttonTitle="Seguir para o pagamento"
        action={() => navigate('/payment')}
      />
    </PageContainer>
  )
}
