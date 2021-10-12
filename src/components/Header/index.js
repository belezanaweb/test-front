import React from 'react'
import { useLocation } from 'react-router-dom'

import * as S from './styles'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <S.Wrapper>
        <S.Step active={pathname === '/cart'}>Sacola</S.Step>
        <S.Step active={pathname === '/payment'}>Pagamento</S.Step>
        <S.Step active={pathname === '/success'}>Confirmação</S.Step>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
