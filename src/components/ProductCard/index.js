import React from 'react'

import formatCurrencyBRL from '../../utils/formatCurrencyBRL'

import { Container } from './styles'

const ProductCard = ({ image, name, price }) => {
  return (
    <Container>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p id="price">{formatCurrencyBRL(price)}</p>
    </Container>
  )
}

export default ProductCard
