import React from 'react'

import { useCheckout } from '../../hooks/checkout'

import { Container, Text } from './styles'

function PaymentSummary() {
  const {
    paymentInfo: { cardNumber, cardName, cardValid }
  } = useCheckout()

  return (
    <Container>
      <Text>{'****.****.****.' + cardNumber?.substr(cardNumber.length - 4)}</Text>
      <Text>{cardName}</Text>
      <Text>{cardValid}</Text>
    </Container>
  )
}

export default PaymentSummary
