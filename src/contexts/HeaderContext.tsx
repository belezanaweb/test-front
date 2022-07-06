import React, { createContext, Dispatch, ReactNode, useState } from 'react'

interface HeaderProviderProps {
  children: ReactNode
}

interface HeaderContextProps {
  headerPosition: number
  setHeaderPosition: Dispatch<React.SetStateAction<number>>
}

export const HeaderContext = createContext<HeaderContextProps>({} as HeaderContextProps)

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [headerPosition, setHeaderPosition] = useState<number>(0)

  return (
    <HeaderContext.Provider value={{ headerPosition, setHeaderPosition }}>
      {children}
    </HeaderContext.Provider>
  )
}
