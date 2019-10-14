import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { StyledHeader } from './style'

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <NavLink to="/cart">Sacola</NavLink>
        <NavLink to="/payments">Pagamento</NavLink>
        <NavLink to="/success">Confirmação</NavLink>
      </StyledHeader>
    )
  }
}

export default Header
