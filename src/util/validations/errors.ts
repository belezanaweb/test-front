import Joi from 'joi'

const creditCardValidation = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
const expirationDateValidation = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/

export const creditCard_schema = Joi.string()
  .min(16)
  .required()
  .pattern(creditCardValidation)
  .messages({
    'string.empty': `O cartão de crédito não pode ser vazio`,
    'string.min': `O cartão de crédito precisa ter no mínimo 16 dígitos`,
    'string.pattern.base': 'Esse não é um cartão de crédito válido',
    'any.required': `O campo de cartão de crédito é obrigatório`
  })

export const nameInCard_schema = Joi.string()
  .min(3)
  .pattern(/^[a-z A-Z]*$/)
  .required()
  .messages({
    'string.empty': `O nome não pode ser vazio`,
    'string.min': `Esse não é um nome válido`,
    'string.pattern.base': 'Somente letras são permitidas para o nome',
    'any.required': `O campo do nome é obrigatório`
  })

export const expirationDate_schema = Joi.string()
  .min(4)
  .required()
  .pattern(expirationDateValidation)
  .messages({
    'string.empty': `A data de validade não pode ser vazia`,
    'string.min': `A data de validade precisa ter no mínimo 4 dígitos`,
    'string.pattern.base': 'Data de validade inválida',
    'any.required': `O campo da data de validade é obrigatório`
  })

export const cvv_schema = Joi.string().min(3).required().messages({
  'string.empty': `O CVV não pode ser vazio`,
  'string.min': `O CVV precisa ter no mínimo 3 dígitos`,
  'any.required': `O campo do CVV é obrigatório`
})
