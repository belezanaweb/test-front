import React from 'react'

import {
  ProductsContainer,
  ProductsContentImg,
  ProductsContentText,
  ProductsHeaderTitle,
  ProductsItem
} from './Products.elements'

import { useFetch } from '../../contexts/useFetch'

export default function Products() {
  const { products } = useFetch()

  return (
    <section>
      <ProductsHeaderTitle>PRODUTOS</ProductsHeaderTitle>
      <ProductsContainer>
        {products?.map(({ id, name, price, image }) => (
          <ProductsItem key={id}>
            <ProductsContentImg src={image} alt={name} />
            <ProductsContentText>{name}</ProductsContentText>
            <ProductsContentText bold>{price}</ProductsContentText>
          </ProductsItem>
        ))}
      </ProductsContainer>
    </section>
  )
}
