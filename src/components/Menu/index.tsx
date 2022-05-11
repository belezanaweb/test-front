import {
  CheckSquare,
  CreditCardFront,
  ShoppingBag
} from '@styled-icons/boxicons-regular'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/' | '/payment' | '/success' | string
}

const Menu = ({ activeLink }: ProfileMenuProps) => {
  const [goToBag, setGoToBag] = useState(false)
  const [goToPayment, setGoToPayment] = useState(false)
  const [sucess, setSucess] = useState(false)
  return (
    <S.Nav>
      <S.Button
        onClick={() => {
          setGoToPayment(false)
          setSucess(false)
          setGoToBag(true)
        }}
        isActive={activeLink === '/'}
        title="Sacola"
      >
        <S.Icon>
          <ShoppingBag size={24} />
        </S.Icon>
        <span>SACOLA</span>
      </S.Button>

      <S.Button
        onClick={() => {
          setSucess(false)
          setGoToBag(false)
          setGoToPayment(true)
        }}
        isActive={activeLink === '/payment'}
        title="Pagamento"
      >
        <S.Icon>
          <CreditCardFront size={24} />
        </S.Icon>
        <span>PAGAMENTO</span>
      </S.Button>

      <S.Button
        onClick={() => {
          setGoToBag(false)
          setGoToPayment(false)
          setSucess(true)
        }}
        isActive={activeLink === '/success'}
        title="Confirmação"
      >
        <S.Icon>
          <CheckSquare size={24} />
        </S.Icon>
        <span>CONFIRMAÇÃO</span>
      </S.Button>
      {goToBag && <Redirect to="/" />}
      {goToPayment && <Redirect to="/payment" />}
      {sucess && <Redirect to="/success" />}
    </S.Nav>
  )
}

export default Menu
