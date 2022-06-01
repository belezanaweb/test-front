import React from 'react'

import Container from '../components/micro/Container'
import Button from '../components/micro/Button'

import Navbar from '../components/sections/Navbar'
import ProductCard from '../components/sections/ProductCard'

function Cart() {
  return (
    <Container>
      <Navbar />
      <ProductCard />
      <Button>Seguir para o pagamento</Button>
    </Container>
  )
}

export default Cart
