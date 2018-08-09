import React from 'react'

import Content from '../../components/Content'
import Products from '../../components/Products'
import Summary from '../../components/Summary'

import { Container } from './styles'

const Basket = () => (
  <Container>
    <Content title='Produtos'>
      <Products />
    </Content>

    <Summary />
  </Container>
)

export default Basket
