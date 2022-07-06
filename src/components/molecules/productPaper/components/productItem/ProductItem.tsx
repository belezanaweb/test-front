import React from 'react'
import { formatValueToBRL } from '../../../../../utils/currency'
import {
  ProductDetails,
  ProductImage,
  ProductItemBox,
  ProductName,
  ProductPrice
} from './ProductItem.style'

interface ProductItemProps {
  product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => (
  <ProductItemBox>
    <ProductImage alt={product.name} src={product.imageObjects[0].small} />
    <ProductDetails>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{formatValueToBRL(product.priceSpecification.price)}</ProductPrice>
    </ProductDetails>
  </ProductItemBox>
)
