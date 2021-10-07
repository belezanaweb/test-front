import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Input from '../Input'
import * as S from './styles'

const PaymentForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} data-testid="form-test">
      <Controller
        name="cardNumber"
        rules={{ required: true }}
        defaultValue={null}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            name="cardNumber"
            label="Número do cartão:"
            placeholder="____.____.____.____"
            control={control}
            onChange={onChange}
            value={value}
            error={errors.cardNumber}
          />
        )}
      />
      <Controller
        name="name"
        rules={{ required: true }}
        defaultValue={null}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            name="name"
            label="Nome do titular"
            placeholder="Como no cartão"
            control={control}
            onChange={onChange}
            value={value}
            error={errors.name}
          />
        )}
      />
      <S.Flex>
        <Controller
          name="expirationDate"
          rules={{ required: true }}
          defaultValue={null}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              name="expirationDate"
              label="Validade (mês/ano):"
              placeholder="__/____"
              control={control}
              onChange={onChange}
              value={value}
              error={errors.expirationDate}
            />
          )}
        />
        <Controller
          name="cvcCode"
          rules={{ required: true }}
          defaultValue={null}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              name="cvcCode"
              label="CVV:"
              placeholder="___"
              control={control}
              onChange={onChange}
              value={value}
              error={errors.cvcCode}
            />
          )}
        />
      </S.Flex>
    </S.Form>
  )
}

export default PaymentForm
