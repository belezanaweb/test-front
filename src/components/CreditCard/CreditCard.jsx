import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import { cardValidateMask, creditCardMask, cvvMask } from '../../utils/masks'
import { cardValidatePlace, creditCardPlace, cvvPlace } from '../../utils/placeholders'
import { creditCardInfo, verifyIfInformationIsValid } from './paymentUtils'
import * as CSS from './style'

export default function CreditCard() {
  const [crediCardData, setCreditCardData] = useState(creditCardInfo)

  const handleChange = (type, event) => {
    const value = event.target.value.replace(/[._]/g, '')
    const isValid = verifyIfInformationIsValid(type, value)

    setCreditCardData({
      ...crediCardData,
      [type]: {
        value: value,
        valid: isValid
      }
    })
  }

  return (
    <>
      <CSS.Row>
        <Input
          label="Número do cartão"
          mask={creditCardMask}
          placeholder={creditCardPlace}
          name="credit-card-number"
          onChange={(event) => handleChange('number', event)}
          valid={crediCardData.number.valid}
        ></Input>
      </CSS.Row>

      <CSS.Row>
        <Input
          label="Nome do titular"
          placeholder="Como no cartão"
          onChange={(event) => handleChange('owner', event)}
          valid={crediCardData.owner.valid}
        ></Input>
      </CSS.Row>

      <CSS.Row>
        <Input
          label="Validade (mês/ano)"
          mask={cardValidateMask}
          placeholder={cardValidatePlace}
          name="credit-card-validate"
          onChange={(event) => handleChange('validate', event)}
          valid={crediCardData.validate.valid}
        ></Input>
        <Input
          label="CVV"
          mask={cvvMask}
          placeholder={cvvPlace}
          name="credit-card-cvv"
          onChange={(event) => handleChange('cvv', event)}
          valid={crediCardData.cvv.valid}
        ></Input>
      </CSS.Row>
    </>
  )
}
