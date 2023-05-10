import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from 'context/Cart'
import { useGetCart } from 'hooks/api/useGetCart'

import { PageContainer } from 'components/PageContainer'
import { CheckoutSummary } from 'components/CheckoutSummary'
import { ContentWrapper } from 'components/ContentWrapper'

import { CreditCardForm } from 'components/CreditCardForm'

export const Payment = () => {
  const { setCart } = useCart()
  const { data, isLoading, isError, error } = useGetCart()
  const navigate = useNavigate()

  console.log(data)

  useEffect(() => {
    if (!isLoading && data) {
      setCart(data)
    }
  }, [data])

  return (
    <PageContainer>
      <ContentWrapper>
        <CreditCardForm />
      </ContentWrapper>

      <CheckoutSummary
        itemsTotal={data?.items.length}
        subTotal={data?.subTotal}
        shippingTotal={data?.shippingTotal}
        discount={data?.discount}
        total={data?.total}
        buttonTitle="Finalizar pedido"
        action={() => navigate('/confirmation')}
      />
    </PageContainer>
  )
}
