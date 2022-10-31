import React from 'react'

import Card from '../Card'
import ProductCard from '../../components/ProductCard'

const ProductsList = ({ items, noPrice }) => {
  return (
    <Card>
      {items.map((item, index) => (
        <ProductCard
          key={index}
          image={item.product?.imageObjects[0]?.small}
          title={item.product?.name}
          price={!noPrice && item.product?.priceSpecification.price}
        />
      ))}
    </Card>
  )
}

export default ProductsList
