import * as yup from 'yup'

export const paymentFormSchema = yup.object().shape({
  creditCardNumber: yup
    .string()
    .required('insira um número de cartão válido')
    .min(19, 'insira um número de cartão válido'),
  name: yup.string().required('insira um nome válido'),
  expirationDate: yup
    .string()
    .required('insira uma data válida')
    .min(7, 'insira uma data válida')
    .test('is-greater', 'insira uma data válida.', function (value) {
      const month = value.slice(0, 2)
      const year = value.slice(-4)
      const currentYear = new Date().getFullYear()

      return Number(month) <= 12 && Number(year) >= currentYear - 1
    }),
  cvv: yup.string().required('insira um cvv válido').min(3, 'insira um cvv válido')
})
