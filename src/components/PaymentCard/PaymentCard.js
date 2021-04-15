import React from 'react'
import { DivContainer, Text } from './styled'

function PaymentCard(props) {
  return (
    <DivContainer>
      <Text>{props.cardNumber}</Text>
      <Text>{props.name}</Text>
      <Text>{props.expirationDate}</Text>
    </DivContainer>
  )
}

export default PaymentCard
