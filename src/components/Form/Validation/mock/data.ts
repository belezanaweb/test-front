export const fields = [
  {
    id: 'account.name',
    label: 'Nome',
    validations: [
      {
        type: 'required'
      },
      {
        type: 'min',
        value: 3
      }
    ]
  },
  {
    id: 'email',
    label: 'E-mail',
    validations: [
      {
        type: 'required'
      },
      {
        type: 'min',
        value: 3
      },
      {
        type: 'email'
      }
    ]
  },
  {
    id: 'account.mother',
    label: 'Nome da mãe'
  },
  {
    id: 'account.cpf',
    label: 'CPF',
    validations: [
      {
        type: 'check_cpf'
      }
    ]
  },
  {
    id: 'account.phone.areaCode',
    label: 'Código de área',
    validations: [
      {
        type: 'required'
      },
      {
        type: 'only_numbers'
      }
    ]
  },
  {
    id: 'account.phone.number',
    label: 'Número do telefone',
    validations: [
      {
        type: 'required'
      },
      {
        type: 'only_numbers'
      }
    ]
  }
]

export const fieldWithoutId = {
  label: 'Endereço',
  validations: [
    {
      type: 'required'
    }
  ]
}

export const fieldWithoutLabel = {
  id: 'address',
  validations: [
    {
      type: 'required'
    }
  ]
}

export const values = {
  account: {
    name: '',
    phone: {
      areaCode: 'h',
      number: '969093321'
    },
    mother: 'Jumira',
    cpf: 'A34'
  },
  email: 'f'
}

export const validationReq = {
  type: 'required'
}

export const validationMin = {
  type: 'min',
  value: 3
}
