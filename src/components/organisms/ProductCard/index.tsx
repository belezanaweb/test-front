import React from 'react'

import { useCheckout } from '../../../providers/checkout'
import useWindowSize from '../../../utils/useWindowSize'

import Card from '../../molecules/Card'
import Product from '../../molecules/Product'

function ProductCard() {
  const { productData } = useCheckout()
  const size = useWindowSize()

  return (
    <section>
      <Card title="Produtos">
        {productData.items.map((product) => (
          <Product
            title={product.product.name}
            price={product.product.priceSpecification.price.toString()}
            image={
              size < 768
                ? product.product.imageObjects[0].small
                : product.product.imageObjects[0].large
            }
          />
        ))}
      </Card>
    </section>
  )
}

export default ProductCard
