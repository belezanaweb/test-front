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
        {products?.map((item) => (
          <Fragment key={item?.product?.sku}>
            <ProductCard
              img={item?.product?.imageObjects?.[0]?.medium}
              name={item?.product?.name}
              price={item?.product?.priceSpecification?.price}
            />
          </Fragment>
        ))}
      </BoxCard>
    </div>
  )
}
