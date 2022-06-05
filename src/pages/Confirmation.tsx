import React from 'react'

import Container from '../components/atoms/Container'
import { Content } from '../components/atoms/Container/styles'

import ProductPrice from '../components/molecules/ProductPrice'

import Navbar from '../components/organisms/Navbar'
import PaymentSuccess from '../components/organisms/PaymentSuccess'
import ProductCard from '../components/organisms/ProductCard'

function Confirmation() {
  return (
    <Container>
      <Navbar />
      <Content>
        <PaymentSuccess />
        <ProductCard />
        <ProductPrice />
      </Content>
    </Container>
  )
}

export default Confirmation
