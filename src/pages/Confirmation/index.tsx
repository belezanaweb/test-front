import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import { useCart } from 'context/Cart'

import { ProductsList } from 'components/ProductsList'
import { PageContainer } from 'components/PageContainer'
import { CheckoutSummary } from 'components/CheckoutSummary'
import { ContentWrapper } from 'components/ContentWrapper'
import { CheckoutConfirmation } from 'components/CheckoutConfirmation'

export const Confirmation = () => {
  const { cart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  if (!location.state?.payment) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <PageContainer>
      <ContentWrapper>
        <CheckoutConfirmation
          title="Compra efetuada com sucesso"
          creditCardName={location.state.payment.cardName}
          creditCardNumber={location.state.payment.cardNumber}
          creditCardExpiration={location.state.payment.cardExpiration}
        />
        <ProductsList
          title="Produtos"
          showPrice={false}
          products={cart?.items}
        />
      </ContentWrapper>

      <CheckoutSummary
        itemsTotal={cart?.items.length}
        subTotal={cart?.subTotal}
        shippingTotal={cart?.shippingTotal}
        discount={cart?.discount}
        total={cart?.total}
        buttonTitle="Voltar ao inicio do protótipo"
        buttonType="default"
        action={() => navigate('/')}
      />
    </PageContainer>
  )
}
