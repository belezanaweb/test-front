import React, { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface UseCreditCard {
  formData: {
    number: string
    name: string
    expiry: string
    cvv: string
  }
  handleChange: (name: string, value: string) => void
}

const CreditCardContext = createContext<UseCreditCard>({} as UseCreditCard)

const CreditCardProvider: React.FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const handleChange = (name: string, value: string) => {
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
