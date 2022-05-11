import Joi from 'joi'
import { Payment } from '../../types/productTypes'
import {
  creditCard_schema,
  cvv_schema,
  expirationDate_schema,
  nameInCard_schema
} from './errors'

const fieldsValidations = {
  creditCard: creditCard_schema,
  nameInCard: nameInCard_schema,
  expirationDate: expirationDate_schema,
  cvv: cvv_schema
}

export type FieldErrors = {
  [key: string]: string
}

function getPaymentErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function PaymentValidate(values: Payment) {
  const { creditCard, cvv, expirationDate, nameInCard } = fieldsValidations
  const schema = Joi.object({ creditCard, cvv, expirationDate, nameInCard })

  return getPaymentErrors(schema.validate(values, { abortEarly: false }))
}

function getFieldErrors(objError: Joi.ValidationResult, field: keyof Payment) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[field] = err.message
    })
  }

  return errors
}

export function FieldValidate(value: string, field: keyof Payment) {
  return getFieldErrors(
    fieldsValidations[field].validate(value, { abortEarly: false }),
    field
  )
}
