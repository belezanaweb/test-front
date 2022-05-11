import React, { useState } from 'react'
import { Payment } from '../../types/productTypes'
import {
  FieldErrors,
  FieldValidate,
  PaymentValidate
} from '../../util/validations'
import Button from '../Button'
import InfoWrapper from '../InfoWrapper'
import Subtotal, { SubtotalProps } from '../Subtotal'
import TextField from '../TextField'
import Cards from 'react-credit-cards'
import * as S from './styles'
import 'react-credit-cards/es/styles-compiled.css'
import { Redirect } from 'react-router-dom'

type PaymentFormProps = {
  onSubmit: (value: Payment) => void
} & SubtotalProps

type focusCreditCard = 'name' | 'number' | 'expiry' | 'cvc' | undefined

const PaymentForm = ({
  shippingTotal,
  subTotal,
  total,
  discount,
  onSubmit
}: PaymentFormProps) => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [focused, setFocused] = useState<focusCreditCard>(undefined)
  const [success, setSuccess] = useState(false)
  const [values, setValues] = useState<Payment>({
    creditCard: '',
    nameInCard: '',
    expirationDate: '',
    cvv: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleOnBlur = (value: string, field: keyof Payment) => {
    let objError = fieldError
    const errors = FieldValidate(value, field)
    if (Object.keys(errors).length) {
      setFieldError(errors)
    } else {
      delete objError[field]
      setFieldError(objError)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // console.log('olha aqui os valores: ', values)

    const errors = PaymentValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }
    onSubmit(values)
    setSuccess(true)
    setFieldError({})
  }

  return (
    <S.CartWrapper onSubmit={handleSubmit}>
      <S.BoxPaymentWrapper>
        <InfoWrapper title="CARTÃO DE CRÉDITO">
          <S.FormWrapper>
            <S.CardWrapper>
              <Cards
                cvc={values.cvv}
                expiry={values.expirationDate}
                focused={focused}
                name={values.nameInCard}
                number={values.creditCard}
              />
            </S.CardWrapper>
            <S.FormDetailsWrapper>
              <S.InputGroup isSideToSide={false}>
                <TextField
                  label={'Número do cartão:'}
                  name={'creditCard'}
                  type={'creditCard'}
                  error={fieldError?.creditCard}
                  onInputChange={(v) =>
                    handleInput(
                      'creditCard',
                      v
                        .split('')
                        .filter((char) => /^[0-9]*$/.test(char))
                        .join('')
                    )
                  }
                  handleOnFocus={() => setFocused('number')}
                  handleOnBlur={() => {
                    setFocused(undefined)
                    handleOnBlur(values.creditCard, 'creditCard')
                  }}
                  placeholder={'____.____.____.____'}
                  mask={'9999.9999.9999.9999'}
                />

                <TextField
                  label={'Nome do Titular:'}
                  name={'nameInCard'}
                  type={'nameInCard'}
                  error={fieldError?.nameInCard}
                  onInputChange={(v) => handleInput('nameInCard', v)}
                  handleOnFocus={() => setFocused('name')}
                  handleOnBlur={() => {
                    setFocused(undefined)
                  }}
                  placeholder={'Como no cartão'}
                  noMask={true}
                />
              </S.InputGroup>
              <S.InputGroup isSideToSide={true}>
                <TextField
                  name={'expirationDate'}
                  type={'expirationDate'}
                  error={fieldError?.expirationDate}
                  onInputChange={(v) =>
                    handleInput(
                      'expirationDate',
                      v
                        .split('')
                        .filter((char) => /^[0-9]*$/.test(char))
                        .join('')
                    )
                  }
                  label={'Validade (mês/ano):'}
                  handleOnFocus={() => setFocused('expiry')}
                  handleOnBlur={() => {
                    setFocused(undefined)
                  }}
                  placeholder={'__/__'}
                  mask={'99/99'}
                />

                <TextField
                  name={'cvv'}
                  type={'cvv'}
                  error={fieldError?.cvv}
                  onInputChange={(v) =>
                    handleInput(
                      'cvv',
                      v
                        .split('')
                        .filter((char) => /^[0-9]*$/.test(char))
                        .join('')
                    )
                  }
                  handleOnFocus={() => setFocused('cvc')}
                  handleOnBlur={() => {
                    setFocused(undefined)
                  }}
                  label={'CVV:'}
                  placeholder={'___'}
                  mask={'999'}
                />
              </S.InputGroup>
            </S.FormDetailsWrapper>
          </S.FormWrapper>
        </InfoWrapper>
      </S.BoxPaymentWrapper>
      <S.PaymentInfo>
        <Subtotal
          shippingTotal={shippingTotal}
          subTotal={subTotal}
          total={total}
          discount={discount}
        />
        <Button
          disabled={
            !values.creditCard ||
            !values.nameInCard ||
            !values.expirationDate ||
            !values.cvv
          }
          type={'submit'}
        >
          FINALIZAR O PEDIDO
        </Button>
      </S.PaymentInfo>
      {success && <Redirect to="/success" />}
    </S.CartWrapper>
  )
}

export default PaymentForm
