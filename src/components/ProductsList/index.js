import React from 'react'

import Card from '../Card'
import ProductCard from '../../components/ProductCard'

const ProductsList = ({ items }) => {
  return (
    <Card>
      {items.map((item) => (
        <ProductCard
          image={item.product?.imageObjects[0]?.small}
          title={item.product?.name}
          price={item.product?.priceSpecification.price}
        />
      ))}
    </Card>
  )
}

export default ProductsList
