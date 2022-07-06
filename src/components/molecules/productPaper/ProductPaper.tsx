import React from 'react'
import { Paper } from '../../atoms'
import { ProductItem } from './components/productItem/ProductItem'
import { Products } from './ProductPaper.style'

interface ProductPaperProps {
  bag: ProductBag
  title: string
}

export const ProductPaper = ({ bag, title }: ProductPaperProps) => (
  <Paper title={title}>
    <Products>
      {bag.items.map(({ product }) => (
        <ProductItem key={product.sku} product={product} />
      ))}
    </Products>
  </Paper>
)
