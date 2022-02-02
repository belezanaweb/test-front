import React, { Fragment } from 'react'
import ProductCard from './ProductCard'
import { useRequestContext } from '../../context/useRequestContext'

/**
 *  Function to render default card
 *  @property {vector[]} products - vector of products
 */

export default function BoxProducts() {
  const { order } = useRequestContext()
  return (
    <>
      {order?.items?.map((item) => (
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
