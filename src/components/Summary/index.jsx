import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Discount, Total } from './styles'

export const Summary = ({ pricesTotal, shippingCost, discount, total }) => {
  const summaryInfo = useSelector((state) => state.summary)
  return (
    <Container>
      <div>
        <p>Produtos</p>
        <p data-testid="subTotal">R$ {summaryInfo.subTotal.toFixed(2)}</p>
      </div>
      <div>
        <p>Frete</p>
        <p data-testid="shippingTotal">R$ {summaryInfo.shippingCost.toFixed(2)}</p>
      </div>
      <Discount>
        <p>Desconto</p>
        <p data-testid="discount">R$ {summaryInfo.discount.toFixed(2)}</p>
      </Discount>
      <Total>
        <p>Total</p>
        <p data-testid="total">R$ {summaryInfo.total.toFixed(2)}</p>
      </Total>
    </Container>
  )
}
