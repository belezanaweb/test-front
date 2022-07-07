import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { getBag } from '../pages/bag/service'

interface BagProviderProps {
  children: ReactNode
}

interface BagContextProps {
  bag: ProductBag | undefined
  setBag: React.Dispatch<React.SetStateAction<ProductBag | undefined>>
}

export const BagContext = createContext<BagContextProps>({} as BagContextProps)

export const BagProvider = ({ children }: BagProviderProps) => {
  const [bag, setBag] = useState<ProductBag>()

  return <BagContext.Provider value={{ bag, setBag }}>{children}</BagContext.Provider>
}
