import React from 'react'

import Content from '../../components/Content'
import Form from '../../components/Form'
import Summary from '../../components/Summary'

import { Container, Wrapper } from './styles'

const Checkout = () => (
  <Container>
    <Content title='Cartão de Crédito'>
      <Form />
    </Content>
    <Wrapper>
      <Summary />
    </Wrapper>
  </Container>
)

export default Checkout
