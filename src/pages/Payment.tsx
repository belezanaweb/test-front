import React from 'react'

import Container from '../components/atoms/Container'
import Button from '../components/atoms/Button'

import Navbar from '../components/organisms/Navbar'
import CreditCard from '../components/organisms/CreditCard'

function Payment() {
  return (
    <Container>
      <Navbar />
      <CreditCard />
      <Button>Finalizar pedido</Button>
    </Container>
  )
}

export default Payment
