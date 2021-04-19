import React from 'react'
import { Container, Text, TextDiscount, TextTotal } from './styled'

const Price = (props) => {
  return (
    <Container>
      <div>
        <Text>PRODUTOS</Text>
        <Text>FRETE</Text>
        <TextDiscount>DESCONTO</TextDiscount>
        <TextTotal>TOTAL</TextTotal>
      </div>
      <div>
        <Text>R$ {props.subTotal}0</Text>
        <Text>R$ {props.shippingTotal}</Text>
        <TextDiscount>- R$ {props.discount}</TextDiscount>
        <TextTotal>R$ {props.total}</TextTotal>
      </div>
    </Container>
  )
}

export { Price }
