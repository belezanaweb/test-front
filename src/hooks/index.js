import React from 'react'

import { CartProvider } from './cart'
import { CreditCardProvider } from './creditCard'

const AppProvider = ({ children }) => (
  <CreditCardProvider>
    <CartProvider>{children}</CartProvider>
  </CreditCardProvider>
)

export default AppProvider
