import React from 'react'
import { Container, div, ShippingCost, Discount, Total } from './styles'

export const Summary = ({ pricesTotal, shippingCost, discount, total }) => {
  return (
    <Container>
      <div>
        <p>Produtos</p>
        <p>RS{pricesTotal}</p>
      </div>
      <div>
        <p>Frete</p>
        <p>R${shippingCost}</p>
      </div>
      <Discount>
        <p>Desconto</p>
        <p>R${discount}</p>
      </Discount>
      <Total>
        <p>Total</p>
        <p>R${total}</p>
      </Total>
    </Container>
  )
}
