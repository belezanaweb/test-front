import * as Yup from 'yup'
import valid from 'card-validator'

export default Yup.object().shape({
  name: Yup.string().min(10).required(),
  expiry: Yup.string().min(10).required(),
  cvv: Yup.string().min(10).required(),
  number: Yup.string().test(
    'test-number',
    'Credit Card number is invalid',
    (value) => valid.number(value).isValid
  )
})
