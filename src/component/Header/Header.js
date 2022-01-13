import React from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './Header.styles'

const Header = () => {
  const location = useLocation()

  const returnAtivePath = (testString) => {
    return location.pathname.includes(testString)
  }

  return (
    <S.Header>
      <S.Ul>
        <S.Li active={returnAtivePath('sacola')}>SACOLA</S.Li>
        <S.Li active={returnAtivePath('pagamento')}>PAGAMENTO</S.Li>
        <S.Li active={returnAtivePath('confirmacao')}>CONFIRMAÇÃO</S.Li>
      </S.Ul>
    </S.Header>
  )
}

export default Header
