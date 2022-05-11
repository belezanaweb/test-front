import {
  CheckSquare,
  CreditCardFront,
  ShoppingBag
} from '@styled-icons/boxicons-regular'
import React from 'react'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/' | '/payment' | '/success' | string
}

const Menu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <S.Link href="/" isActive={activeLink === '/'} title="Sacola">
        <S.Icon>
          <ShoppingBag size={24} />
        </S.Icon>
        <span>SACOLA</span>
      </S.Link>

      <S.Link
        href="/payment"
        isActive={activeLink === '/payment'}
        title="Pagamento"
      >
        <S.Icon>
          <CreditCardFront size={24} />
        </S.Icon>
        <span>PAGAMENTO</span>
      </S.Link>

      <S.Link
        href="/success"
        isActive={activeLink === '/success'}
        title="Confirmação"
      >
        <S.Icon>
          <CheckSquare size={24} />
        </S.Icon>
        <span>CONFIRMAÇÃO</span>
      </S.Link>
    </S.Nav>
  )
}

export default Menu
