import React from 'react'
import { formatPrice } from '../../util/format'
import * as S from './styles'

interface ProductProps {
  imageUrl: string
  name: string
  price?: number
}

const Product = ({ imageUrl, name, price }: ProductProps) => {
  return (
    <S.Wrapper>
      <S.Image src={imageUrl} />
      <S.Content>
        <S.Text>{name}</S.Text>
        {price && <S.Price>{formatPrice(price)}</S.Price>}
      </S.Content>
    </S.Wrapper>
  )
}

export default Product
