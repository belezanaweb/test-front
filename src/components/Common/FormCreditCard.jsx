import React from 'react'
import { Input } from './Input'
import styled from 'styled-components'
import { useRegisterCardContext } from '../../context/useRegisterCardContext'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

/**
 *  Function to render default card
 */

export default function FormCreditCard() {
  const { setCard } = useRegisterCardContext()
  const cardStorage = JSON.parse(localStorage.getItem('gb:card'))

  // function to verify if number card is valid
  function checkNumberCard(value) {
    // remove all non digit characters
    var valueT = value.replace(/\D/g, '')
    var sum = 0
    var shouldDouble = false
    for (var i = valueT.length - 1; i >= 0; i--) {
      var digit = parseInt(valueT.charAt(i))

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9
      }

      sum += digit
      shouldDouble = !shouldDouble
    }
    return sum % 10 === 0
  }

  //Schema to validation of card
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome requirido'),
    number: Yup.string()
      .required('Número do cartão requirido')
      .min(19, 'Número do cartão inválido')
      .test('checkNumberCard', 'Número do cartão inválido', (value) => checkNumberCard(value)),
    cvv: Yup.string().required('CVV requirido').min(3, 'CVV deve conter 3 dígitos'),
    expiry: Yup.string().required('Validade requirido').min(6, 'Minimo 6 caracteres')
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
    setCard(values)

    var el = document.getElementById('buttonForm')
    el.click()
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
            onChange: (e) => setValue('name', e.target.value.replace(/([0-9][a-zA-Z]*)+/gim, ''))
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
          maxlength="3"
          defaultValue={cardStorage?.cvv || ''}
          error={errors?.cvv?.message}
          register={{
            ...register('cvv', {
              onChange: (e) => setValue('cvv', e.target.value.replace(/([^\d])+/gim, ''))
            })
          }}
        />
      </Container>
      <Button type="submit" />
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
