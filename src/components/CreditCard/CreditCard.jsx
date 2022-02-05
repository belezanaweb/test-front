import React from 'react'
import Input from '../../components/Input/Input'
import { cardValidateMask, creditCardMask, cvvMask } from '../../utils/masks'
import { cardValidatePlace, creditCardPlace, cvvPlace } from '../../utils/placeholders'
import * as CSS from './style'

const handleChange = (type, event) => {
  console.log(type, event.target.value)
}

export default function CreditCard() {
  return (
    <>
      <CSS.Column>
        <Input
          label="Número do cartão"
          mask={creditCardMask}
          placeholder={creditCardPlace}
          name="credit-card-number"
          onChange={(event) => handleChange('credit-card-number', event)}
        ></Input>
      </CSS.Column>

      <CSS.Column>
        <Input
          label="Nome do titular"
          placeholder="Como no cartão"
          onChange={(event) => handleChange('credit-card-owner', event)}
        ></Input>
      </CSS.Column>

      <CSS.Column>
        <Input
          label="Validade (mês/ano)"
          mask={cardValidateMask}
          placeholder={cardValidatePlace}
          name="credit-card-validate"
          onChange={(event) => handleChange('credit-card-validate', event)}
        ></Input>
        <Input
          label="CVV"
          mask={cvvMask}
          placeholder={cvvPlace}
          name="credit-card-cvv"
          onChange={(event) => handleChange('credit-card-cvv', event)}
        ></Input>
      </CSS.Column>
    </>
  )
}
