import React from 'react'

import * as S from './styles'

import format from '../../helpers/utility'

const ProductItem = ({ quantity, product, noPrice }) => (
  <S.Container>
    <S.Image>
      <img src={product.imageObjects[0].small} alt={product.name} />
    </S.Image>

    <S.Wrapper>
      <S.Title>{product.name}</S.Title>

      {!noPrice && <S.Price>{format.price(product.priceSpecification.price * quantity)}</S.Price>}
    </S.Wrapper>
  </S.Container>
)

export default ProductItem
