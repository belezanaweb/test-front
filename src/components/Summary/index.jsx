import React from 'react'
import { useSelector } from 'react-redux'
import { Container, div, ShippingCost, Discount, Total } from './styles'

export const Summary = ({ pricesTotal, shippingCost, discount, total }) => {
  const summaryInfo = useSelector((state) => state.summary)
  return (
    <Container>
      <div>
        <p>Produtos</p>
        <p>RS {summaryInfo.subTotal.toFixed(2)}</p>
      </div>
      <div>
        <p>Frete</p>
        <p>R$ {summaryInfo.shippingCost.toFixed(2)}</p>
      </div>
      <Discount>
        <p>Desconto</p>
        <p>R$ {summaryInfo.discount.toFixed(2)}</p>
      </Discount>
      <Total>
        <p>Total</p>
        <p>R$ {summaryInfo.total.toFixed(2)}</p>
      </Total>
    </Container>
  )
}
