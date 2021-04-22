import React from 'react'

import { Header } from '../Header'

import { Nav } from './styles'

export const NavBar = () => (
  <Header>
    <Nav to="/cart">SACOLA</Nav>
    <Nav to="/payment">PAGAMENTO</Nav>
    <Nav to="/checkoutconfirm">CONFIRMAÇÃO</Nav>
  </Header>
)
