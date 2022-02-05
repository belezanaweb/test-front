import React from 'react'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import ProductList from '../../components/ProductList/ProductList'

const CartFeature = () => {
  return (
    <Container title="Produtos">
      <ProductList />
      <Button toPage="payment">seguir para pagamento</Button>
    </Container>
  )
}

export default CartFeature
