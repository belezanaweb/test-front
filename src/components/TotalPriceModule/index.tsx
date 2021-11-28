import React from 'react'
import { TotalPrice } from '../TotalPrice'
import * as S from './styles'

export type TotalPriceModuleProps = {
  products: number,
  freightage: number,
  discount: number,
  total: number
}

export const TotalPriceModule: React.FC<TotalPriceModuleProps> = ({
  discount,
  freightage,
  products,
  total
}) => {
  return (
    <S.Wrapper>
      <S.Prices>
        <TotalPrice price={products} title="produtos" />
        <TotalPrice price={freightage} title="frete" />
        <TotalPrice price={discount} title="desconto" isNegative />
      </S.Prices>
      <S.Total>
        <TotalPrice price={total} title="produtos" isTotal />
      </S.Total>
    </S.Wrapper>
  )
}
