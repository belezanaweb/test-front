import React from 'react'
import { ImageWrapper, PriceWrapper, ProductImage, ProductWrapper } from './styles'
import Text from '../../Text'
import { moneyConvert } from '../../../utils/priceUtils'

export type productProps = {
  image: string,
  name: string,
  price?: number,
  originalPrice?: number
}

const Product = ({ image, name, originalPrice, price }: productProps) => {
  return (
    <ProductWrapper>
      <ImageWrapper>
        <ProductImage alt="product image" src={image} />
      </ImageWrapper>
      <Text
        color="black"
        fontSize="small"
        lineHeight="medium"
        textAlign="left"
        fontWeight="normal"
        letterSpacing="0.27px"
      >
        {name}
      </Text>
      {(originalPrice || price) && (
        <PriceWrapper>
          {originalPrice && price && price < originalPrice && (
            <Text
              color="mediumGray"
              fontSize="medium"
              lineHeight="medium"
              textAlign="right"
              fontWeight="normal"
              textDecoration="line-through"
              letterSpacing="0.27px"
            >
              {moneyConvert(originalPrice)}
            </Text>
          )}
          {price && (
            <Text
              color="black"
              fontSize="medium"
              lineHeight="medium"
              textAlign="right"
              fontWeight="bold"
              letterSpacing="0.27px"
            >
              {moneyConvert(price)}
            </Text>
          )}
        </PriceWrapper>
      )}
    </ProductWrapper>
  )
}

export default Product
