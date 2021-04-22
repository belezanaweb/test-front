import React from 'react'

import { Text } from '../Text'

import { ImageContainer } from './styles'
import { GridContainer } from '../GridContainer'

export const Item = ({ item }) => {
  const { imageUrl, label, price } = item

  return (
    <GridContainer columns="20% 80%">
      <ImageContainer>
        <img src={imageUrl} alt="Item" />
      </ImageContainer>
      <Text type="cartPriceValue" align="start">
        {label}
      </Text>
      <Text type="cartPriceTotal" align="end">
        R$ {price}
      </Text>
    </GridContainer>
  )
}
