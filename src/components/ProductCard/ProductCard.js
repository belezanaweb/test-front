import React from 'react'
import {
  CardContainer,
  ProductImage,
  ProductImageContainer,
  ProductName,
  ProductNameContainer,
  ProductPrice,
  ProductPriceContainer
} from './styles'

const ProductCard = (props) => {
  return (
    <CardContainer>
      <ProductImageContainer>
        <ProductImage src={props.thumbnail} alt="Imagem do produto" />
      </ProductImageContainer>
      <div>
        <ProductNameContainer>
          <ProductName>{props.name}</ProductName>
        </ProductNameContainer>
        <ProductPriceContainer>
          <ProductPrice>R$ {props.price.toFixed(2).replace('.', ',')} </ProductPrice>
        </ProductPriceContainer>
      </div>
    </CardContainer>
  )
}

export default ProductCard
