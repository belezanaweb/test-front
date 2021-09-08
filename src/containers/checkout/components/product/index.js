import React from 'react'
import { Container } from './styles'

import Image from '../../../../components/Helper/Image'
import { formatPrice } from '../../../../util/util'

const Product = ({ product }) => {
  const { imageObjects, name, priceSpecification } = product

  return (
    <Container role="product">
      <Image src={imageObjects?.[0].large} alt={name} />

      <span className="name">{name}</span>
      <strong className="price">{formatPrice(priceSpecification?.price)}</strong>
    </Container>
  )
}

export default Product
