import React from 'react'
import { Container, ImageContainer, TextContainer, ProductTitle, Price } from './style'
import { numberToCurrency } from '../../utils'

export const Product = ({ name, priceSpecification, imageObjects }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={imageObjects[0]?.thumbnail} alt={name} loading="lazy" width={50} height={50} />
      </ImageContainer>
      <TextContainer>
        <ProductTitle>{name}</ProductTitle>
        <Price hidePrice={window.location.pathname === '/success'}>
          {priceSpecification.price && numberToCurrency(priceSpecification.price)}
        </Price>
      </TextContainer>
    </Container>
  )
}
