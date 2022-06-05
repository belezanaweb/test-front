import React from 'react'

import Container from '../components/atoms/Container'

import ProductPrice from '../components/molecules/ProductPrice'

import Navbar from '../components/organisms/Navbar'
import PaymentSuccess from '../components/organisms/PaymentSuccess'
import ProductCard from '../components/organisms/ProductCard'

function Confirmation() {
  return (
    <Container>
      <Navbar />
      <PaymentSuccess />
      <ProductCard />
      <ProductPrice />
    </Container>
  )
}

export default Confirmation
