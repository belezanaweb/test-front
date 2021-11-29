/* eslint-disable */
import React, { useContext, useMemo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { HeaderNav } from '../../components/HeaderNav'
import { Heading } from '../../components/Heading'
import { TotalPriceModule } from '../../components/TotalPriceModule'
import { CheckoutContext, UserData } from '../../contexts/CheckoutContext'

import * as S from './styles'
import { validatorCard, validatorCVV, validatorDateCard } from '../../utils/validationForm'

const schema = yup.object().shape({
  creditCard: yup
    .string()
    .min(16, 'Credit card is invalid')
    .test({
      test: value => validatorCard(value, 16)
    }),
  name: yup.string().min(3, 'Please, enter your name'),
  date: yup
    .string()
    .min(6, 'Date is invalid')
    .test({
      test: value => validatorDateCard(value)
    }),
  cvv: yup
    .string()
    .min(3, 'CVV is invalid')
    .test({
      test: value => validatorCVV(value, 3)
    })
})

export const Payment: React.FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const { product, handleUser } = useContext(CheckoutContext)

  const totalPrice = useMemo(() => {
    if (product) {
      return product?.shippingTotal + product?.subTotal - product?.discount
    }
  }, [product])

  const handleSubmitData = useCallback((data: UserData) => {
    handleUser?.(data)
    navigate('/confirmation')
    // console.log(data)
  }, [])

  return (
    <S.Wrapper>
      <HeaderNav page="payment" />
      <S.Form onSubmit={handleSubmit(handleSubmitData)}>
        <S.Content>
          <Heading title="cartão de crédito" />
          <S.BoxForm>
            <S.Field isValid={isValid}>
              <label htmlFor="input-credit-card">Número do cartão:</label>

              <S.InputCreditCard
                id="input-credit-card"
                mask="9999.9999.9999.9999"
                placeholder="____.____.____.____"
                {...register('creditCard')}
              />
              {errors && <span>{errors.creditCard?.message}</span>}
            </S.Field>

            <S.Field isValid={isValid}>
              <label htmlFor="name-field">Nome do Titular:</label>
              <S.Input id="name-field" placeholder="Como no cartão" {...register('name')} />
              {errors && <span>{errors.name?.message}</span>}
            </S.Field>

            <S.CardData>
              <S.Field isValid={isValid}>
                <label htmlFor="date">Validade (mês/ano):</label>
                <S.InputCreditCard
                  id="date"
                  mask="99/9999"
                  placeholder="__/____"
                  {...register('date')}
                />
                {errors && <span>{errors.date?.message}</span>}
              </S.Field>
              <S.Field isValid={isValid}>
                <label htmlFor="cvv">CVV:</label>
                <S.InputCreditCard id="cvv" mask="999" placeholder="___" {...register('cvv')} />
                {errors && <span>{errors.cvv?.message}</span>}
              </S.Field>
            </S.CardData>
          </S.BoxForm>
          <S.Price>
            {product && totalPrice && (
              <TotalPriceModule
                discount={product?.discount}
                freightage={product?.shippingTotal}
                products={product?.subTotal}
                total={totalPrice}
              />
            )}
          </S.Price>
          <S.Button>
            <Button type="submit" text="finalizar pedido" />
          </S.Button>
        </S.Content>
      </S.Form>
    </S.Wrapper>
  )
}
