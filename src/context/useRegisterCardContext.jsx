import React, { createContext, useContext, useState, useCallback } from 'react'

const RegisterCardContext = createContext({
  card: {},
  setCard: null
})

export function RegisterCardProvider({ children }) {
  const [card, setCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const update = useCallback((values) => {
    setCard(values)
    localStorage.setItem('gb:card', JSON.stringify(values))
  }, [])

  return (
    <RegisterCardContext.Provider value={{ card, setCard, update }}>
      {children}
    </RegisterCardContext.Provider>
  )
}

export function useRegisterCardContext() {
  return useContext(RegisterCardContext)
}
