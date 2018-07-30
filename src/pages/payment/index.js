import React from 'react'

import { Container } from './styles'

import Title from '../../components/Title'
import ItemBox from '../../components/ItemBox'

const Payment = () => (
  <Container>
    <Title title="CARTÃO DE CRÉDITO" color="#999" />
    <ItemBox boxHeight={279}>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </ItemBox>
  </Container>
)

export default Payment
