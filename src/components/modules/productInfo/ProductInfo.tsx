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
  price: number,
  showPrice: boolean
}

function ProductInfo({ img, description, price, showPrice = true }: ProductInfoProps): JSX.Element {
  return (
    <StyledProductInfo>
      <StyledProductInfoImage src={img} alt="Product image" />
      <StyledProductInfoDescriptionDetails>
        <StyledProductInfoDescription>{description}</StyledProductInfoDescription>
        {showPrice ? (
          <StyledProductInfoPrice>{formatCurrencyBRL(price)}</StyledProductInfoPrice>
        ) : null}
      </StyledProductInfoDescriptionDetails>
    </StyledProductInfo>
  )
}

export default ProductInfo
