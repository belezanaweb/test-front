import React from 'react'
import { Product } from '../Product'
import { Container } from './styled'

const Products = (props) => {
  return (
    <Container>
      {props.products.map((item) => {
        return (
          <Product
            price={item.product.priceSpecification.originalPrice}
            thumbnail={item.product.imageObjects[0].small}
            name={item.product.name}
          />
        )
      })}
    </Container>
  )
}

export { Products }
