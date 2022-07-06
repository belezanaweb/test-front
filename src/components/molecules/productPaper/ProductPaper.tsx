import React from 'react'
import { Paper } from '../../atoms'
import { ProductItem } from './components/productItem/ProductItem'
import { Products } from './ProductPaper.style'

interface ProductPaperProps {
  bag: ProductBag
  showPrice?: boolean
}

export const ProductPaper = ({ bag, showPrice = true }: ProductPaperProps) => (
  <Paper title="produtos">
    <Products>
      {bag.items.map(({ product }) => (
        <ProductItem key={product.sku} product={product} showPrice={showPrice} />
      ))}
    </Products>
  </Paper>
)
