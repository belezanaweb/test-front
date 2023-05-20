import * as yup from 'yup'
import { cardNumberFormatter } from '../utils/formaters'

export const paymentFormSchema = yup.object().shape({
  credit_card_number: yup.string().required('insira um número de cartão válido')
  // .test(
  //     "is-valid",
  //     "insira um número de cartão válido",
  //     function (value) {
  //       return cardNumberFormatter(value);
  //     }
  //   )
  ,
  name: yup.string().required('insira um nome válido'),
  valid_date: yup.string().required('insira uma data válida'),
  cvv: yup.string().required('Campo obrigatório').min(3, 'insira um cvv válido')
})
