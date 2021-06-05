import React from 'react'

import { Container, Products, Discount, Shipping, Total, Title, Price } from './styles'

import { toCurrency } from '../../utils/currency'

function CartSummary({ cartSummary, isLoading }) {
  if (isLoading) {
    return <Container>Carregando...</Container>
  }

  return (
    <Container>
      <Products>
        <Title>Produtos</Title>
        <Price>{toCurrency(cartSummary.subTotal)}</Price>
      </Products>

      <Shipping>
        <Title>Frete</Title>
        <Price>{toCurrency(cartSummary.shippingTotal)}</Price>
      </Shipping>

      <Discount>
        <Title>Desconto</Title>
        <Price>{toCurrency(cartSummary.discount)}</Price>
      </Discount>

      <Total>
        <Title>Total</Title>
        <Price>{toCurrency(cartSummary.total)}</Price>
      </Total>
    </Container>
  )
}

export default CartSummary
