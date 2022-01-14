import React from 'react'
import { useCreditCardForm } from '../../contexts/useCreditCardForm'

import {
  CreditCardInfoContainer,
  CreditCardInfoText,
  CreditCardInfoTitle
} from './CreditCardInfo.elements'

export default function CreditCardInfo() {
  const { creditCardNumber, name, dateValidate } = useCreditCardForm()

  const creditCardNumberFormated = creditCardNumber.slice(-4).padStart(creditCardNumber.length, '*')

  return (
    <section>
      <CreditCardInfoTitle />
      <CreditCardInfoContainer>
        <CreditCardInfoText>{creditCardNumberFormated}</CreditCardInfoText>
        <CreditCardInfoText>{name}</CreditCardInfoText>
        <CreditCardInfoText>{dateValidate}</CreditCardInfoText>
      </CreditCardInfoContainer>
    </section>
  )
}
