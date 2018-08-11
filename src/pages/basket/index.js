import React from 'react'

import Content from '../../components/Content'
import Products from '../../components/Products'
import Summary from '../../components/Summary'
import Button from '../../components/Button'

import { Container } from './styles'

const Basket = () => (
  <Container>
    <Content title='Produtos'>
      <Products />
    </Content>
    <Summary />
    <Button to='/checkout' go>
      Seguir para o pagamento
    </Button>
  </Container>
)

export default Basket
