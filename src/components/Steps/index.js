import React from 'react'
import { Container, List, Item } from './styles'

const Steps = () => (
  <Container>
    <List>
      <Item isActive>Sacola</Item>
      <Item>Pagamento</Item>
      <Item>Confirmação</Item>
    </List>
  </Container>
)

export default Steps
