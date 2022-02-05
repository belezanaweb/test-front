import React from 'react'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import ProductList from '../../components/ProductList/ProductList'
import Total from '../../components/Total/Total'

const CartFeature = () => {
  return (
    <>
      <Container title="Produtos">
        <ProductList />
      </Container>

      <Total></Total>

      <Button toPage="payment">seguir para pagamento</Button>
    </>
  )
}

export default CartFeature
