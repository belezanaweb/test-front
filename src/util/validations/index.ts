import Joi from 'joi'
import { Payment } from '../../types/productTypes'

const creditCard_schema = Joi.string().min(16).required().messages({
  'string.empty': `O cartão não pode estar vazio`,
  'string.min': `O cartão precisa ter no mínimo 16 dígitos`,
  'any.required': `O campo de cartão de crédito é obrigatório`
})
const nameInCard_schema = Joi.string().min(3).required()
const expirationDate_schema = Joi.string().min(4).required()
const cvv_schema = Joi.string().min(3).required()

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
  console.log('olha o que ta vindo: ', objError)
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
