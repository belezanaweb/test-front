import React from 'react'
import { Title, NavSection, Container } from './styles'

const NavBar = ({ active }) => {
  return (
    <NavSection>
      <Container>
        <Title active={active === '/' ? true : false}>SACOLA</Title>
        <Title active={active === 'payment' ? true : false}>PAGAMENTO</Title>
        <Title active={active === 'checkout' ? true : false}>CONFIRMAÇÃO</Title>
      </Container>
    </NavSection>
  )
}

export default NavBar
