import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Container from '../components/atoms/Container'
import Button from '../components/atoms/Button'
import { Content } from '../components/atoms/Container/styles'
import { Loading } from '../components/atoms/Loading/styles'

import ProductPrice from '../components/molecules/ProductPrice'

import Navbar from '../components/organisms/Navbar'
import ProductCard from '../components/organisms/ProductCard'

import { useCheckout } from '../providers/checkout'

function Cart() {
  const navigate = useNavigate()
  const { setProductData } = useCheckout()
  const [loading, setLoading] = useState(true)

  async function getProductsPrice() {
    const response = await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    const data = await response.data
    setProductData(data)
    setLoading(false)
  }

  useEffect(() => {
    getProductsPrice()
  }, [])

  return (
    <Container>
      <Navbar />
      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <Content>
          <ProductCard />
          <ProductPrice />
          <Button func={() => navigate('/pagamento')}>Seguir para o pagamento</Button>
        </Content>
      )}
    </Container>
  )
}

export default Cart
