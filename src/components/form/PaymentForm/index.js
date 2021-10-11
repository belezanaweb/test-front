import React from 'react'
import { useHistory } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import Input from '../Input'
import * as S from './styles'
import format from '../../../helpers/utility'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../../store/ducks/cart.ducks'

const PaymentForm = ({ formRef }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  const onSubmit = (data) => {
    dispatch(CartActions.getCreditCardData(data))
    history.replace('/sucesso')
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} data-testid="form-test" ref={formRef}>
      <Controller
        name="cardNumber"
        rules={{ required: true }}
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            name="cardNumber"
            type="text"
            label="Número do cartão:"
            placeholder="____.____.____.____"
            control={control}
            onChange={onChange}
            value={format.cardNumber(value)}
            error={errors.cardNumber}
          />
        )}
      />
      <Controller
        name="name"
        rules={{ required: true }}
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            name="name"
            label="Nome do titular:"
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
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              name="expirationDate"
              type="text"
              label="Validade (mês/ano):"
              placeholder="__/____"
              control={control}
              onChange={onChange}
              value={format.expirationDate(value)}
              error={errors.expirationDate}
            />
          )}
        />
        <Controller
          name="cvvCode"
          rules={{ required: true }}
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              name="cvvCode"
              type="text"
              label="CVV:"
              placeholder="___"
              control={control}
              onChange={onChange}
              value={format.cvvCode(value)}
              error={errors.cvvCode}
            />
          )}
        />
      </S.Flex>
    </S.Form>
  )
}

export default PaymentForm
