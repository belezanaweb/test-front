import React from 'react'
import PropTypes from 'prop-types'
import { BoxPaymentData } from './style'

/*
    Component for PaymentData Box
    Props:
    titleInput - Title for description box
    children - 
*/

const Payment = () => {
  return (
    <>
      <BoxPaymentData></BoxPaymentData>
    </>
  )
}

Payment.prototype = {
  titleInput: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Payment
