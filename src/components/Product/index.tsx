import React, { useMemo } from 'react'
import { toMoney } from '../../utils/money'
import * as S from './styles'

export type ProductProps = {
  image: string,
  description: string,
  price: number
}

export const Product: React.FC<ProductProps> = ({ image, description, price }) => {
  const intoMoney = useMemo(() => {
    return toMoney(price)
  }, [price])

  return (
    <S.Wrapper>
      <S.Figure>
        <img src={image} alt="description" />
      </S.Figure>
      <S.Content>
        <S.Description>
          <p>{description}</p>
        </S.Description>
        <S.Price>
          <span>{intoMoney}</span>
        </S.Price>
      </S.Content>
    </S.Wrapper>
  )
}
