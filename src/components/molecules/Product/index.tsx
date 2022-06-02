import React from 'react'

import Price from '../../atoms/Price'

import { ProductContent } from './styles'

type Props = {
  title: string
  price: string
  image: string
}

function Product({ title, price, image }: Props) {
  return (
    <ProductContent>
      <div>
        <img src={image} alt="Imagem do produto" />
      </div>
      <div className="title-price">
        <h4>{title}</h4>
        <Price>{price}</Price>
      </div>
    </ProductContent>
  )
}

export default Product
