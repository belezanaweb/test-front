import React, { createContext, useContext, useState, useEffect } from 'react'
import requestAPI from '../utils/requestAPI'



interface Props {
  children: React.ReactNode
}

interface TotalData {
    subTotal: number
    shippingTotal: number
    discount: number
    total: number
}

interface Image {
  small: string
}

interface Item {
  product: {
    name: string
    imageObjects: Image[]
    priceSpecification: {
      price: number
    }
  }
}
interface UseCart {
  totalData: TotalData
  items: Item[]
}

interface Resp {
  data?: {
    subTotal: number
    shippingTotal: number
    discount: number
    total: number
    items?: Item[]
  }
}

const CartContext = createContext<UseCart>({} as UseCart)

const CartProvider: React.FC<Props> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([])
  const [totalData, setTotalData] = useState<TotalData>({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0
  })

  useEffect(() => {
    requestAPI({ url: process.env.REACT_APP_GB_URL as string }).then((resp: Resp | undefined) => {
      if (resp?.data) {
        setItems(resp?.data?.items || [])
        setTotalData({
          subTotal: resp?.data.subTotal,
          shippingTotal: resp?.data.shippingTotal,
          discount: resp?.data.discount,
          total: resp?.data.total
        })
      }
    })
  }, [])

  return <CartContext.Provider value={{ items, totalData }}>{children}</CartContext.Provider>
}

function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be use within a CartProvider')
  }

  return context
}

export { CartProvider, useCart }
