import React from 'react'
import Input from '../Input'
import { ContainerCreditCardForm, WrapperInput } from './styles'

function CreditCardForm() {
  return (
    <ContainerCreditCardForm>
      <Input placeholder="____.____.____.____" label="Número do cartão" />
      <Input placeholder="Como no cartão" label="Nome do titular" margin="1.5rem 0" />
      <WrapperInput>
        <Input placeholder="__/____" label="Validade (mês/ano)" maxWidth="10rem" />
        <Input placeholder="___" label="CVV" maxWidth="8.75rem" />
      </WrapperInput>
    </ContainerCreditCardForm>
  )
}

export default CreditCardForm
