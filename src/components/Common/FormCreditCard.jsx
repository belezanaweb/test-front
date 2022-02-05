import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from './Input'
import styled from 'styled-components'
import { useRegisterCardContext } from '../../context/useRegisterCardContext'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkExpiry, checkNumberCard } from '../../utils/validateFunction'

/**
 *  Function to render default card
 */

export default function FormCreditCard() {
  const navigate = useNavigate()
  const { update } = useRegisterCardContext()
  const cardStorage = JSON.parse(localStorage.getItem('gb:card'))

  //Schema to validation of card
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome requirido'),
    number: Yup.string()
      .required('Número do cartão requirido')
      .min(19, 'Número do cartão inválido')
      .test('checkNumberCard', 'Número do cartão inválido', (value) => checkNumberCard(value)),
    cvv: Yup.string().required('CVV requirido').min(3, 'CVV deve conter 3 dígitos'),
    expiry: Yup.string()
      .required('Validade requirido')
      .min(6, 'Minimo 6 caracteres')
      .test('checkExpiry', 'Digite um mês e ano válido, mês 1-12 / ano 2022-2030', (value) =>
        checkExpiry(value)
      )
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // function to save card
  function onSubmit(values) {
    update(values)
    navigate('/confirmation')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelText="Número do cartão:"
        placeholder="____.____.____.____"
        mask="9999.9999.9999.9999"
        id="cardnumber"
        defaultValue={cardStorage?.number || ''}
        error={errors?.number?.message}
        register={{ ...register('number') }}
      />
      <Input
        labelText="Nome do Titular:"
        placeholder="Como no cartão"
        id="cardName"
        defaultValue={cardStorage?.name || ''}
        error={errors?.name?.message}
        register={{
          ...register('name', {
            onChange: (e) => setValue('name', e.target.value.replace(/([^a-zA-Z ])+/gim, ''))
          })
        }}
      />
      <Container>
        <Input
          labelText="Validade (mês/ano):"
          placeholder="__/____"
          id="cardExpiry"
          mask="99/9999"
          defaultValue={cardStorage?.expiry || ''}
          error={errors?.expiry?.message}
          register={{ ...register('expiry') }}
        />
        <Input
          labelText="CVV:"
          placeholder="___"
          id="cardCvv"
          type="password"
          maxLength="3"
          defaultValue={cardStorage?.cvv || ''}
          error={errors?.cvv?.message}
          register={{
            ...register('cvv', {
              onChange: (e) => setValue('cvv', e.target.value.replace(/([^\d])+/gim, ''))
            })
          }}
        />
      </Container>
      <Button id="formSubmitCard" type="submit" />
    </form>
  )
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
export const Button = styled.button`
  display: none;
`
