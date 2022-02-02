import React, { createContext, useContext, useEffect, useState } from 'react'

const RequestContext = createContext({
  order: {},
  setOrder: null
})

export function RequestProvider({ children }) {
  const [order, setOrder] = useState({})

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((res) => res.json())
      .then((json) => {
        setOrder(json)
      })
  }, [])

  return <RequestContext.Provider value={{ order, setOrder }}>{children}</RequestContext.Provider>
}

export function useRequestContext() {
  return useContext(RequestContext)
}
