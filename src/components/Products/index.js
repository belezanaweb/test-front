import React from 'react'
//formats
import { formatPrice } from '../../utils/formats'

import { Image, Container, WrapperProducts } from './styles'

const Products = ({ image, name, price }) => {
  return (
    <Container>
      <Image src={image} alt="Imagem do produto" />
      <WrapperProducts>
        <p>{name}</p>
        <strong>{formatPrice(price)}</strong>
      </WrapperProducts>
    </Container>
  )
}

export default Products
