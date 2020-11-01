import React, { forwardRef } from 'react'
import {
  PaymentFormSection,
  PaymentFormWrapper,
  PaymentFormWideInput,
  PaymentFormTitle
} from './PaymentForm.styles'
import { Input } from '../Input/Input'

export const PaymentForm = forwardRef(({ title = 'Cartão de Crédito', ...props }, ref) => (
  <PaymentFormSection>
    <PaymentFormTitle>{title}</PaymentFormTitle>
    <PaymentFormWrapper ref={ref} method="POST" id="_form" as="form" {...props}>
      <PaymentFormWideInput
        id="_input_credit_card"
        label="Número do cartão:"
        errorMessage="Número do cartão de crédito inválido"
        required
        name="cardnumber"
        autoComplete="cc-number"
        placeholder="____.____.____.____"
        pattern="\d{4}\.\d{4}\.\d{4}\.\d{4}"
        mask={[
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ]}
        guide
      />
      <PaymentFormWideInput
        id="_input_name"
        label="Nome do titular:"
        required
        name="ccname"
        autoComplete="cc-name"
        placeholder="Como no cartão"
      />
      <Input
        id="_input_expiry_date"
        label="Validade (mês/ano):"
        errorMessage="Validade do cartão de crédito inválida"
        required
        name="cc-exp"
        autoComplete="cc-exp"
        placeholder="__/____"
        pattern="\d{2}/\d{4}"
        mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        guide
      />
      <Input
        id="_input_cvc"
        label="CVV:"
        errorMessage="CVV do cartão de crédito inválido"
        required
        name="cvc"
        autoComplete="cc-csc"
        placeholder="___"
        pattern="\d{3}"
        mask={[/\d/, /\d/, /\d/]}
        guide
      />
    </PaymentFormWrapper>
  </PaymentFormSection>
))
