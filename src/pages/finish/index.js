import React from 'react'

import Message from '../../components/Message'
import Bill from '../../components/Bill'
import Content from '../../components/Content'
import Products from '../../components/Products'
import Summary from '../../components/Summary'

import { Container, Wrapper } from './styles'

const Finish = () => (
  <Container>
    <Message />
    <Content title='Pagamento'>
      <Bill />
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
