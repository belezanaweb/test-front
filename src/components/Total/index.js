import React from 'react'

import formatCurrencyBRL from '../../utils/formatCurrencyBRL'

import { Container, Content } from './styles'

const Total = ({ subTotal, shipping, discount, total }) => (
  <Container>
    <Content>
      <p>produtos</p>
      <p>{formatCurrencyBRL(subTotal)}</p>
    </Content>
    <Content>
      <p>frete</p>
      <p>{formatCurrencyBRL(shipping)}</p>
    </Content>
    <Content className={'orange'}>
      <p>desconto</p>
      <p>{`- ${formatCurrencyBRL(discount)}`}</p>
    </Content>
    <Content>
      <p>total</p>
      <p>{formatCurrencyBRL(total)}</p>
    </Content>
  </Container>
)

export default Total
