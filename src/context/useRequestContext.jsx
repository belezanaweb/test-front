import React, { createContext, Dispatch, useContext, useEffect, useState } from 'react'

const RequestContext = createContext({
  products: {},
  setProducts: null
})

export function RequestProvider({ children }) {
  const [products, setProducts] = useState({})

  return <RequestContext.Provider value={{}}>{children}</RequestContext.Provider>
}

export function useRequestContext() {
  return useContext(RequestContext)
}
