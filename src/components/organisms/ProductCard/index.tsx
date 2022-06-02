import React from 'react'

import { useCheckout } from '../../../providers/checkout'

import Card from '../../molecules/Card'
import Product from '../../molecules/Product'

function ProductCard() {
  const { productData } = useCheckout()

  return (
    <section>
      <Card title="Produtos">
        {productData.items.map((product) => (
          <Product
            title={product.product.name}
            price={product.product.priceSpecification.price.toString()}
            image={product.product.imageObjects[0].small}
          />
        ))}
      </Card>
    </section>
  )
}

export default ProductCard
