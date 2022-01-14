import React from 'react'
import { useLocation } from 'react-router-dom'

import { HeaderContainer, HeaderContent, HeaderText } from './Header.elements'

export default function Header() {
  const { pathname } = useLocation()

  const walletIsActive = pathname === '/wallet'
  const paymentIsActive = pathname === '/payment'
  const confirmationIsActive = pathname === '/confirmation'

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderText active={walletIsActive}>SACOLA</HeaderText>
        <HeaderText active={paymentIsActive}>PAGAMENTO</HeaderText>
        <HeaderText active={confirmationIsActive}>CONFIRMAÇÃO</HeaderText>
      </HeaderContent>
    </HeaderContainer>
  )
}
