import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/Context'
import Input from '../Input/Input'
import * as S from './PaymentData.styles'

const PaymentData = () => {
  const contextResult = useContext(DataContext)
  const setData = contextResult[1]
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data, e) => {
    setData((prev) => ({
      ...prev,
      creditCard: {
        number: data.number,
        name: data.name,
        cvv: data.cvv,
        date: data.date
      }
    }))
    navigate('/confirmacao')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="creditForm">
      <Input
        label="Número do cartão:"
        id="number"
        placeholder="____.____.____.____"
        mask="9999.9999.9999.9999"
        error={errors?.number}
        {...register('number', {
          required: 'This input is required',
          pattern: { value: /\d\d\d\d.\d\d\d\d.\d\d\d\d.\d\d\d\d/g, message: 'Invalid number' }
        })}
      />
      <Input
        id="name"
        error={errors?.name}
        label="Nome do Titular:"
        placeholder="Como no cartão"
        {...register('name', {
          required: 'This input is required',
          pattern: { value: /^[a-zA-Z\s]*$/, message: 'Invalid character' }
        })}
      />
      <S.ContainerBottom>
        <S.DateContainer>
          <Input
            id="date"
            error={errors?.date}
            label="Validade (mês/ano):"
            mask="99/9999"
            placeholder="__/____"
            {...register('date', {
              required: 'This input is required',
              pattern: { value: /\d\d\/\d\d\d\d/g, message: 'Invalid date' }
            })}
          />
        </S.DateContainer>
        <S.CvvContainer>
          <Input
            id="cvv"
            error={errors?.cvv}
            label="CVV:"
            mask="9999"
            placeholder="___"
            {...register('cvv', {
              required: 'This input is required',
              pattern: { value: /\d\d\d\d/g, message: 'Invalid cvv' }
            })}
          />
        </S.CvvContainer>
      </S.ContainerBottom>
    </form>
  )
}

export default PaymentData
