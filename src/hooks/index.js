import React from 'react'
import { ThemeProvider } from 'styled-components'

import { CartProvider } from './cart'
import { CreditCardProvider } from './creditCard'

import { theme } from '../styles/theme'

const AppProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CreditCardProvider>
      <CartProvider>{children}</CartProvider>
    </CreditCardProvider>
  </ThemeProvider>
)

export default AppProvider
