import React from 'react'

import { formatToReal } from '../../utils/currencyFormat'

import { Container, ProductItem, ProductDescription } from './styles'

const ProductBox = ({ thumbnail, description, price }) => (
  <Container>
    <ProductItem>
      <img src={thumbnail} alt={description} />
      <ProductDescription>
        <p className="description">{description}</p>
        <p className="price">{formatToReal(price)}</p>
      </ProductDescription>
    </ProductItem>
  </Container>
)

export default ProductBox
