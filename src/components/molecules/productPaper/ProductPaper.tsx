import React from 'react'
import { Paper } from '../../atoms'
import { ProductItem } from './components/productItem/ProductItem'
import { Products } from './ProductPaper.style'

interface ProductPaperProps {
  bag: ProductBag
}

export const ProductPaper = ({ bag }: ProductPaperProps) => (
  <Paper>
    <Products>
      {bag.items.map(({ product }) => (
        <ProductItem key={product.sku} product={product} />
      ))}
    </Products>
  </Paper>
)
