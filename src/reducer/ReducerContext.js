import React from 'react'
import useCustomReducer from './Reducer'

// Creating context for store state.
// It will pass to Provider (same as ThemeProvider of styled-components)
// Changing that dinamically.
export const ReducerContext = React.createContext()

// Não consegui fazer o role do prop types pro children, então desbililtei
// eslint-disable-next-line react/prop-types
export const ReducerContextProvider = ({ children }) => {
  const [state, dispatch] = useCustomReducer()

  return <ReducerContext.Provider value={{ state, dispatch }}>{children}</ReducerContext.Provider>
}
