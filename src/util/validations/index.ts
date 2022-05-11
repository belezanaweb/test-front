import Joi from 'joi'
import { Payment } from '../../types/productTypes'

const fieldsValidations = {
  creditCard: Joi.string().min(16).required(),
  nameInCard: Joi.string().min(3).required(),
  expirationDate: Joi.string().min(6).required(),
  cvv: Joi.string().max(3).required()
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
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

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
