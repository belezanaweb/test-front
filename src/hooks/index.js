import React from 'react'

import { CartProvider } from './cart'

const AppProvider = ({ children }) => <CartProvider>{children}</CartProvider>

export default AppProvider
