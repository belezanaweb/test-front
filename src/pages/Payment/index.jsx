import React, { useState } from 'react'
import { Container } from './styles'
import { Summary } from '../../components/Summary'
import { ActionButton } from '../../components/ActionButton'
import { Header } from '../../components/Header'
import { PaymentForm } from '../../components/PaymentForm'
import { useDispatch } from 'react-redux'
import { handlePayment } from '../../redux/slices/paymentSlice'

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
