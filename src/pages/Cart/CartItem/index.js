import React from 'react'

import { Container, ImageContainer, DescriptionContainer, Name, Price } from './styles'

import useWindowDimensions from '../../../utils/windowDimension'
import convertValue from '../../../utils/convertValue'

function CartItem({ item }) {
  const { width } = useWindowDimensions()

  const { product } = item
  const { imageObjects: image, name, priceSpecification } = product
  const { originalPrice } = priceSpecification
  return (
    <Container>
      <ImageContainer>
        {width <= 768 ? (
          <img alt={name} src={image[0].thumbnail}></img>
        ) : width <= 1024 ? (
          <img alt={name} src={image[0].small}></img>
        ) : width <= 1440 ? (
          <img alt={name} src={image[0].medium}></img>
        ) : (
          <img alt={name} src={image[0].large}></img>
        )}
      </ImageContainer>
      <DescriptionContainer>
        <Name>{name}</Name>
        <Price>{convertValue(originalPrice)}</Price>
      </DescriptionContainer>
    </Container>
  )
}

export default CartItem
