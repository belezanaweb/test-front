import React from 'react'
import Navbar from '../../components/Navbar'
import { useCheckoutContext } from '../../contexts/Checkout'
import PaymentConfirmation from '../../components/PaymentConfirmation'
import CardContainer from '../../components/CardContainer'

const SuccessPage = () => {
  const { paymentInfo } = useCheckoutContext()
  const { cardName, cardNumber, cardDate } = paymentInfo
  const successPageText = {
    containerPaymentTitle: 'Pagamento',
    containerProductsTitle: 'Produtos'
  }

  const maskCreditCardNumber = (number) => {
    return '****.****.****.' + number.substring(15)
  }

  return (
    <>
      <Navbar step={2} />
      <div>
        <PaymentConfirmation status={'success'} />
        <CardContainer title={successPageText.containerPaymentTitle}>
          <div>{maskCreditCardNumber(cardNumber)}</div>
          <div>{cardName}</div>
          <div>{cardDate}</div>
        </CardContainer>
      </div>
    </>
  )
}

export default SuccessPage
