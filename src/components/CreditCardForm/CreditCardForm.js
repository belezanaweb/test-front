import React from 'react'
import { useCreditCardForm } from '../../contexts/useCreditCardForm'

import {
  FormContainer,
  FormInput,
  FormInputContainer,
  FormInputContainerSpecial,
  FormInputLabel,
  FormInputLabelError,
  FormTitle
} from './CreditCardForm.elements'

export default function CreditCardForm() {
  const {
    creditCardNumber,
    name,
    dateValidate,
    cvv,
    setCreditCardNumber,
    setName,
    setDateValidate,
    setCvv,
    creditCardNumberHelperText,
    nameHelperText,
    dateValidateHelperText,
    cvvHelperText
  } = useCreditCardForm()

  const maskCreditCardNumber = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1.$2')
      .replace(/(\d{4})(\d)/, '$1.$2')
      .replace(/(\d{4})(\d)/, '$1.$2')
      .replace(/(\d{4})\d+?$/, '$1')
  }

  const maskDateValidate = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1')
  }

  const handleChangeCreditCardNumber = (event) => {
    const {
      target: { value }
    } = event

    setCreditCardNumber(maskCreditCardNumber(value))
  }

  const handleChangeName = (event) => {
    const {
      target: { value }
    } = event

    setName(value)
  }

  const handleChangeDateValidate = (event) => {
    const {
      target: { value }
    } = event

    setDateValidate(maskDateValidate(value))
  }

  const handleChangeCvv = (event) => {
    const {
      target: { value }
    } = event

    setCvv(value.replace(/\D/g, ''))
  }

  return (
    <section>
      <FormTitle>CARTÃO DE CRÉDITO</FormTitle>
      <FormContainer>
        <FormInputContainer>
          <FormInputLabel htmlFor="numberCard">Número do cartão:</FormInputLabel>
          <FormInput
            id="numberCard"
            placeholder="_ _ _ _._ _ _ _._ _ _ _._ _ _ _"
            value={creditCardNumber}
            onChange={handleChangeCreditCardNumber}
            error={!!creditCardNumberHelperText}
          />
          {!!creditCardNumberHelperText && (
            <FormInputLabelError>{creditCardNumberHelperText}</FormInputLabelError>
          )}
        </FormInputContainer>
        <FormInputContainer>
          <FormInputLabel htmlFor="nameCard">Nome do titular:</FormInputLabel>
          <FormInput
            id="nameCard"
            placeholder="Como no cartão"
            maxLength="50"
            value={name}
            onChange={handleChangeName}
            error={!!nameHelperText}
          />
          {!!nameHelperText && <FormInputLabelError>{nameHelperText}</FormInputLabelError>}
        </FormInputContainer>
        <FormInputContainerSpecial>
          <FormInputContainer>
            <FormInputLabel htmlFor="dateValidateCard">Validade (mês/ano):</FormInputLabel>
            <FormInput
              id="dateValidateCard"
              placeholder="_ _/_ _ _ _"
              value={dateValidate}
              onChange={handleChangeDateValidate}
              error={!!dateValidateHelperText}
            />
            {!!dateValidateHelperText && (
              <FormInputLabelError>{dateValidateHelperText}</FormInputLabelError>
            )}
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel htmlFor="cvvCard">CVV:</FormInputLabel>
            <FormInput
              id="cvvCard"
              placeholder="_ _ _"
              maxLength="3"
              value={cvv}
              onChange={handleChangeCvv}
              error={!!cvvHelperText}
            />
            {!!cvvHelperText && <FormInputLabelError>{cvvHelperText}</FormInputLabelError>}
          </FormInputContainer>
        </FormInputContainerSpecial>
      </FormContainer>
    </section>
  )
}
