import React from 'react'
import Button from '../../components/Button'
import CreditCardForm from '../../components/CreditCardForm'
import Informations from '../../components/Informations'

function Payment() {
  return (
    <main>
      <h5>Cartão de crédito</h5>
      <CreditCardForm />
      <Informations />
      <Button>Finalizar o pedido</Button>
    </main>
  )
}

export default Payment
