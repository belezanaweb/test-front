import React from 'react'

import formatCurrencyBRL from '../../utils/formatCurrencyBRL'

import { Container, Content } from './styles'

const Total = ({ subTotal, shipping, discount, total }) => (
  <Container>
    <Content>
      <p>produtos</p>
      <p>{formatCurrencyBRL(parseFloat(subTotal))}</p>
    </Content>
    <Content>
      <p>frete</p>
      <p>{formatCurrencyBRL(parseFloat(shipping))}</p>
    </Content>
    <Content className={'orange'}>
      <p>desconto</p>
      <p>{`- ${formatCurrencyBRL(parseFloat(discount))}`}</p>
    </Content>
    <Content>
      <p>total</p>
      <p>{formatCurrencyBRL(parseFloat(total))}</p>
    </Content>
  </Container>
)

export default Total
