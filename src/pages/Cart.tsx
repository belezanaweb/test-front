import React from 'react'

import ProductList from '@/components/products/ProductList'
import ResumeValues from '@/components/resume/ResumeValues'

function Cart (): React.ReactElement | null {
  return (
    <>
      <ProductList />
      <ResumeValues />
    </>
  )
}

export default Cart
