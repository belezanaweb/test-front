import React from 'react'
import { Container } from './styles'

const ProductCard = ({ image, name, price }) => {
  return (
    <Container>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
    </Container>
  )
}

export default ProductCard
