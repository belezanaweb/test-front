import React from 'react'
import { useNavigate } from 'react-router-dom'

import Container from '../components/atoms/Container'
import Button from '../components/atoms/Button'

import ProductPrice from '../components/molecules/ProductPrice'

import Navbar from '../components/organisms/Navbar'
import ProductCard from '../components/organisms/ProductCard'

function Cart() {
  const navigate = useNavigate()

  return (
    <Container>
      <Navbar />
      <ProductCard />
      <ProductPrice />
      <Button func={() => navigate('/pagamento')}>Seguir para o pagamento</Button>
    </Container>
  )
}

export default Cart
