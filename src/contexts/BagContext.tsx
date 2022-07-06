import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { getBag } from '../pages/bag/service'

interface BagProviderProps {
  children: ReactNode
}

export const BagContext = createContext<ProductBag | undefined>({} as ProductBag)

export const BagProvider = ({ children }: BagProviderProps) => {
  const [bag, setBag] = useState<ProductBag>()

  useEffect(() => {
    const loadBag = async () => {
      const productsList = await getBag()
      setBag(productsList)
    }

    loadBag()
  }, [])

  return <BagContext.Provider value={bag}>{children}</BagContext.Provider>
}
