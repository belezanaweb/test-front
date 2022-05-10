import React from 'react'
import Product from '../../components/Product'
import { useCartDetails } from '../../hooks/useCartDetails'

export function Cart() {
  const { items } = useCartDetails()
  const product = items?.[0]?.product
  return (
    <div
      style={{
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Product
        name={product?.name}
        price={product?.priceSpecification?.price}
        imageUrl={product?.imageObjects[0]?.small}
      />
    </div>
  )
}
