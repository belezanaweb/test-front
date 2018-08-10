import React from 'react'

import Message from '../../components/Message'
import Content from '../../components/Content'
import Products from '../../components/Products'
import Summary from '../../components/Summary'

import { Container } from './styles'

const Finish = () => (
  <Container>
    <Message />
    <Content title='Pagamento'>Pagamento</Content>
    <Content title='Produtos'>
      <Products isFinish />
    </Content>
    <Summary />
  </Container>
)

export default Finish
