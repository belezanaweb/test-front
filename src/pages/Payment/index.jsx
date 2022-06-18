import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handlePayment } from '../../redux/slices/paymentSlice'

import loadable from '@loadable/component'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})
const PaymentForm = loadable(() => import('../../components/PaymentForm'), {
  resolveComponent: (components) => components.PaymentForm
})
const Summary = loadable(() => import('../../components/Summary'), {
  resolveComponent: (components) => components.Summary
})
const ActionButton = loadable(() => import('../../components/ActionButton'), {
  resolveComponent: (components) => components.ActionButton
})

export const Payment = () => {
  const dispatch = useDispatch()

  const handlePaymentInformation = (payload) => {
    dispatch(handlePayment(payload))
  }

  return (
    <>
      <Header />
      <main>
        <PaymentForm handlePaymentInformation={handlePaymentInformation} />
      </main>
    </>
  )
}
