import React from 'react'
import useCustomReducer from './Reducer'

export const ReducerContext = React.createContext()

export const ReducerContextProvider = ({ children }) => {
  const [state, dispatch] = useCustomReducer()

  return <ReducerContext.Provider value={{ state, dispatch }}>{children}</ReducerContext.Provider>
}
