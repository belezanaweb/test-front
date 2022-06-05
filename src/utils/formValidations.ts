type Props = {
  creditCard: string
  cvv: string
  name: string
  date: string
}

function formValidation(values: Props) {
  const errors = {
    creditCard: '',
    cvv: '',
    name: '',
    date: ''
  }

  if (values.creditCard.length < 16) {
    errors.creditCard = 'Insira um cartão de crédito válido'
  }

  if (values.cvv === '' || values.cvv.replace(/[^a-zA-Z0-9]/g, '').length < 3) {
    errors.cvv = 'Insira um código de segurança válido'
  }

  if (values.name.length < 1) {
    errors.name = 'Insira um nome'
  }

  let dateCreated = new Date()
  let month = ('0' + (dateCreated.getMonth() + 1)).slice(-2)
  let year = dateCreated.getFullYear()

  if (values.date.replace(/[^a-zA-Z0-9]/g, '').length < 6) {
    errors.date = 'Insira uma data'
  } else if (values.date < `${month + '/' + year}`) {
    errors.date = 'Insira uma data válida'
  }

  return errors
}

export default formValidation
