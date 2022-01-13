import React from 'react'
import {
  FormContainer,
  FormInput,
  FormInputContainer,
  FormInputContainerSpecial,
  FormInputLabel,
  FormTitle
} from './CreditCardForm.elements'

export default function CreditCardForm() {
  return (
    <section>
      <FormTitle>CARTÃO DE CRÉDITO</FormTitle>
      <FormContainer>
        <FormInputContainer>
          <FormInputLabel htmlFor="numberCard">Número do cartão:</FormInputLabel>
          <FormInput id="numberCard" placeholder="_ _ _ _._ _ _ _._ _ _ _._ _ _ _" />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputLabel htmlFor="nameCard">Nome do titular:</FormInputLabel>
          <FormInput id="nameCard" placeholder="Como no cartão" />
        </FormInputContainer>
        <FormInputContainerSpecial>
          <FormInputContainer>
            <FormInputLabel htmlFor="dateValidateCard">Validade (mês/ano):</FormInputLabel>
            <FormInput id="dateValidateCard" placeholder="_ _/_ _ _ _" />
          </FormInputContainer>
          <FormInputContainer>
            <FormInputLabel htmlFor="cvvCard">CVV:</FormInputLabel>
            <FormInput id="cvvCard" placeholder="_ _ _" />
          </FormInputContainer>
        </FormInputContainerSpecial>
      </FormContainer>
    </section>
  )
}
