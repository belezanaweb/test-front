import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { IPaymentPage } from './types'

import Button from '../../ui/components/Button'
import { Input } from '../../ui/components/Input/styled'
import Title from '../../ui/components/Title'

import CartValuesContainer from '../../redux/containers/CartValuesContainer'

import * as SP from './styled'
import * as S from './components/Form/styled'

const Payment = ({ onSubmit }: IPaymentPage) => {
  const { control, errors, register, handleSubmit } = useForm()

  const submitForm = (data: any) => {
    onSubmit(data)
  }

  // Registers controlled fields after component did mount
  React.useEffect(() => {
    register({ name: 'number', type: 'text' }, { required: true, pattern: /[0-9 ]{19}/ })
    register({ name: 'expirationDate', type: 'text' }, { required: true, pattern: /[0-9/]{5}/ })
  }, [register])

  return (
    <>
      <Title>Cartão de crédito</Title>
      <S.Form>
        <S.FormContent>
          <S.InputWrapper className="input-number">
            <S.Label>Número do cartão:</S.Label>
            <Controller
              as={(props) => <InputMask {...props} className="input" />}
              control={control}
              mask="9999 9999 9999 9999"
              name="number"
              hasErrors={!!errors.number}
            />
            {errors.number?.type === 'required' && (
              <S.InputMessage>O número do cartão é obrigatório</S.InputMessage>
            )}
            {errors.number?.type === 'pattern' && (
              <S.InputMessage>O número do cartão precisa ter 16 dígitos</S.InputMessage>
            )}
          </S.InputWrapper>
          <S.InputWrapper className="input-holder">
            <S.Label>Nome do titular:</S.Label>
            <Input
              ref={register({ required: true })}
              type="text"
              name="holder"
              error={errors.holder}
              placeholder="Como no cartão"
            />
            {errors.holder && <S.InputMessage>O nome do titular é obrigatório</S.InputMessage>}
          </S.InputWrapper>
          <S.InputWrapper className="input-expirationDate">
            <S.Label>Validade (mês/ano):</S.Label>
            <Controller
              as={(props) => <InputMask {...props} className="input" />}
              control={control}
              mask="99/99"
              name="expirationDate"
              hasErrors={!!errors.number}
            />
            {errors.expirationDate?.type === 'required' && (
              <S.InputMessage>A validade é obritória</S.InputMessage>
            )}
            {errors.expirationDate?.type === 'pattern' && (
              <S.InputMessage>A validade precisa ter o mês e o ano (MM/AA)</S.InputMessage>
            )}
          </S.InputWrapper>
          <S.InputWrapper className="input-cvv">
            <S.Label>CVV:</S.Label>
            <Input
              ref={register({ required: true, minLength: 3, maxLength: 4 })}
              type="text"
              name="cvv"
              error={errors.cvv}
              maxLength={4}
            />
            {errors.cvv?.type === 'required' && (
              <S.InputMessage>O CVV é obrigatório</S.InputMessage>
            )}
            {errors.cvv?.type === 'minLength' && (
              <S.InputMessage>O CVV precisa ter pelo menos 3 dígitos</S.InputMessage>
            )}
            {errors.cvv?.type === 'maxLength' && (
              <S.InputMessage>O CVV precisa ter no máximo 4 dígitos</S.InputMessage>
            )}
          </S.InputWrapper>
        </S.FormContent>

        <SP.TotalWrapper>
          <CartValuesContainer />
          <Button
            type="button"
            onClick={handleSubmit(submitForm)}
            disabled={!!Object.keys(errors).length}
          >
            Finalizar o pedido
          </Button>
        </SP.TotalWrapper>
      </S.Form>
    </>
  )
}

export default Payment
