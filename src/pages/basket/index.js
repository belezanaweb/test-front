import React from 'react'

import Content from '../../components/Content'
import Products from '../../components/Products'

import { Container } from './styles'

const Basket = () => (
  <Container>
    <Content title='Produtos'>
      <Products />
    </Content>
  </Container>
)

export default Basket
