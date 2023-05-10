import { FC, createContext, useContext, useState } from 'react'
import { Cart } from 'types/api'

export type CartContextType = {
  cart: Cart
  setCart: (cart: Cart) => void
}

const initialState = {
  items: [],
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0
}

export const CartContext = createContext<CartContextType>({
  cart: initialState,
  setCart: () => {}
})

type Props = {
  children: React.ReactNode
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Cart>(initialState)

  const providerValues = {
    cart,
    setCart
  }

  return (
    <CartContext.Provider value={providerValues}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
