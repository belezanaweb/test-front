import React, { useMemo } from 'react'
import { toMoney } from '../../utils/money'
import * as S from './styles'

export type TotalPriceProps = {
  title: string,
  price: number,
  isNegative?: boolean,
  isTotal?: boolean
}

export const TotalPrice: React.FC<TotalPriceProps> = ({
  title,
  price,
  isNegative = false,
  isTotal = false
}) => {
  const intoMoney = useMemo(() => {
    return toMoney(price)
  }, [price])

  return (
    <S.Wrapper isNegative={isNegative} isTotal={isTotal}>
      <span>{title}</span>
      <span>{isNegative ? `- ${intoMoney}` : intoMoney}</span>
    </S.Wrapper>
  )
}
