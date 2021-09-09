import React, { useEffect } from 'react'

import ProductList from '@/components/products/ProductList'
import ResumeValues from '@/components/resume/ResumeValues'
import Button from '@/components/Button'

import { StepPathname } from '@/entities/Step'
import { useCart } from '@/contexts/cart'

function Cart (): React.ReactElement | null {
  const { loadCart } = useCart()

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <>
      <ProductList />
      <ResumeValues />
      <Button text="Seguir para o pagamento" href={StepPathname.Pagamento} />
    </>
  )
}

export default Cart
