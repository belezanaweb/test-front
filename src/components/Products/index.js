import React from 'react'
//formats
import { formatPrice } from '../../utils/formats'

import { Image, Container, WrapperProducts } from './styles'

const Products = ({ image, name, price, showPrice }) => {
  return (
    <Container>
      <Image src={image} alt="Imagem do produto" showPrice={showPrice} />
      <WrapperProducts>
        <p>{name}</p>
        {showPrice ? <strong>{formatPrice(price) || ''}</strong> : null}
      </WrapperProducts>
    </Container>
  )
}

export default Products
