import { useCheckoutContext } from 'context/checkout.context'
import React, { FC } from 'react'
import { PaymentInfoStyled } from './payment-info.style'

export const PaymentInfo: FC<{ children?: never }> = () => {
  const {
    paymentInfo: { number, name, expDate }
  } = useCheckoutContext()

  return (
    <PaymentInfoStyled>
      <p>{number}</p>
      <p>{name.toUpperCase()}</p>
      <p>{expDate}</p>
    </PaymentInfoStyled>
  )
}
