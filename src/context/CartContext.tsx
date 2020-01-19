import { createContext } from 'react'

const CartContext = createContext<Partial<Cart>>({})

export default CartContext
