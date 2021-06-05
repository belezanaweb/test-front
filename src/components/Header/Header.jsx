import React from 'react'

import { Wrapper, Container, NavBar, NavLink } from './styles'

function Header() {
  return (
    <Wrapper>
      <Container>
        <NavBar>
          <NavLink to="/cart" activeStyle={{ color: '#FF7800' }}>
            Sacola
          </NavLink>
          <NavLink to="/payment" activeStyle={{ color: '#FF7800' }}>
            Pagamento
          </NavLink>
          <NavLink to="/success" activeStyle={{ color: '#FF7800' }}>
            Confirmação
          </NavLink>
        </NavBar>
      </Container>
    </Wrapper>
  )
}

export default Header
