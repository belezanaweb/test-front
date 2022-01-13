import React from 'react'

import {
  CreditCardInfoContainer,
  CreditCardInfoText,
  CreditCardInfoTitle
} from './CreditCardInfo.elements'

export default function CreditCardInfo() {
  return (
    <section>
      <CreditCardInfoTitle />
      <CreditCardInfoContainer>
        <CreditCardInfoText>****.****.****.1234</CreditCardInfoText>
        <CreditCardInfoText>JOSÉ DA SILVA</CreditCardInfoText>
        <CreditCardInfoText>05/2019</CreditCardInfoText>
      </CreditCardInfoContainer>
    </section>
  )
}
