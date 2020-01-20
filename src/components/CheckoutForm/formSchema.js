import * as yup from 'yup'

const formSchema = {
  creditcard: yup
    .mixed()
    .required()
    .test({
      message: 'Dados do cartão inválido',
      test: value => value && value.replace(/\./gi, '').replace(/_/gi, '').length >= 15
    }),
  cardholder: yup.string().required('Nome do titular é obrigatório'),
  expdate: yup
    .mixed()
    .required()
    .test({
      message: 'Data Inválida',
      test: value => value && value.replace(/\//gi, '').replace(/_/gi, '').length === 6
    }),
  cvv: yup
    .mixed()
    .required()
    .test({
      message: 'CVV Inválido',
      test: value => value && value.replace(/_/gi, '').length === 3
    })
}

export default formSchema
