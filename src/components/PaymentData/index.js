import React from 'react'
import { Container } from './styles'

const PaymentData = ({ creditCard, name, expiration }) => {
  return (
    <Container>
      <p>{creditCard}</p>
      <p>{name}</p>
      <p>{expiration}</p>
    </Container>
  )
}

export default PaymentData
