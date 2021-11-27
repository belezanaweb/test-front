import React from 'react'
import { HeaderItem } from '../HeaderItem'
import * as S from './styles'

export const HeaderNav: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Nav>
        <HeaderItem name="sacola" status={true} />
        <HeaderItem name="pagamento" status={false} />
        <HeaderItem name="confirmação" status={false} />
      </S.Nav>
    </S.Wrapper>
  )
}
