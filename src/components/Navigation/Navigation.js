import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 4px 6px 4px 10px;
  margin-bottom: 10px;
`

const StyledLink = styled(NavLink)`
  color: #ccc;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 10px 7px 10px;
  text-decoration: none;
  &.active {
    color: #ff7800;
  }
`

function Navigation() {
  return (
    <StyledNav>
      <StyledLink to="/">Sacola</StyledLink>
      <StyledLink to="/pagamento">Pagamento</StyledLink>
      <StyledLink to="/confirmacao">Confirmação</StyledLink>
    </StyledNav>
  )
}

export default Navigation
