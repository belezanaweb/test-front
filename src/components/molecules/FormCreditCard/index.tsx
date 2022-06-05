import React from 'react'

import { ALignTwoInputs } from './styles'

import Input from '../../atoms/Input'
import { FormProps } from '../../../types/FormTypes'
import { useCheckout } from '../../../providers/checkout'

function FormCreditCard() {
  const { creditCard, setCreditCard, name, setName, date, setDate, cvv, setCvv } = useCheckout()

  return (
    <>
      <Input
        mask="9999.9999.9999"
        type="text"
        value={creditCard}
        setValues={setCreditCard}
        placeholder="_ _ _ _._ _ _ _._ _ _ _._ _ _ _"
        label="Número do cartão:"
      />
      <Input
        type="text"
        value={name}
        setValues={setName}
        placeholder="Como no cartão"
        label="Nome do titular:"
      />
      <ALignTwoInputs>
        <Input
          mask="99/9999"
          type="text"
          value={date}
          setValues={setDate}
          placeholder="_ _/_ _ _ _"
          label="Validade (mês/ano):"
        />
        <Input
          mask="999"
          type="text"
          value={cvv}
          setValues={setCvv}
          placeholder="_ _ _"
          label="CVV"
        />
      </ALignTwoInputs>
    </>
  )
}

export default FormCreditCard
