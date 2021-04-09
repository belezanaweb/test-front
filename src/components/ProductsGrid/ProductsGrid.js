import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { GridContainer } from './styles'

const ProductsGrid = (props) => {
  return (
    <GridContainer>
      {props.products.map((item) => {
        return (
          <ProductCard
            price={item.product.priceSpecification.originalPrice}
            image={item.product.imageObjects[0].small}
            name={item.product.name}
          />
        )
      })}
    </GridContainer>
  )
}

export default ProductsGrid
