import React from 'react'
import { ContainerPaymentInformations } from './styles'

function PaymentInfomations({ creditCard, name, expiration }) {
  return (
    <ContainerPaymentInformations>
      <p>{creditCard}</p>
      <p>{name}</p>
      <p>{expiration}</p>
    </ContainerPaymentInformations>
  )
}

export default PaymentInfomations
