/**
 * Dependencies
 */
import * as Yup from 'yup'

export function formFields() {
  return [
    {
      name: 'cardNumber',
      label: 'Número do cartão:',
      value: '',
      type: 'text',
      placeholder: '__.',
      fullWidth: true,
      size: 12,
      schema: Yup.string()
        .min(19)
        .max(19)
        .required('Campo orbigatório')
    },
    {
      name: 'name',
      label: 'Nome do titular',
      value: '',
      type: 'text',
      placeholder: 'Como no cartao',
      fullWidth: true,
      size: 12,
      schema: Yup.string().required('Campo orbigatório')
    },
    {
      name: 'validate',
      label: 'Validade (mês/ano)',
      value: '',
      type: 'text',
      placeholder: '__/____',
      fullWidth: false,
      size: 7,
      schema: Yup.string()
        .min(7)
        .max(7)
        .required('Campo orbigatório')
    },
    {
      name: 'cvv',
      label: 'CVV',
      value: '',
      type: 'number',
      placeholder: '___',
      fullWidth: false,
      size: 4,
      schema: Yup.string()
        .min(3)
        .max(3)
        .required('Campo orbigatório')
    }
  ]
}
