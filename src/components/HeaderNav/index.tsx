import React from 'react'
import { HeaderItem } from '../HeaderItem'
import * as S from './styles'

export type HeaderNavProps = {
  page: 'checkout' | 'payment' | 'confirmation'
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ page }) => {
  return (
    <S.Wrapper>
      <S.Nav>
        <HeaderItem name="sacola" status={page === 'checkout' ? true : false} />
        <HeaderItem name="pagamento" status={page === 'payment' ? true : false} />
        <HeaderItem name="confirmação" status={page === 'confirmation' ? true : false} />
      </S.Nav>
    </S.Wrapper>
  )
}
