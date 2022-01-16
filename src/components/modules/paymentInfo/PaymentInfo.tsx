import React, { useContext } from 'react'

import { PurchaseContext } from '../../../contexts/PurchaseContext'

import { hideCreditCardNumber } from '../../../utils/format.utils'

import { StyledPaymentInfo } from './PaymentInfo.styled'

function PaymentInfo(): JSX.Element {
  const { paymentInfo } = useContext(PurchaseContext)

  return (
    <StyledPaymentInfo>
      <p>
        {paymentInfo?.creditCardNumber ? hideCreditCardNumber(paymentInfo?.creditCardNumber) : ''}
      </p>
      <p>{paymentInfo?.creditCardName ?? ''}</p>
      <p>{paymentInfo?.creditCardExpirationDate ?? ''}</p>
    </StyledPaymentInfo>
  )
}

export default PaymentInfo
