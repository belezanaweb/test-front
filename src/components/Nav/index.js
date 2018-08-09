import React from 'react'
import { Container, List, Item, Link } from './styles'

const Nav = () => (
  <Container>
    <List>
      <Item>
        <Link href='/basket'>Sacola</Link>
      </Item>

      <Item>
        <Link href='/checkout'>Pagamento</Link>
      </Item>

      <Item>
        <Link href='/finish'>Confirmação</Link>
      </Item>
    </List>
  </Container>
)

export default Nav
