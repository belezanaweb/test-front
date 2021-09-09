const getErrorMessage = (errorType: string): string => {
  let message = ''

  switch (errorType) {
    case 'required':
      message = 'Campo obrigatório'
      break
    default:
      message = 'Tipo de erro não identificado'
      break
  }

  return message
}

export default getErrorMessage
