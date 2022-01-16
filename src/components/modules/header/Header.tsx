import React from 'react'
import { useLocation } from 'react-router-dom'

import { CART_PATH, PAYMENT_PATH, PAYMENT_SUCCESS_PATH } from '../../../constants/paths'

import { StyledHeader, StyledHeaderNav, StyledHeaderNavItem } from './Header.styled'

function Header(): JSX.Element {
  const location = useLocation()

  function isCurrentPath(path: string) {
    return location.pathname === path
  }

  return (
    <StyledHeader>
      <StyledHeaderNav>
        <StyledHeaderNavItem active={isCurrentPath(CART_PATH)}>Sacola</StyledHeaderNavItem>
        <StyledHeaderNavItem active={isCurrentPath(PAYMENT_PATH)}>Pagamento</StyledHeaderNavItem>
        <StyledHeaderNavItem active={isCurrentPath(PAYMENT_SUCCESS_PATH)}>
          Confirmação
        </StyledHeaderNavItem>
      </StyledHeaderNav>
    </StyledHeader>
  )
}

export default Header
