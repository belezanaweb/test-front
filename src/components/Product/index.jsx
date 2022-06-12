import React from 'react'
import { Container, ImageContainer, Image, TextContainer, ProductTitle, Price } from './styles'

export const Product = () => {
  return (
    <Container>
      <ImageContainer>Image</ImageContainer>
      <TextContainer>
        <ProductTitle></ProductTitle>
        <Price></Price>
      </TextContainer>
    </Container>
  )
}
