import React, { useMemo } from 'react'
import { toMoney } from '../../utils/money'
import * as S from './styles'

export type ProductProps = {
  image: string,
  description: string,
  price?: number,
  type?: 'small' | 'default'
}

export const Product: React.FC<ProductProps> = ({
  image,
  description,
  price,
  type = 'default'
}) => {
  const intoMoney = useMemo(() => {
    return price && toMoney(price)
  }, [price])

  return (
    <S.Wrapper>
      <S.Figure type={type}>
        <img src={image} alt="description" />
      </S.Figure>
      <S.Content>
        <S.Description>
          <p>{description}</p>
        </S.Description>
        {price && (
          <S.Price>
            <span>{intoMoney}</span>
          </S.Price>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
