import React, { Fragment } from 'react'
import { BoxCard, Title } from './styles'
import ProductCard from '../ProductCard'

/**
 *  Function to render default card
 *  @property {string} title - title of the card
 *  @property {vector[]} products - vector of products
 */

export default function CardProducts({ title, products }) {
  return (
    <div>
      <Title>{title}</Title>
      <BoxCard>
        {products?.map((product) => (
          <Fragment key={product?.sku}>
            <ProductCard img={product.img} title={product.title} price={product.price} />
          </Fragment>
        ))}
      </BoxCard>
    </div>
  )
}
