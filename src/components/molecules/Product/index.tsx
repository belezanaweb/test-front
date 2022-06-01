import React from 'react'

import Price from '../../atoms/Price'

import { ProductContent } from './styles'

import image from './a.jpg'

type Props = {
  title: string,
  price: string
}

function Product({ title, price }: Props) {
  return (
    <ProductContent>
      <div>
        <img src={image} alt="aaaaaa" />
      </div>
      <div className="title-price">
        <h4>{title}</h4>
        <Price>{price}</Price>
      </div>
    </ProductContent>
  )
}

export default Product
