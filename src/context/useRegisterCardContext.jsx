import React, { createContext, useContext, useState } from 'react'

const RegisterCardContext = createContext({
  card: {},
  setCard: null
})

export function RegisterCardProvider({ children }) {
  const [card, setCard] = useState({
    number: '1234567891123456',
    name: 'LUIZ F C QUEIROZ',
    expiry: '20/2020',
    cvv: '722'
  })

  return (
    <RegisterCardContext.Provider value={{ card, setCard }}>
      {children}
    </RegisterCardContext.Provider>
  )
}

export function useRegisterCardContext() {
  return useContext(RegisterCardContext)
}
