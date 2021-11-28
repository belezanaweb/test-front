import React from 'react'
import { TotalPrice } from '../TotalPrice'
import * as S from './styles'

export const TotalPriceModule: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Prices>
        <TotalPrice price={624.8} title="produtos" />
        <TotalPrice price={5.3} title="frete" />
        <TotalPrice price={30} title="desconto" isNegative />
      </S.Prices>
      <S.Total>
        <TotalPrice price={600.1} title="produtos" isTotal />
      </S.Total>
    </S.Wrapper>
  )
}
