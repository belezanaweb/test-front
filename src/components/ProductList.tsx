import React, { useEffect } from 'react'

import { useCart } from '@/contexts/cart'

import Box from '@/components/Box'
import ProductBox from '@/components/ProductBox'

const ProductList = (): JSX.Element | null => {
  const { cart, loadCart } = useCart()

  useEffect(() => {
    loadCart()
  }, [])

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
