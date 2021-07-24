import React from 'react'
import { validateDate, validDate } from '../../helpers/functions'
import Input from '../Input'
import { ContainerCreditCardForm, WrapperInput } from './styles'

function CreditCardForm({
  creditCard,
  setCreditCard,
  name,
  setName,
  expirationDate,
  setExpirationDate,
  cvv,
  setCvv
}) {
  console.log(validateDate())

  return (
    <ContainerCreditCardForm>
      <Input
        placeholder="____.____.____.____"
        label="Número do cartão"
        value={creditCard}
        onChange={(event) => setCreditCard(event.target.value)}
        mask="9999.9999.9999.9999"
        size={20}
        error={creditCard.length < 19 && creditCard.length !== 0}
      />
      <Input
        placeholder="Como no cartão"
        label="Nome do titular"
        margin="1.5rem 0"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <WrapperInput>
        <Input
          placeholder="__/____"
          label="Validade (mês/ano)"
          maxWidth="10rem"
          value={expirationDate}
          onChange={(event) => setExpirationDate(event.target.value)}
          mask="99/9999"
          size={7}
          error={
            (expirationDate.length < 7 && expirationDate.length !== 0) ||
            (expirationDate.length !== 0 && !validDate(expirationDate))
          }
        />
        <Input
          placeholder="___"
          label="CVV"
          maxWidth="8.75rem"
          value={cvv}
          onChange={(event) => setCvv(event.target.value)}
          maxLength="3"
          mask="999"
          error={cvv.length < 3 && cvv.length !== 0}
        />
      </WrapperInput>
    </ContainerCreditCardForm>
  )
}

export default CreditCardForm
