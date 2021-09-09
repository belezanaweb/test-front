import React from 'react'

import ProductList from '@/components/products/ProductList'
import ResumeValues from '@/components/resume/ResumeValues'
import Button from '@/components/Button'

function Cart (): React.ReactElement | null {
  return (
    <>
      <ProductList />
      <ResumeValues />
      <Button text="Seguir para o pagamento" />
    </>
  )
}

export default Cart
