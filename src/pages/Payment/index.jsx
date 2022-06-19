import React from 'react'
import { useDispatch } from 'react-redux'
import { handlePayment } from '../../redux/slices/paymentSlice'
import { Header } from '../../components/Header'
import { PaymentForm } from '../../components/PaymentForm'

import loadable from '@loadable/component'

// const Header = loadable(() => import('../../components/Header'), {
//   resolveComponent: (components) => components.Header
// })
// const PaymentForm = loadable(() => import('../../components/PaymentForm'), {
//   resolveComponent: (components) => components.PaymentForm
// })

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
