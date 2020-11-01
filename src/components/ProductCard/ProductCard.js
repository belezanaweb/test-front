import React from 'react'
import {
  ProductCardWrapper,
  ProductCardImage,
  ProductCardTitle,
  ProductCardPrice
} from './ProductCard.styles'

export const ProductCard = ({ imageUrl, productTitle, productPrice }) => (
  <ProductCardWrapper>
    <ProductCardImage src={imageUrl} alt={productTitle} />
    <ProductCardTitle>{productTitle}</ProductCardTitle>
    <ProductCardPrice>{productPrice}</ProductCardPrice>
  </ProductCardWrapper>
)
