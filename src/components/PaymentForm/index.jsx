import React from 'react'
import { SectionHeader } from '../SectionHeader'
import { SectionContainer, InnerContainer, DateCVVContainer, Input } from './styles'
import { ActionButton } from '../ActionButton'
import { Summary } from '../Summary'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const paymentValidation = yup.object().shape({
  cardNumber: yup
    .string()
    .required('Campo inválido. Ex: 1234.1234.1234.1234')
    .min(19, 'Campo inválido. Ex: 1234.1234.1234.1234')
    .test('test-number', 'Campo inválido. Ex: 1234.1234.1234.1234', (value) =>
      /(\d{4}\.){3}/g.test(value)
    ),
  name: yup
    .string()
    .required('Campo inválido')
    .test(
      'test-name',
      'Campo inválido. No mínimo um nome e um sobrenome.',
      (value) => value.split(' ').length >= 2
    ),
  expiryDate: yup
    .string()
    .required('Campo inválido. Ex: 07/2024')
    .min(7, 'Campo inválido. Ex: 07/2024')
    .test('test-date', 'Campo inválido. Cartão vencido.', (value) =>
      /(0?[1-9]|1[0-2])\/(20[2-9][2-9]$)/.test(value)
    ),
  cvv: yup.string().required('Campo inválido').min(3, 'Campo inválido. Ex: 667')
})

export const PaymentForm = ({ handlePaymentInformation }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid }
  } = useForm({
    mode: 'all',
    resolver: yupResolver(paymentValidation)
  })

  const handleFormData = (data) => {
    handlePaymentInformation(data)
  }

  return (
    <>
      <SectionContainer>
        <SectionHeader text={'Cartão de Crédito'} />
        <InnerContainer>
          <form id="payment-form" data-testid="payment-form">
            <label htmlFor="cardNumber">
              <span>Número do Cartão:</span>
              <Input
                id="cardNumber"
                data-testid="card-number-input"
                type="text"
                placeholder="____.____.____.____"
                name="cardNumber"
                {...register('cardNumber')}
                maxLength={19}
                error={!getValues('cardNumber') || errors.cardNumber}
              />
              <p>{errors.cardNumber?.message}</p>
            </label>
            <label htmlFor="name">
              <span>Nome do Titular</span>
              <Input
                id="name"
                data-testid="name-input"
                type="text"
                placeholder="Como no cartão"
                name="name"
                {...register('name')}
                maxLength={50}
                error={!getValues('name') || errors.name}
              />
              <p>{errors.name?.message}</p>
            </label>
            <DateCVVContainer>
              <label htmlFor="expiryDate">
                <span>Validade (mês/ano):</span>
                <Input
                  id="expiryDate"
                  data-testid="expiry-date-input"
                  type="text"
                  placeholder="__/____"
                  name="expiryDate"
                  {...register('expiryDate')}
                  maxLength={7}
                  error={!getValues('expiryDate') || errors.expiryDate}
                />
                <p>{errors.expiryDate?.message}</p>
              </label>
              <label htmlFor="cvv">
                <span>CVV:</span>
                <Input
                  id="cvv"
                  data-testid="cvv-input"
                  type="text"
                  placeholder="___"
                  name="cvv"
                  {...register('cvv')}
                  maxLength={3}
                  error={!getValues('cvv') || errors.cvv}
                />
                <p>{errors.cvv?.message}</p>
              </label>
            </DateCVVContainer>
          </form>
        </InnerContainer>
      </SectionContainer>
      <SectionContainer>
        <Summary />
        <ActionButton
          type="submit"
          handleSubmit={handleSubmit(handleFormData)}
          form="payment-form"
          pathToGo={'/confirmation'}
          actionText={'Finalizar o pedido'}
          disabled={!isValid}
        />
      </SectionContainer>
    </>
  )
}
