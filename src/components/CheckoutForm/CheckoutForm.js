import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import * as yup from 'yup'

import Card from '../Card'
import FormControl from '../FormControl'

import * as S from './styles'

export const checkoutScheme = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  creditCardNumber: yup.string().max(20).required('Campo obrigatório'),
  expirationDate: yup
    .string()
    .required('Campo obrigatório')
    .matches(/([0-9]{2})\/([0-9]{4})/, 'Formato inválido. Exemplo: MM/AAAA'),
  verificationCode: yup
    .string()
    .required('Campo obrigatório')
    .matches(/([0-9]{3})/, 'Formato inválido. Exemplo: 123')
})

const CheckoutForm = ({ register, errors }) => (
  <Card title="CARTÃO DE CRÉDITO">
    <S.Form>
      <FormControl
        {...register('creditCardNumber')}
        label="Número de cartão:"
        placeholder="____.____.____.____"
        id="creditCardNumber"
        name="creditCardNumber"
        errorMessage={errors.creditCardNumber?.message}
        as={InputMask}
        mask="9999.9999.9999.9999"
      />
      <FormControl
        {...register('name')}
        label="Nome do Titular:"
        placeholder="Como no cartão"
        id="name"
        name="name"
        errorMessage={errors.name?.message}
      />
      <FormControl
        {...register('expirationDate')}
        label="Validade (mês/ano):"
        placeholder="__/____"
        id="expirationDate"
        name="expirationDate"
        errorMessage={errors.expirationDate?.message}
        as={InputMask}
        mask="99/9999"
      />
      <FormControl
        {...register('verificationCode')}
        label="CVV:"
        placeholder="___"
        id="verificationCode"
        name="verificationCode"
        errorMessage={errors.verificationCode?.message}
        as={InputMask}
        mask="999"
      />
    </S.Form>
  </Card>
)

CheckoutForm.propTypes = {
  errors: PropTypes.object,
  register: PropTypes.func.isRequired
}

CheckoutForm.propTypes = {
  errors: {}
}

CheckoutForm.defaultProps = {
  href: undefined
}

export default CheckoutForm
