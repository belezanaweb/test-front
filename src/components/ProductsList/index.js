import React from 'react'
//components
import Products from '../Products'

import { Container } from './styles'

const ProductsList = ({ list, showPrice = true }) => {
  return (
    <Container>
      {list &&
        list.map((item) => (
          <Products
            key={item.product.sku}
            name={item.product.name}
            image={item.product.imageObjects[0].small}
            price={item.product.priceSpecification.price}
            showPrice={showPrice}
          />
        ))}
    </Container>
  )
}

export default ProductsList
