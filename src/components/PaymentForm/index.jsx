import React from 'react'
import { SectionHeader } from '../SectionHeader'
import { SectionContainer, InnerContainer, DateCVVContainer } from './styles'
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
    formState: { errors, isDirty }
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
            <label>
              <span>Número do Cartão:</span>
              <input
                data-testid="card-number-input"
                type="text"
                placeholder="____.____.____.____"
                name="cardNumber"
                {...register('cardNumber')}
                maxLength={19}
              />
              <p>{errors.cardNumber?.message}</p>
            </label>
            <label>
              <span>Nome do Titular</span>
              <input
                data-testid="name-input"
                type="text"
                placeholder="Como no cartão"
                name="name"
                {...register('name')}
                maxLength={50}
              />
              <p>{errors.name?.message}</p>
            </label>
            <DateCVVContainer>
              <label>
                <span>Validade (mês/ano):</span>
                <input
                  data-testid="expiry-date-input"
                  type="text"
                  placeholder="__/____"
                  name="expiryDate"
                  {...register('expiryDate')}
                  maxLength={7}
                />
                <p>{errors.expiryDate?.message}</p>
              </label>
              <label>
                <span>CVV:</span>
                <input
                  data-testid="cvv-input"
                  type="text"
                  placeholder="___"
                  name="cvv"
                  {...register('cvv')}
                  maxLength={3}
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
          disabled={!isDirty || Object.entries(errors).length > 0}
        />
      </SectionContainer>
    </>
  )
}
