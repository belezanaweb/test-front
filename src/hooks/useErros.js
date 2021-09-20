import { useState } from 'react'

export const useErros = (validations) => {
  const initialState = createInitialState(validations)

  const [erros, setErros] = useState(initialState)

  const validateInput = (event) => {
    const { name, value } = event.target
    const newState = { ...erros }
    newState[name] = validations[name](value)
    setErros(newState)
  }

  const formIsValid = () => {
    for (let field in erros) {
      if (!erros[field].valid) {
        return false
      }
    }
    return true
  }

  return [erros, validateInput, formIsValid]
}

const createInitialState = (validations) => {
  const initialState = {}
  for (let field in validations) {
    initialState[field] = { valid: true, text: '' }
  }
  return initialState
}
