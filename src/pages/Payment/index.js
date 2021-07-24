import React from 'react'
import Button from '../../components/Button'
import CreditCardForm from '../../components/CreditCardForm'
import Informations from '../../components/Informations'
import { useCheckout } from '../../hooks/useCheckout'

function Payment() {
  const { data } = useCheckout()

  const { discount, shippingTotal, subTotal, total, items } = data

  return (
    <main>
      <h5>Cartão de crédito</h5>
      <CreditCardForm />
      <Informations
        discount={discount}
        shipping={shippingTotal}
        subtotal={subTotal}
        total={total}
      />
      <Button>Finalizar o pedido</Button>
    </main>
  )
}

export default Payment
