import React from 'react'

import Messagem from '../../components/Messagem'
import Billy from '../../components/Billy'
import Content from '../../components/Content'
import Products from '../../components/Products'
import Summary from '../../components/Summary'

import { Container, Wrapper } from './styles'

const Finish = () => (
  <Container>
    <Messagem />
    <Content title='Pagamento'>
      <Billy />
    </Content>
    <Content title='Produtos'>
      <Products isFinish />
    </Content>
    <Wrapper>
      <Summary />
    </Wrapper>
  </Container>
)

export default Finish
