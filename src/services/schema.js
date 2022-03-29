import * as Yup from 'yup'
import valid from 'card-validator'

export default Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  cvv: Yup.string().max(3).required('Campo obrigatório'),
  expiry: Yup.string()
    .required('Campo obrigatório')
    .test('Expiry date', (value) => {
      if (!value) return false

      const match = /\d{2}\/\d{4}/.test(value ?? '')

      if (!match) return false

      const [month, year] = value.split('/')

      if (month < '01' || month > '12') return false

      if (year < new Date().getFullYear().toString()) return false

      return true
    }),
  number: Yup.string().test(
    'test-number',
    'Número do cartão invalido',
    (value) => valid.number(value).isValid
  )
})
