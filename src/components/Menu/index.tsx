import React from 'react'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/' | '/payment' | '/success' | string
}

const Menu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <S.Link href="/" isActive={activeLink === '/'} title="Sacola">
        <span>SACOLA</span>
      </S.Link>

      <S.Link
        href="/payment"
        isActive={activeLink === '/payment'}
        title="Pagamento"
      >
        <span>PAGAMENTO</span>
      </S.Link>

      <S.Link
        href="/success"
        isActive={activeLink === '/success'}
        title="Confirmação"
      >
        <span>CONFIRMAÇÃO</span>
      </S.Link>
    </S.Nav>
  )
}

export default Menu
