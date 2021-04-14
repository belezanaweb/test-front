import React from 'react'
import CardProduct from '../CardProduct/CardProdutc'
import { ProductContainer } from './styled'

function ProductCard(props) {
  return (
    <ProductContainer>
      {props.products.map((item) => {
        return (
          <CardProduct
            price={item.product.priceSpecification.originalPrice}
            image={item.product.imageObjects[0].small}
            name={item.product.name}
          />
        )
      })}
    </ProductContainer>
  )
}

export default ProductCard
