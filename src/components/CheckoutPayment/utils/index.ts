import * as Yup from 'yup'

const errors = {
  name: 'Insira um nome válido',
  code: 'Insira um código válido',
  number: 'Insira um número válido',
  expiration: 'Insira uma data válida',
}

export const initialValues = {
  creditCardName: '',
  creditCardNumber: '',
  creditCardExpiration: '',
  creditCardCode: '',
}

const regexOnlyNumbers = /[^\d.-]+/g

export const CheckoutPaymentSchema = Yup.object().shape({
  creditCardName: Yup.string()
    .min(2, errors.name)
    .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi, errors.name)
    .required(errors.name),
  creditCardNumber: Yup.string()
    .min(2, errors.number)
    .test('len', errors.number, (val) => {
      const value = val.replace(regexOnlyNumbers, '')

      return value.length === 16
    })
    .required(errors.number),
  creditCardExpiration: Yup.string()
    .min(2, errors.name)
    .test('len', errors.expiration, (val) => {
      const value = val.replace(regexOnlyNumbers, '')

      return value.length === 4
    })
    .required(errors.expiration),
  creditCardCode: Yup.string()
    .matches(/^[0-9]+$/, errors.code)
    .test('len', errors.code, (val) => val.length === 3)
    .required(errors.code),
})
