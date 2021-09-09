import React from 'react'

import { useCart } from '@/contexts/cart'

import Box from '@/components/Box'
import ProductBox from '@/components/products/ProductBox'

const ProductList = (): JSX.Element | null => {
  const { cart } = useCart()

  if (!cart) {
    return null
  }

  return (
    <Box title="Produtos">
      {cart.items.map((item, key) => (
        <ProductBox key={key} product={item.product} />
      ))}
    </Box>
  )
}

export default ProductList
