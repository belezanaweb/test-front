import React, { createContext, useEffect, useState } from 'react'

export const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [formValidFields, setFormValidFields] = useState({
    creditCard: false,
    holderName: false,
    cvv: false,
    expiryDate: false
  })
  const [formFieldsValues, setFormFieldsValues] = useState({
    creditCard: '',
    holderName: '',
    cvv: '',
    expiryDate: ''
  })

  useEffect(() => {
    if (Object.values(formValidFields).every((item) => item === true)) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [formValidFields])

  return (
    <FormContext.Provider
      value={{
        isFormValid,
        setIsFormValid,
        formValidFields,
        setFormValidFields,
        formFieldsValues,
        setFormFieldsValues
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
