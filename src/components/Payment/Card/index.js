import React from 'react'
import { Container, Text } from './styled'

const Card = (props) => {
  return (
    <Container>
      <Text>{props.cardNumber}</Text>
      <Text>{props.name}</Text>
      <Text>{props.expirationDate}</Text>
    </Container>
  )
}

export { Card }
