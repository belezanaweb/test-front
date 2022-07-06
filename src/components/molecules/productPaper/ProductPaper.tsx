import React from 'react'
import { Paper } from '../../atoms'
import { ProductItem } from './components/productItem/ProductItem'
import { Container, Products } from './ProductPaper.style'

interface ProductPaperProps {
  bag: ProductBag
  showPrice?: boolean
  sizeVariant?: 'thumbnail' | 'small'
}

export const ProductPaper = ({
  bag,
  showPrice = true,
  sizeVariant = 'small'
}: ProductPaperProps) => (
  <Container>
    <Paper title="produtos">
      <Products>
        {bag.items.map(({ product }) => (
          <ProductItem
            key={product.sku}
            product={product}
            showPrice={showPrice}
            sizeVariant={sizeVariant}
          />
        ))}
      </Products>
    </Paper>
  </Container>
)
