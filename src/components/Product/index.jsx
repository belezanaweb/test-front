import React from 'react'
import { Container, ImageContainer, TextContainer, ProductTitle, Price } from './style'

export const Product = ({ name, priceSpecification, imageObjects }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={imageObjects[0]?.thumbnail} alt={name} />
      </ImageContainer>
      <TextContainer>
        <ProductTitle>{name}</ProductTitle>
        <Price isConfirmation={window.location.pathname === '/confirmation'}>
          R$ {priceSpecification.price.toFixed(2)}
        </Price>
      </TextContainer>
    </Container>
  )
}
