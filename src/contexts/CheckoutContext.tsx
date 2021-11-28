/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useState } from 'react'
import { ApiData } from '../../@types/apiData'

type Context = {
  handleProduct: (value: ApiData) => void,
  product: ApiData | undefined
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

  const handleProduct = useCallback(
    (value: ApiData) => {
      setProduct(value)
    },
    [setProduct]
  )

  return (
    <CheckoutContext.Provider value={{ handleProduct, product }}>
      {children}
    </CheckoutContext.Provider>
  )
}
