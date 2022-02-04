import React, { createContext, useContext, useEffect, useState } from 'react'

const RequestContext = createContext({
  order: {},
  setOrder: null
})

export function RequestProvider({ children }) {
  const [order, setOrder] = useState({})

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FelipeQq/mockgb/main/mockgb.json')
      .then((res) => res.json())
      .then((json) => {
        setOrder(json)
        localStorage.setItem('gb:order', JSON.stringify(json))
      })
  }, [])

  return <RequestContext.Provider value={{ order, setOrder }}>{children}</RequestContext.Provider>
}

export function useRequestContext() {
  return useContext(RequestContext)
}
