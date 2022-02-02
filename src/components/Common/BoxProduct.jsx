import React, { Fragment } from 'react'
import ProductCard from './ProductCard'

/**
 *  Function to render default card
 *  @property {vector[]} products - vector of products
 */

export default function BoxProducts({ products }) {
  return (
    <>
      {products?.map((item) => (
        <Fragment key={item?.product?.sku}>
          <ProductCard
            img={item?.product?.imageObjects?.[0]?.medium}
            name={item?.product?.name}
            price={item?.product?.priceSpecification?.price}
          />
        </Fragment>
      ))}
    </>
  )
}
