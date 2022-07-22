import React from 'react'
import { Container, SectionContainer, Title } from './style'
import { Product } from '../Product'

export const CartItems = ({ products }) => {
  return (
    <SectionContainer>
      <Title>Produtos</Title>
      <Container>
        {products
          ? products.map((product) => <Product key={product?.product?.sku} {...product.product} />)
          : ''}
      </Container>
    </SectionContainer>
  )
}
