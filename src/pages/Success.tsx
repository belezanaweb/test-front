import React from 'react'

import { useCart } from '@/contexts/cart'

import ProductList from '@/components/products/ProductList'
import ResumeValues from '@/components/resume/ResumeValues'
import SuccessMessage from '@/components/success/SuccessMessage'
import PaymentDetail from '@/components/payment/PaymentDetail'
import { useHistory } from 'react-router-dom'
import { StepPathname } from '@/entities/Step'

function Success (): React.ReactElement | null {
  const { cart } = useCart()

  const history = useHistory()

  if (!cart) {
    history.push(StepPathname.Sacola)
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
