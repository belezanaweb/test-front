import React from 'react'
import { useForm } from 'react-hook-form'

import { IPaymentPage } from './types'

import Button from '../../ui/components/Button'
import { Input } from '../../ui/components/Input/styled'
import ProductList from '../../ui/components/ProductList'
import Title from '../../ui/components/Title'

import * as SP from './styled'
import * as S from './components/Form/styled'

const Payment = ({ productData, onSubmit }: IPaymentPage) => {
  const { errors, register, handleSubmit } = useForm()

  const submitForm = (data: any) => {
    onSubmit(data)
  }

  return (
    <>
      <Title>Cartão de crédito</Title>
      <S.Form>
        <S.FormContent>
          <S.InputWrapper className="input-number">
            <S.Label>Número do cartão:</S.Label>
            <Input
              ref={register({ required: true, minLength: 16, maxLength: 16 })}
              type="text"
              name="number"
              error={errors.number}
            />
            {errors.number?.type === 'required' && (
              <S.InputMessage>O número do cartão é obrigatório</S.InputMessage>
            )}
            {errors.number?.type === 'minLength' && (
              <S.InputMessage>O número do cartão precisa ter 16 dígitos</S.InputMessage>
            )}
            {errors.number?.type === 'maxLength' && (
              <S.InputMessage>O número do cartão precisa ter no máximo 16 dígitos</S.InputMessage>
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
            <Input
              ref={register({ required: true })}
              type="text"
              name="expirationDate"
              error={errors.expirationDate}
            />
            {errors.expirationDate && <S.InputMessage>A validade é obritória</S.InputMessage>}
          </S.InputWrapper>
          <S.InputWrapper className="input-cvv">
            <S.Label>CVV:</S.Label>
            <Input
              ref={register({ required: true, minLength: 3, maxLength: 4 })}
              type="text"
              name="cvv"
              error={errors.cvv}
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
          <ProductList
            subTotal={productData.subTotal}
            shippingTotal={productData.shippingTotal}
            discount={productData.discount}
            total={productData.total}
          />
          <Button type="button" onClick={handleSubmit(submitForm)}>
            Finalizar o pedido
          </Button>
        </SP.TotalWrapper>
      </S.Form>
    </>
  )
}

export default Payment
