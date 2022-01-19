import React from 'react'
import Navbar from '../../components/Navbar'
import { useCheckoutContext } from '../../contexts/Checkout'

const SuccessPage = () => {
  const { isLoading, prices, products, isValidated, paymentInfo } = useCheckoutContext()

  return (
    <>
      <Navbar step={2} />
      <div>
        <PaymentConfirmation status={'success'} />
      </div>
    </>
  )
}

export default SuccessPage
