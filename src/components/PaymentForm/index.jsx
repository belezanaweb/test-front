import React, { forwardRef } from 'react'
import * as Yup from 'yup'

import { useHistory } from 'react-router-dom'
import { useCheckout } from '../../hooks/checkout'

import FormControl from './FormControl'
import { StyledForm, FormControlGroup } from './styles'

function PaymentForm(props, ref) {
  const history = useHistory()
  const { submitPayment } = useCheckout()

  const handleSubmit = async (data) => {
    try {
      ref.current.setErrors({})

      const schema = Yup.object().shape({
        cardNumber: Yup.string().required('campo obrigatório'),
        cardName: Yup.string().required('campo obrigatório'),
        cardValid: Yup.string().required('campo obrigatório'),
        cardCode: Yup.string().required('campo obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      submitPayment(data)

      history.push('/confirmation')
    } catch (err) {
      const validationErrors = {}
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })

        ref.current.setErrors(validationErrors)
      }
    }
  }

  return (
    <StyledForm ref={ref} onSubmit={handleSubmit}>
      <FormControl
        name="cardNumber"
        label="Número do cartão"
        placeholder="____.____.____.____"
        mask="9999.9999.9999.9999"
      />
      <FormControl name="cardName" label="Nome do Titular" placeholder="Como no cartão" />

      <FormControlGroup>
        <FormControl
          name="cardValid"
          label="Validade (mês/ano)"
          placeholder="__/____"
          mask="99/9999"
        />
        <FormControl name="cardCode" label="CVV" placeholder="____" mask="9999" />
      </FormControlGroup>
    </StyledForm>
  )
}

export default forwardRef(PaymentForm)
