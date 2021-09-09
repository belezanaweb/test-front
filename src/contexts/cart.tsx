import React, { createContext, useContext, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICart } from '@/entities/Cart'

export type CartContextType = {
  cart: ICart | null
  loadCart: () => void
}

const CartContext = createContext<CartContextType>({
  cart: null,
  loadCart: () => null
})

interface OwnProps {
  children: React.ReactElement
}

export default function CartProvider (props: OwnProps): React.ReactElement {
  const { children } = props

  const [cart, setCart] = useState<ICart | null>(null)

  const loadCart = async (): Promise<void> => {
    await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(async (response) => response.json())
      .then((cart: ICart) => {
        setCart(cart)
      })
      .catch(console.error)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        loadCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart (): CartContextType {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  const { cart, loadCart } = context
  return { cart, loadCart }
}
