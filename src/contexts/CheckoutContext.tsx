/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useState } from 'react'
import { ApiData } from '../../@types/apiData'

export type UserData = {
  creditCard: string,
  cvv: string,
  date: string,
  name: string
}

type Context = {
  handleProduct: (value: ApiData) => void,
  product: ApiData | undefined,
  handleUser: (value: UserData) => void,
  user: UserData
}

// prettier-ignore
// eslint-disable-next-line
export const CheckoutContext = createContext<Partial<Context>>({})

type ContextProps = {
  children: React.ReactNode
}

export const CheckoutContextProvider: React.FC<ContextProps> = ({ children }) => {
  // eslint-disable-next-line
  const [product, setProduct] = useState?.<ApiData>()
  // eslint-disable-next-line
  const [user, setUser] = useState?.<UserData>()

  const handleProduct = useCallback(
    (value: ApiData) => {
      setProduct(value)
    },
    [setProduct]
  )

  const handleUser = useCallback(
    (value: UserData) => {
      setUser(value)
    },
    [setUser]
  )

  return (
    <CheckoutContext.Provider value={{ handleProduct, product, handleUser, user }}>
      {children}
    </CheckoutContext.Provider>
  )
}
