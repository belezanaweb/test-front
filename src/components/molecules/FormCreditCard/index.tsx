import React from 'react'

import { ALignTwoInputs } from './styles'

import Input from '../../atoms/Input'
import { useCheckout } from '../../../providers/checkout'

function FormCreditCard() {
  const {
    creditCard,
    setCreditCard,
    name,
    setName,
    date,
    setDate,
    cvv,
    setCvv,
    error
  } = useCheckout()

  return (
    <>
      <Input
        mask="9999.9999.9999.9999"
        type="text"
        value={creditCard}
        setValues={setCreditCard}
        placeholder="_ _ _ _._ _ _ _._ _ _ _._ _ _ _"
        label="Número do cartão:"
        errorComponent={
          error.creditCard !== '' ? <p className="error">{error.creditCard}</p> : <></>
        }
      />
      <Input
        type="text"
        value={name}
        setValues={setName}
        placeholder="Como no cartão"
        label="Nome do titular:"
        errorComponent={error.name !== '' ? <p className="error">{error.name}</p> : <></>}
      />
      <ALignTwoInputs>
        <Input
          mask="99/9999"
          type="text"
          value={date}
          setValues={setDate}
          placeholder="_ _/_ _ _ _"
          label="Validade (mês/ano):"
          errorComponent={error.date !== '' ? <p className="error">{error.date}</p> : <></>}
        />
        <Input
          mask="999"
          type="text"
          value={cvv}
          setValues={setCvv}
          placeholder="_ _ _"
          label="CVV"
          errorComponent={error.cvv !== '' ? <p className="error">{error.cvv}</p> : <></>}
        />
      </ALignTwoInputs>
    </>
  )
}

export default FormCreditCard
