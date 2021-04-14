import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import NextStepButton from '../../components/NextStepButton/NextStepButton'
import Subtitle from '../../components/Subtitle/Subtitle'
import TotalCard from '../../components/TotalCard/TotalCard'
import { goToConfirmationPage } from '../../router/Coordinator'

const PaymentPage = () => {
  const history = useHistory()
  const [cart, setCart] = useState()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')))
  }, [])

  return (
    <div>
      <Header />
      <Subtitle text="CARTÃO DE CRÉDITO" />
      {cart && (
        <TotalCard
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
          total={cart.total}
        />
      )}
      <NextStepButton text="FINALIZAR O PEDIDO" onClick={() => goToConfirmationPage(history)} />
      {console.log(cart)}
    </div>
  )
}

export default PaymentPage
