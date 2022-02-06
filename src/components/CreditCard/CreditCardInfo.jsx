import React from 'react'
import * as CSS from './style'
import { ofuscateCardNumber } from './paymentUtils'

export default function CreditCardInfo({ paymentInfo }) {
  const { number, owner, validate } = paymentInfo

  return (
    <>
      <CSS.P>{number && ofuscateCardNumber(number.value)}</CSS.P>
      <CSS.P>{owner && owner.value}</CSS.P>
      <CSS.P>{validate && validate.value}</CSS.P>
    </>
  )
}
