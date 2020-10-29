import React from 'react'

import * as S from './ProductCard.styled'
import { IProductCard } from './interface'
import { formatCurrency } from '../../utils'

export const ProductCard = (props: IProductCard) => {
  const [images] = props.imageObjects

  return (
    <S.ProductCard>
      <S.ProductImage
        srcSet={`${images.small} 360w, ${images.medium} 768w, ${images.large} 1200w, ${images.extraLarge} 1980w`}
        src={images.small}
        alt={props.name}
      />
      <S.ProductDescWrapper>
        <S.ProductTitle>{props.name}</S.ProductTitle>
        {props.priceSpecification && (
          <S.ProductPrice>{formatCurrency(props.priceSpecification.price)}</S.ProductPrice>
        )}
      </S.ProductDescWrapper>
    </S.ProductCard>
  )
}
