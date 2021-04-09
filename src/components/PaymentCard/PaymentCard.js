import React from 'react'
import { CardContainer, Title } from './styles'

const PaymentCard = ({ cardNumber, name, date }) => {
  return (
    <CardContainer>
      <Title>{cardNumber}</Title>
      <Title>{name}</Title>
      <Title>{date}</Title>
    </CardContainer>
  )
}

export default PaymentCard
