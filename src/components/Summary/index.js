import React from 'react'

import Detail from './Detail'

import { Container } from './styles'

const Summary = () => (
  <Container>
    <Detail title='Produtos' value='R$ 624,80' />
    <Detail title='Frete' value='R$ 5,30' />
    <Detail title='Desconto' value='- R$ 30,00' isHighlight />
    <Detail title='Total' value='R$ 600,10' isBold />
  </Container>
)

export default Summary
