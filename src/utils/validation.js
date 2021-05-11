import * as Yup from 'yup'
import { endOfMonth, isAfter } from 'date-fns'

export const maskMoney = (value) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

export const valCreditCard = Yup.string()
  .trim()
  .test('length', 'Cartão de crédito inválido', (val) => val.replace(/-|_|\./g, '').length === 16)
  .required('Cartão de crédito obrigatório')

export const valValidateDate = Yup.string()
  .trim()
  .test('expiry-time-validate', 'Cartão expirado', (string) => {
    const [month, year] = string.split('/').map(Number)
    const expiryDate = endOfMonth(new Date(year, month - 1, 1))
    const endMonth = endOfMonth(new Date())
    return !isAfter(endMonth, expiryDate)
  })
  .test('expiry-month-validate', 'Mês inválido', (string) => {
    const [month] = string.split('/').map(Number)
    return month >= 1 && month <= 12
  })
  .test('length', 'Data de validade inválida', (string) => string.replace(/\/|_/g, '').length === 6)
  .required('Data de validade obrigatória')

export const valCvv = Yup.string()
  .trim()
  .test('length', 'CVV inválido', (val) => val.replace(/-|_/g, '').length === 3)
  .required('CVV obrigatório')

export const valCartHolder = Yup.string().trim().required('Nome do titular obrigatório')
