import React from 'react'
import Products from '../../Components/Products/index'
import Total from '../../Components/Total/index'
import Footer from '../../Components/Footer/index'
import { Container, Title } from '../../globalstyles'

export default function Cart({ nav }) {
  return (
    <Container>
      <Title>Produtos</Title>
      <Products />
      <Total />
      <Footer text="Seguir para o pagamento" nav="/payment" />
    </Container>
  )
}
