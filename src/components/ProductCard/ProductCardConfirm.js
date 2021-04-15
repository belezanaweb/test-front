import React from 'react'
import CardProduct from '../CardProduct/CardProdutc'
import { ProductContainer } from './styled'

function ProductCardConfirm(props) {
  return (
    <ProductContainer>
      {props.products.map((item) => {
        return <CardProduct image={item.product.imageObjects[0].small} name={item.product.name} />
      })}
    </ProductContainer>
  )
}

export default ProductCardConfirm
