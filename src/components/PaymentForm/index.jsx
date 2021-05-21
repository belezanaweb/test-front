import { Inputs } from 'components/Inputs'
import React from 'react'

import { paymentData } from 'constants/data/containers/payment'
import * as S from './styled'

export const PaymentForm = () => {
  const { cardNumber, cvv, cardName, cardDate } = paymentData

  return (
    <S.PaymentForm autoComplete="off">
      <Inputs {...cardNumber} />
      <Inputs {...cardName} />
      <S.PaymentFormHalf>
        <Inputs {...cardDate} />
        <Inputs {...cvv} />
      </S.PaymentFormHalf>
    </S.PaymentForm>
  )
}
