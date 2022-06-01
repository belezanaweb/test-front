import React from 'react'

import Price from '../../micro/Price'

import { ProductContent } from './styles'

type Props = {
  title: string,
  price: string
}

function Product({ title, price }: Props) {
  return (
    <ProductContent>
      <h4>{title}</h4>
      <Price>{price}</Price>
    </ProductContent>
  )
}

export default Product
