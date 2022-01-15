import React from 'react'

import { formatCurrencyBRL } from '../../../utils/format.utils'

import {
  StyledProductInfo,
  StyledProductInfoImage,
  StyledProductInfoDescriptionDetails,
  StyledProductInfoDescription,
  StyledProductInfoPrice
} from './ProductInfo.styled'

type ProductInfoProps = {
  img: string,
  description: string,
  price: number
}

function ProductInfo({ img, description, price }: ProductInfoProps): JSX.Element {
  return (
    <StyledProductInfo>
      <StyledProductInfoImage src={img} alt="Product image" />
      <StyledProductInfoDescriptionDetails>
        <StyledProductInfoDescription>{description}</StyledProductInfoDescription>
        <StyledProductInfoPrice>{formatCurrencyBRL(price)}</StyledProductInfoPrice>
      </StyledProductInfoDescriptionDetails>
    </StyledProductInfo>
  )
}

export default ProductInfo
