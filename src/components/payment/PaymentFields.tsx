import React from 'react'

import getErrorMessage from '@/utils/getErrorMessage'
import normalizeCardNumber from '@/utils/normalizeCardNumber'
import normalizeCardExpiringDate from '@/utils/normalizeCardExpiringDate'

import { styled } from '@/style/stitches.config'

import Box from '@/components/Box'
import Input from '@/components/Input'

const FlexStyled = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20
})

function PaymentFields (props: any): JSX.Element {
  const { register, errors } = props

  return (
    <Box title="Cartão de crédito">
      <Input
        placeholder="_ _ _ _ . _ _ _ _ . _ _ _ _ . _ _ _ _"
        label="Número do cartão"
        maxLength={19}
        register={register('cardNumber', {
          required: getErrorMessage('required'),
          minLength: {
            value: 19,
            message: 'O campo deve conter pelo menos 19 caracteres'
          }
        })}
        error={errors.cardNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          event.target.value = normalizeCardNumber(event.target.value)
        }}
        autoComplete="cc-number"
      />
      <Input
        placeholder="Como no cartão"
        label="Nome do titular"
        register={register('cardholder', {
          required: getErrorMessage('required'),
          minLength: {
            value: 10,
            message: 'O campo deve conter pelo menos 10 caracteres'
          }
        })}
        error={errors.cardholder}
      />
      <FlexStyled>
        <Input
          placeholder="_ _ / _ _ _ _"
          label="Validade (mês/ano)"
          maxLength={7}
          register={register('cardExpiringDate', {
            required: getErrorMessage('required'),
            minLength: {
              value: 7,
              message: 'O campo deve conter pelo menos 7 caracteres'
            }
          })}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.target.value = normalizeCardExpiringDate(event.target.value)
          }}
          error={errors.cardExpiringDate}
          twoColumns
        />
        <Input
          placeholder="_ _ _"
          maxLength={3}
          label="CVV"
          register={register('cvv', {
            required: getErrorMessage('required'),
            minLength: {
              value: 3,
              message: 'O campo deve conter 3 caracteres'
            }
          })}
          error={errors.cvv}
          twoColumns
        />
      </FlexStyled>
    </Box>
  )
}

export default PaymentFields
