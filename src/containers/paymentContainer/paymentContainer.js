import React from 'react'
import { CardForm } from './components/cardForm'

export default function payment() {
  return (
    <div className="payment">
      <div className="paymentTitle">CARTÃO DE CRÉDITO</div>
      <CardForm />
    </div>
  )
}
