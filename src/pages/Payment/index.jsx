import React, { useState } from 'react'
import { Container } from './styles'
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
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const dispatch = useDispatch()

  const handlePaymentInformation = () => {
    const payload = {
      cardNumber,
      name,
      expiryDate,
      cvv
    }
    dispatch(handlePayment(payload))
  }

  return (
    <>
      <Header />
      <Container>
        <PaymentForm
          fillCardNumber={setCardNumber}
          fillName={setName}
          fillCVV={setCvv}
          fillExpiryDate={setExpiryDate}
        />
        <Summary />
        <ActionButton
          handlePaymentInformation={handlePaymentInformation}
          pathToGo={'/confirmation'}
          actionText={'Finalizar o pedido'}
        />
      </Container>
    </>
  )
}
