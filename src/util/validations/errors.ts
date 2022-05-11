import Joi from 'joi'

export const creditCard_schema = Joi.string().min(16).required().messages({
  'string.empty': `O cartão de crédito não pode ser vazio`,
  'string.min': `O cartão de crédito precisa ter no mínimo 16 dígitos`,
  'any.required': `O campo de cartão de crédito é obrigatório`
})

export const nameInCard_schema = Joi.string()
  .min(3)
  .pattern(/^[a-zA-Z]*$/)
  .required()
  .messages({
    'string.empty': `O nome não pode ser vazio`,
    'string.min': `Esse não é um nome válido`,
    'string.pattern.base': 'Somente letras são permitidas para o nome',
    'any.required': `O campo do nome é obrigatório`
  })

export const expirationDate_schema = Joi.string().min(4).required().messages({
  'string.empty': `A data de validade não pode ser vazia`,
  'string.min': `A data de validade precisa ter no mínimo 4 dígitos`,
  'any.required': `O campo da data de validade é obrigatório`
})

export const cvv_schema = Joi.string().min(3).required().messages({
  'string.empty': `O CVV não pode ser vazio`,
  'string.min': `O CVV precisa ter no mínimo 3 dígitos`,
  'any.required': `O campo do CVV é obrigatório`
})
