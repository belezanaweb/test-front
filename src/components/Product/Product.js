import React from 'react'
import { convertCurrency } from '../../utils/currency'
import {
  ProductContainer,
  DetailsContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
  ProductSection
} from './styles'

export const Product = (props) => {
  const imageObject = props.product.imageObjects.find((im) => im.valid)

  return (
    <ProductSection>
      <ProductContainer>
        <ImageContainer>
          <img src={imageObject.medium} alt={`${props.product.name}`} />
        </ImageContainer>
        <DetailsContainer>
          <NameContainer>{props.product.name}</NameContainer>
          {props.showPrice && (
            <PriceContainer>
              {convertCurrency(props.product.priceSpecification.price)}
            </PriceContainer>
          )}
        </DetailsContainer>
      </ProductContainer>
    </ProductSection>
  )
}

export default Product
