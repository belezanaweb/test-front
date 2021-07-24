import React from 'react'
import { useLocation } from 'react-router'
import { HeaderContainer, Item } from './styles'

export const Header = () => {
  const location = useLocation()

  return (
    <HeaderContainer>
      <Item active={location.pathname === '/'}>Sacola</Item>
      <Item active={location.pathname === '/payment'}>Pagamento</Item>
      <Item active={location.pathname === '/success'}>Confirmação</Item>
    </HeaderContainer>
  )
}
