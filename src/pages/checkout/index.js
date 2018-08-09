import React from 'react'

import Content from '../../components/Content'
import Summary from '../../components/Summary'
import Button from '../../components/Button'

import { Container } from './styles'

const Checkout = () => (
  <Container>
    <Content title='Cartão de Crédito' />
    <Summary />
    <Button>Finalizar o pedido</Button>
  </Container>
)

export default Checkout
