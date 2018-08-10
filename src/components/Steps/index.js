import React from 'react'
import { withRouter } from 'react-router-dom'

import { Container, List, Item } from './styles'

const Steps = props => (
  <Container>
    <List>
      <Item isActive>Sacola</Item>
      <Item>Pagamento</Item>
      <Item>Confirmação</Item>
    </List>
  </Container>
)

export default withRouter(Steps)
