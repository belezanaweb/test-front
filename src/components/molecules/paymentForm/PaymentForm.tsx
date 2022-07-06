import React from 'react'
import { DeepRequired, FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { FormMessages } from '../../../constants/formMessages'
import { formatCreditCard, formatCvv, formatValidDate } from '../../../utils/mask'
import { Input, Paper } from '../../atoms'
import { RowFields } from './PaymentForm.style'

export interface FormData {
  cardNumber: string
  cardName: string
  date: string
  cvv: string
}

interface PaymentFormProps {
  register: UseFormRegister<FormData>
  errors: FieldErrorsImpl<DeepRequired<FormData>>
}

export const PaymentForm = ({ register, errors }: PaymentFormProps) => (
  <Paper title="cartão de crédito">
    <Input
      label="Número do Cartão:"
      placeholder="_ _ _ _._ _ _ _._ _ _ _._ _ _ _"
      error={errors.cardNumber?.message}
      {...register('cardNumber', {
        required: FormMessages.required,
        pattern: {
          value: /^[0-9]{4}\.[0-9]{4}\.[0-9]{4}\.[0-9]{4}$/i,
          message: FormMessages.invalid
        }
      })}
      onChange={(event) => {
        const { target } = event
        target.value = formatCreditCard(target.value)
      }}
    />

    <Input
      label="Nome do Titular:"
      placeholder="Como no cartão"
      error={errors.cardName?.message}
      {...register('cardName', { required: FormMessages.required })}
    />

    <RowFields>
      <Input
        label="Validade (mês/ano):"
        placeholder="_ _/_ _ _ _"
        error={errors.date?.message}
        {...register('date', {
          required: FormMessages.required,
          pattern: {
            value: /^[0-9]{2,}\/[0-9]{4,}/i,
            message: FormMessages.invalid
          }
        })}
        onChange={(event) => {
          const { target } = event
          target.value = formatValidDate(target.value)
        }}
      />

      <Input
        label="CVV:"
        placeholder="_ _ _"
        minWidth="140px"
        error={errors.cvv?.message}
        {...register('cvv', {
          required: FormMessages.required,
          pattern: {
            value: /^[0-9]{3}$/i,
            message: FormMessages.invalid
          }
        })}
        onChange={(event) => {
          const { target } = event
          target.value = formatCvv(target.value)
        }}
      />
    </RowFields>
  </Paper>
)
