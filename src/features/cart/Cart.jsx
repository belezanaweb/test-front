import React from 'react'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'

const CartFeature = () => {
  return (
    <Container title="Produtos">
      <Button toPage="payment">seguir para pagamento</Button>
    </Container>
  )
}

export default CartFeature
