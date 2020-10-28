import { format } from 'date-fns'

import { IFields } from './interface'

export const fields: IFields[] = [
  {
    id: 'number',
    label: 'Número do cartão',
    placeholder: '___.____.____.____',
    type: 'text',
    mask: [
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ],
    validations: [
      {
        type: 'required'
      },
      {
        type: 'min',
        value: 16
      },
      {
        type: 'only_numbers'
      }
    ]
  },
  {
    id: 'holder',
    label: 'Nome do titular',
    placeholder: 'Como no cartão',
    type: 'text',
    validations: [
      {
        type: 'required'
      }
    ]
  },
  {
    id: 'expirationDate',
    label: 'Validade (mês/ano)',
    placeholder: '__/____',
    type: 'text',
    mask: [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    validations: [
      {
        type: 'required'
      },
      {
        type: 'after_or_equal',
        value: format(new Date(), 'MM/yyyy')
      }
    ]
  },
  {
    id: 'cvv',
    label: 'CVV',
    placeholder: '__',
    type: 'text',
    mask: [/\d/, /\d/, /\d/],
    validations: [
      {
        type: 'required'
      },
      {
        type: 'size',
        value: 3
      },
      {
        type: 'only_numbers'
      }
    ]
  }
]
