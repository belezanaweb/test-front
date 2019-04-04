import React from 'react'

import Content from '../../components/Content'
import Products from '../../components/Products'
import Summary from '../../components/Summary'
import Botton from '../../components/Botton'

import { Container, Wrapper } from './styles'

const Cart = () => (
  <Container>
    <Content title='Produtos'>
     <Products />
    </Content>
    <Wrapper>
      <Summary />
      <Botton to='/checkout' go>
        Seguir para o pagamento
      </Botton>
    </Wrapper>
  </Container>
)

export default Cart