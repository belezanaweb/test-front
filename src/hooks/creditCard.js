import React, { createContext, useContext, useState } from 'react'

const CreditCardContext = createContext({})

const CreditCardProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <CreditCardContext.Provider value={{ formData, handleChange }}>
      {children}
    </CreditCardContext.Provider>
  )
}

function useCreditCard() {
  const context = useContext(CreditCardContext)

  if (!context) {
    throw new Error('useCreditCard must be use within a CreditCardProvider')
  }

  return context
}

export { CreditCardProvider, useCreditCard }
