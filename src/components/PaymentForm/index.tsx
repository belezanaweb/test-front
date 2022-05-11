import React, { useState } from 'react'
import { FieldErrors, PaymentValidate } from '../../util/validations'
import Button from '../Button'
import InfoWrapper from '../InfoWrapper'
import Subtotal, { SubtotalProps } from '../Subtotal'
import TextField from '../TextField'
import * as S from './styles'

const PaymentForm = ({
  shippingTotal,
  subTotal,
  total,
  discount
}: SubtotalProps) => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    creditCard: '',
    nameInCard: '',
    expirationDate: '',
    cvv: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    console.log('olha os values: ', values)
    const errors = PaymentValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
  }

  return (
    <S.CartWrapper onSubmit={handleSubmit}>
      <InfoWrapper title="CARTÃO DE CRÉDITO">
        <TextField
          label={'Número do cartão:'}
          name={'creditCard'}
          type={'creditCard'}
          error={fieldError?.creditCard}
          onInputChange={(v) => handleInput('creditCard', v)}
          placeholder={'____.____.____.____'}
          mask={'9999.9999.9999.9999'}
        />

        <TextField
          label={'Nome do Titular:'}
          name={'nameInCard'}
          type={'nameInCard'}
          error={fieldError?.nameInCard}
          onInputChange={(v) => handleInput('nameInCard', v)}
          placeholder={'Como no cartão'}
          noMask={true}
        />

        <S.InputGroup>
          <TextField
            name={'expirationDate'}
            type={'expirationDate'}
            error={fieldError?.expirationDate}
            onInputChange={(v) => handleInput('expirationDate', v)}
            label={'Validade (mês/ano):'}
            placeholder={'__/____'}
            mask={'99/9999'}
          />

          <TextField
            name={'cvv'}
            type={'cvv'}
            error={fieldError?.cvv}
            onInputChange={(v) => handleInput('cvv', v)}
            label={'CVV:'}
            placeholder={'___'}
            mask={'999'}
          />
        </S.InputGroup>
      </InfoWrapper>
      <S.PaymentInfo>
        <Subtotal
          shippingTotal={shippingTotal}
          subTotal={subTotal}
          total={total}
          discount={discount}
        />
        <Button type={'submit'}>FINALIZAR O PEDIDO</Button>
      </S.PaymentInfo>
    </S.CartWrapper>
  )
}

export default PaymentForm
