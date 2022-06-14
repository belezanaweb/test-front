import React from 'react'
import { useSelector } from 'react-redux'
import { Container, div, ShippingCost, Discount, Total } from './styles'

export const Summary = ({ pricesTotal, shippingCost, discount, total }) => {
  const summaryInfo = useSelector((state) => state.summary)
  console.log(summaryInfo)
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
