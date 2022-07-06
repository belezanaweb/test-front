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
  showPrice?: boolean
  sizeVariant: keyof ImageObject
}

export const ProductItem = ({ product, showPrice = true, sizeVariant }: ProductItemProps) => (
  <ProductItemBox sizeVariant={sizeVariant}>
    <ProductImage
      alt={product.name}
      sizeVariant={sizeVariant}
      src={product.imageObjects[0][sizeVariant as keyof ImageObject]}
    />
    <ProductDetails>
      <ProductName>{product.name}</ProductName>
      {showPrice && (
        <ProductPrice>{formatValueToBRL(product.priceSpecification.price)}</ProductPrice>
      )}
    </ProductDetails>
  </ProductItemBox>
)
