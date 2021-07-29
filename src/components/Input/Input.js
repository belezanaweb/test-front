import React from 'react'
import { Styles } from './styles'
import { Form, Field } from 'react-final-form/dist/react-final-form.cjs'
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../../utils/Cart/utils'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = async (values) => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Input = () => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values, active }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Número do cartão</label>

              <Field
                name="number"
                component="input"
                type="text"
                required
                pattern="[\d| ]{16,22}"
                placeholder=" ____.____.____.____"
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <label>Nome do Titular</label>
              <Field
                name="name"
                component="input"
                required
                type="text"
                placeholder=" Como no cartão"
              />
            </div>
            <div>
              <label>Validate (mês/ano)</label>
              <Field
                name="expiry"
                component="input"
                required
                type="text"
                pattern="\d\d/\d\d"
                placeholder="__/____"
                format={formatExpirationDate}
              />
              <label>CVV</label>
              <Field
                name="cvc"
                component="input"
                required
                type="text"
                pattern="\d{3,4}"
                placeholder="___"
                format={formatCVC}
              />
            </div>
          </form>
        )
      }}
    />
  </Styles>
)

export default Input
