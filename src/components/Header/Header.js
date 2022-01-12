import React from 'react'

import { HeaderContainer, HeaderContent, HeaderText } from './Header.elements'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderText>SACOLA</HeaderText>
        <HeaderText>PAGAMENTO</HeaderText>
        <HeaderText>CONFIRMAÇÃO</HeaderText>
      </HeaderContent>
    </HeaderContainer>
  )
}
