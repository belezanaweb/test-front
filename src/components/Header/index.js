import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/cart">Sacola</NavLink>
      <NavLink to="/payment">Pagamento</NavLink>
      <NavLink to="/success">Confirmação</NavLink>
    </HeaderContainer>
  )
}
