import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Context'
import Input from '../component/Input'
import * as S from './PaymentData.styles'

const toInputUppercase = (e) => {
  e.target.value = ('' + e.target.value).toUpperCase()
}

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
    navigate('/confirmation')
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
          required: 'Campo obrigatório',
          pattern: { value: /\d\d\d\d.\d\d\d\d.\d\d\d\d.\d\d\d\d/g, message: 'Número inválido' }
        })}
      />
      <Input
        id="name"
        error={errors?.name}
        label="Nome do Titular:"
        onInput={toInputUppercase}
        placeholder="Como no cartão"
        {...register('name', {
          required: 'Campo obrigatório',
          pattern: { value: /^[a-zA-Z ]*$/g, message: 'Apenas letras são permitidas' }
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
              required: 'Campo obrigatório',
              pattern: { value: /\d\d\/\d\d\d\d/g, message: 'Data inválida' }
            })}
          />
        </S.DateContainer>
        <S.CvvContainer>
          <Input
            id="cvv"
            error={errors?.cvv}
            label="CVV:"
            mask="999"
            placeholder="___"
            {...register('cvv', {
              required: 'Campo obrigatório',
              pattern: { value: /\d\d\d/g, message: 'Cvv inválido' }
            })}
          />
        </S.CvvContainer>
      </S.ContainerBottom>
    </form>
  )
}

export default PaymentData
