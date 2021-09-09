import React from 'react'

import ProductList from '@/components/ProductList'
import ResumeValues from '@/components/ResumeOrder'

function Cart (): React.ReactElement | null {
  return (
    <>
      <ProductList />
      <ResumeValues />
    </>
  )
}

export default Cart
