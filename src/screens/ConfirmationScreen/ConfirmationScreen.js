import React, { useContext, useEffect } from 'react'
import PriceCard from '../../components/PriceCard/PriceCard'
import GlobalStateContext from '../../global/GlobalStateContext'
import Loading from '../../components/Loading'
import success from '../../assets/success.png'
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid'
import { PaymentContainer, Success, SuccessContainer, Title } from './styles'
import PaymentCard from '../../components/PaymentCard/PaymentCard'

const ConfirmationScreen = () => {
  const { cart, getProducts, products, userCard } = useContext(GlobalStateContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <PaymentContainer>
      <SuccessContainer>
        {' '}
        <div>
          <Success src={success} />
        </div>
        <Title>PAGAMENTO</Title>
        <PaymentCard cardNumber={userCard.cardNumber} name={userCard.name} date={userCard.date} />
      </SuccessContainer>
      {cart ? (
        <div>
          <Title>PRODUTOS</Title>
          <ProductsGrid products={products} />
          <PriceCard
            subTotal={cart.subTotal}
            shipping={cart.shippingTotal}
            discount={cart.discount}
          />
        </div>
      ) : (
        <Loading />
      )}
    </PaymentContainer>
  )
}

export default ConfirmationScreen
