import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import { FormStyle } from './styles'

const Form = ({ setFieldValue, values, handleSubmit, errors }) => {
  return (
    <FormStyle withErrors={errors}>
      <form onSubmit={handleSubmit} id="card-form">
        <div>
          <label htmlFor="card-number" id="label-card-number">
            Número do cartão:
          </label>
          <input
            type="number"
            name="card-number"
            id="card-number"
            placeholder="____.____.____.____"
            value={values.cardNumber}
            onChange={e => setFieldValue('cardNumber', e.target.value)}
          />
          {errors.cardNumber && <p className="inputError">{errors.cardNumber}</p>}
          <label htmlFor="cardholder-name">Nome do Titular:</label>
          <input
            type="text"
            name="cardholder-name"
            id="cardholder-name"
            placeholder="Como no cartão"
            value={values.cardholderName}
            onChange={e => setFieldValue('cardholderName', e.target.value)}
          />
          {errors.cardholderName && <p className="inputError">{errors.cardholderName}</p>}
        </div>

        <div>
          <div>
            <label htmlFor="card-expiring-date">Validade (mês/ano):</label>
            <input
              type="text"
              name="card-expiring-date"
              id="card-expiring-date"
              placeholder="__/__"
              value={values.cardExpiringDate}
              onChange={e => setFieldValue('cardExpiringDate', e.target.value)}
            />
            {errors.cardExpiringDate && <p className="inputError">{errors.cardExpiringDate}</p>}
          </div>

          <div>
            <label htmlFor="card-verification-value">CVV:</label>
            <input
              type="number"
              name="card-verification-value"
              id="card-verification-value"
              placeholder="___"
              value={values.cardVerificationValue}
              onChange={e => setFieldValue('cardVerificationValue', e.target.value)}
            />
            {errors.cardVerificationValue && (
              <p className="inputError">{errors.cardVerificationValue}</p>
            )}
          </div>
        </div>
      </form>
    </FormStyle>
  )
}

Form.propTypes = {
  values: PropTypes.shape({}).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default withFormik({
  mapPropsToValues: () => ({
    cardNumber: '',
    cardholderName: '',
    cardExpiringDate: '',
    cardVerificationValue: ''
  }),
  handleSubmit: (values, props) => {
    const { props: componentProps } = props
    const { history } = componentProps
    const { cardNumber, cardholderName, cardExpiringDate } = values
    history.push(
      `/confirmation?cardNumber=${cardNumber.substr(
        -4
      )}&cardholderName=${cardholderName}&cardExpiringDate=${cardExpiringDate}`
    )
  },
  validationSchema: Yup.object().shape({
    cardNumber: Yup.string()
      .matches(/\d/, 'Insira apenas valores númericos')
      .typeError('Insira apenas valores númericos')
      .min(16, 'Insira um número de cartão válido')
      .max(19, 'Insira um número de cartão válido')
      .required('Preencha o campo número do cartão'),
    cardholderName: Yup.string().required('Preencha o campo nome do titular'),
    cardExpiringDate: Yup.date('MM/YY')
      .typeError('Insira uma data válida')
      .required('Preencha o campo validade (mês/ano)'),
    cardVerificationValue: Yup.string()
      .matches(/\d/, 'Insira apenas valores númericos')
      .min(3, 'Insira um CVV válido')
      .max(3, 'Insira um CVV válido')
      .required('Preencha o campo CVV')
  })
})(Form)
