import React from 'react'
import Card from '../Card'
import { OrderDetailsStyle } from './style'

interface Props {
  details: Inputs
}

const OrderDetails: React.FC<Props> = ({ details: { cardholder, creditcard, expdate } }) => {
  return (
    <Card>
      <OrderDetailsStyle>
        <span>{creditcard.value}</span>
        <span>{cardholder.value}</span>
        <span>{expdate.value}</span>
      </OrderDetailsStyle>
    </Card>
  )
}

export default OrderDetails
