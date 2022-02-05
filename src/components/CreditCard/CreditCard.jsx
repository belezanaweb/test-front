import React from 'react'
import Input from '../../components/Input/Input'
import * as CSS from './style'

export default function CreditCard() {
  const creditCardPlace = '____.____.____.____'
  const cardValidatePlace = '__/____'
  const cvvPlace = '___'

  const creditCardMask = '9999.9999.9999.9999'
  const cardValidateMask = '99/9999'
  const cvvMask = '999'

  return (
    <>
      <CSS.Column>
        <Input
          label="Número do cartão"
          mask={creditCardMask}
          placeholder={creditCardPlace}
          name="credit-card-number"
        ></Input>
      </CSS.Column>

      <CSS.Column>
        <Input label="Nome do titular" placeholder="Como no cartão"></Input>
      </CSS.Column>

      <CSS.Column>
        <Input
          label="Validade (mês/ano)"
          mask={cardValidateMask}
          placeholder={cardValidatePlace}
          name="cvv-number"
        ></Input>
        <Input label="CVV" mask={cvvMask} placeholder={cvvPlace}></Input>
      </CSS.Column>
    </>
  )
}
