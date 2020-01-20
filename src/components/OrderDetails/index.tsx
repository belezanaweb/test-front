import React from 'react'

interface Props {
  details: Inputs
}

const OrderDetails: React.FC<Props> = ({ details: { cardholder, creditcard, expdate } }) => {
  return (
    <div>
      <span>{creditcard.value}</span>
      <span>{cardholder.value}</span>
      <span>{expdate.value}</span>
    </div>
  )
}

export default OrderDetails
