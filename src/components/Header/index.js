import React from 'react'
import { useLocation } from 'react-router-dom'

import * as S from './styles'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <S.Wrapper>
        <S.Step active={pathname === '/carrinho'}>Sacola</S.Step>
        <S.Step active={pathname === '/pagamento'}>Pagamento</S.Step>
        <S.Step active={pathname === '/sucesso'}>Confirmação</S.Step>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
