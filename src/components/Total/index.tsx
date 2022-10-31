import React from 'react'

import formatCurrencyBRL from '../../utils/formatCurrencyBRL'

import { Container, Content } from './styles'

interface Props {
  subTotal: number
  shipping: number
  discount: number
  total: number
}

const Total: React.FC<Props> = ({ subTotal, shipping, discount, total }) => (
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
