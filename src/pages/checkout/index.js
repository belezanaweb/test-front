import React from 'react'

import Content from '../../components/Content'
import Form from '../../components/Form'
import Summary from '../../components/Summary'

import { Container } from './styles'

const Checkout = () => (
  <Container>
    <Content title='Cartão de Crédito'>
      <Form />
    </Content>
    <Summary />
  </Container>
)

export default Checkout
