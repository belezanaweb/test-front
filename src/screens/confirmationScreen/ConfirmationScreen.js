import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import PaymentCard from '../../components/PaymentCard/PaymentCard'
import GlobalStateContext from '../../global/globalStateContext'
import success from '../../assets/image/success.png'
import { ConfirmContainer, Success, SucessContainer, Text } from './styled'
import Loading from '../../components/Loading'
import ProductCardConfirm from '../../components/ProductCard/ProductCardConfirm'
import PriceCard from '../../components/PriceCard/PriceCard'

function ConfirmationScreen() {
  const { card, cart, products, getProducts } = useContext(GlobalStateContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Header />
      <SucessContainer>
        <Success src={success} />
      </SucessContainer>

      <Text>PAGAMENTO</Text>
      <PaymentCard
        cardNumber={card.cardNumber}
        name={card.name}
        expirationDate={card.expirationDate}
      />

      <Text>PRODUTOS</Text>
      {cart === 0 ? (
        <Loading />
      ) : (
        <div>
          <ProductCardConfirm products={products} />
          <PriceCard
            subTotal={cart.subTotal}
            shippingTotal={cart.shippingTotal}
            discount={cart.discount}
            total={cart.total}
          />
        </div>
      )}
    </div>
  )
}

export default ConfirmationScreen
