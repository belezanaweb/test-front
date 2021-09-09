import React from 'react'

import ProductList from '@/components/products/ProductList'
import ResumeValues from '@/components/resume/ResumeValues'
import { useCart } from '@/contexts/cart'

function Success (): React.ReactElement | null {
  const { cart } = useCart()

  if (!cart) {
    return null
  }

  return (
    <>
      <ProductList />
      <ResumeValues />
    </>
  )
}

export default Success
