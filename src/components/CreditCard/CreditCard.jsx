import React from 'react'
import Input from '../../components/Input/Input'
import * as CSS from './style'

export default function CreditCard() {
  const creditCardMask = '____.____.____.____'
  const cardValiddateMask = '__/____'
  const cvvMask = '___'

  return (
    <>
      <CSS.Column>
        <Input label="Número do cartão" placeholder={creditCardMask}></Input>
      </CSS.Column>

      <CSS.Column>
        <Input label="Nome do titular" placeholder="Como no cartão"></Input>
      </CSS.Column>

      <CSS.Column>
        <Input label="Validade (mês/ano)" placeholder={cardValiddateMask}></Input>
        <Input label="CVV" placeholder={cvvMask}></Input>
      </CSS.Column>
    </>
  )
}
