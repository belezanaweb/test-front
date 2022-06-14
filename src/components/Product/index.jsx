import React from 'react'
import { Container, ImageContainer, Image, TextContainer, ProductTitle, Price } from './styles'

export const Product = ({ name, priceSpecification, imageObjects }) => {
  console.log({ name, imageObjects, priceSpecification })
  return (
    <Container isConfirmation={window.location.pathname === '/confirmation'}>
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
