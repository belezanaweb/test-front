import * as Yup from 'yup'
import moment from 'moment'

export interface IPayment {
  cardNumber: string
  name: string
  validity: string
  cvv: string
}

export const initialValues: IPayment = {
  cardNumber: '',
  name: '',
  validity: '',
  cvv: ''
}

export const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Campo obrigatório')
    .test('test1', 'Numero do cartão deve conter 16 digitos', (value) => {
      const onlyNumber = value?.replace(/[^\d]+/g, '')
      return onlyNumber ? onlyNumber.length === 16 : false
    }),
  name: Yup.string().required('Campo obrigatório'),
  cvv: Yup.string()
    .length(3, 'This field has to be exactly 3 characters!')
    .required('Campo obrigatório'),
  validity: Yup.string()
    .test('test1', 'Formato deve ser  mm/aa', (value) => {
      return moment(value, 'MM/yy', true).isValid()
    })
    .test('test2', 'A validade deve ser maior do que o mês atual.', (value) => {
      return moment().isBefore(moment(value, 'MM/YY'))
    })
})
