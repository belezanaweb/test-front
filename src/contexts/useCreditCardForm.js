import React, { useContext, createContext, useMemo, useState, useEffect } from 'react'

const CreateCreditCardContext = createContext()

export function CreateCreditCardProvider({ children }) {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [name, setName] = useState('')
  const [dateValidate, setDateValidate] = useState('')
  const [cvv, setCvv] = useState('')

  const [creditCardNumberHelperText, setCreditCardNumberHelperText] = useState('')
  const [nameHelperText, setNameHelperText] = useState('')
  const [dateValidateHelperText, setDateValidateHelperText] = useState('')
  const [cvvHelperText, setCvvHelperText] = useState('')

  useEffect(() => {
    if (!creditCardNumber) {
      setCreditCardNumberHelperText('(*) Campo obrigatório')
    } else if (creditCardNumber.length < 19) {
      setCreditCardNumberHelperText('Preencha todo o campo')
    } else {
      setCreditCardNumberHelperText('')
    }
  }, [creditCardNumber])

  useEffect(() => {
    if (!name) {
      setNameHelperText('(*) Campo obrigatório')
    } else if (name.length < 3) {
      setNameHelperText('Preencha um nome com mais de 3 letras')
    } else {
      setNameHelperText('')
    }
  }, [name])

  useEffect(() => {
    if (!dateValidate) {
      setDateValidateHelperText('(*) Campo obrigatório')
    } else if (dateValidate.length < 7) {
      setDateValidateHelperText('Preencha todo o campo')
    } else {
      setDateValidateHelperText('')
    }
  }, [dateValidate])

  useEffect(() => {
    if (!cvv) {
      setCvvHelperText('(*) Campo obrigatório')
    } else if (cvv.length < 3) {
      setCvvHelperText('Preencha todo o campo')
    } else {
      setCvvHelperText('')
    }
  }, [cvv])

  const value = useMemo(
    () => ({
      creditCardNumber,
      name,
      dateValidate,
      cvv,
      setCreditCardNumber,
      setName,
      setDateValidate,
      setCvv,
      creditCardNumberHelperText,
      nameHelperText,
      dateValidateHelperText,
      cvvHelperText
    }),
    [
      creditCardNumber,
      name,
      dateValidate,
      cvv,
      setCreditCardNumber,
      setName,
      setDateValidate,
      setCvv,
      creditCardNumberHelperText,
      nameHelperText,
      dateValidateHelperText,
      cvvHelperText
    ]
  )

  return (
    <CreateCreditCardContext.Provider value={value}>{children}</CreateCreditCardContext.Provider>
  )
}

export const useCreditCardForm = () => {
  const context = useContext(CreateCreditCardContext)

  return context
}
