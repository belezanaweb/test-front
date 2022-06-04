import React from 'react'

import { ALignTwoInputs } from './styles'

import Input from '../../atoms/Input'

function FormCreditCard() {
  return (
    <form action="submit">
      <Input
        mask="9999.9999.9999"
        type="text"
        placeholder="_ _ _ _._ _ _ _._ _ _ _._ _ _ _"
        label="Número do cartão:"
      />
      <Input type="text" placeholder="Como no cartão" label="Nome do titular:" />
      <ALignTwoInputs>
        <Input mask="99/9999" type="text" placeholder="_ _/_ _ _ _" label="Validade (mês/ano):" />
        <Input mask="999" type="text" placeholder="_ _ _" label="CVV" />
      </ALignTwoInputs>
    </form>
  )
}

export default FormCreditCard
