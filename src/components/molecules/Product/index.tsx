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
        <p>{title}</p>
        <Price product={true} type="total">
          {parseFloat(price).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          })}
        </Price>
      </div>
    </ProductContent>
  )
}

export default Product
