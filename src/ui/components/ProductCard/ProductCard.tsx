import React from 'react'

import { IProductCard } from './types'
import { formatCurrency } from '../../../shared/helpers'

import * as S from './styled'

const ProductCard = ({ images, priceData, name }: IProductCard) => {
  const [imagesList] = images

  return (
    <S.ProductCard>
      <S.ProductImage
        srcSet={`${imagesList.small} 360w, ${imagesList.medium} 768w, ${imagesList.large} 1200w`}
        src={imagesList.small}
        alt={name}
      />
      <S.ProductDescWrapper>
        <S.ProductTitle>{name}</S.ProductTitle>
        {priceData && <S.ProductPrice>{formatCurrency(priceData.price)}</S.ProductPrice>}
      </S.ProductDescWrapper>
    </S.ProductCard>
  )
}

export default ProductCard
