import React from 'react'

import PaymentForm from '../../../Components/Forms/Payment/PaymentForm'
import Title from '../../../Components/Title/Title'
import './Payment.css'

const Payment = (props) => {
  return (
    <div className="Payment">
      <Title title="Cartão de crédito" />
      <PaymentForm onChangePage={props.onChangePage} />
    </div>
  )
}

export default Payment
