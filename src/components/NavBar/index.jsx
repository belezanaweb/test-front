import React from 'react'
import { Nav, CustomLink } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <CustomLink to="/">Sacola</CustomLink>
      <CustomLink to="/payment">Pagamento</CustomLink>
      <CustomLink to="/confirmation">Confirmação</CustomLink>
    </Nav>
  )
}
