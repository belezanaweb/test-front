import React from 'react'

import { useCart } from '@/contexts/cart'

import ProductList from '@/components/products/ProductList'
import ResumeValues from '@/components/resume/ResumeValues'
import SuccessMessage from '@/components/success/SuccessMessage'
import PaymentDetail from '@/components/payment/PaymentDetail'

function Success (): React.ReactElement | null {
  const { cart } = useCart()

  if (!cart) {
    return null
  }

  return (
    <>
      <SuccessMessage />
      <PaymentDetail />
      <ProductList />
      <ResumeValues />
    </>
  )
}

export default Success
