export const helperSimpleResponse = 'required'

export const helperValueResponse = 'min:3'

export const correctData = {
  'account.phone.areaCode': ['required', 'only_numbers']
}

export const formErrors = {
  errors: {
    'account.name': ['O campo nome é obrigatório.'],
    'account.phone.areaCode': ['O código de área só aceita números.'],
    email: [
      'O campo e-mail deve conter no mínimo 3 caracteres.',
      'O campo e-mail não contém um endereço de email válido.'
    ]
  }
}
