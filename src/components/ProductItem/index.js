import React from 'react'

import * as S from './styles'

import formatPrice from '../../../utils/formatPrice'

const ProductItem = ({ quantity, product }) => (
  <S.Container>
    <S.Image>
      <img src={product.imageObjects[0].small} alt={product.name} />
    </S.Image>

    <S.Wrapper>
      <S.Title>{product.name}</S.Title>

      <S.Price>{formatPrice(product.priceSpecification.price * quantity)}</S.Price>
    </S.Wrapper>
  </S.Container>
)

export default ProductItem
