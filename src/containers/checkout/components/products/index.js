import React from 'react'
import { Container, Content } from './styles'

import Product from '../product'

const Products = ({ products }) => {
  return (
    <Container>
      <h3>PRODUTOS</h3>

      <Content>
        {products?.items.map(({ product }) => (
          <Product key={product.sku} product={product} />
        ))}
      </Content>
    </Container>
  )
}

export default Products
