import React from 'react'
import { ThemeProvider } from 'styled-components'

import { CartProvider } from './cart'
import { CreditCardProvider } from './creditCard'

import { theme } from '../styles/theme'

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CreditCardProvider>
      <CartProvider>{children}</CartProvider>
    </CreditCardProvider>
  </ThemeProvider>
)

export const TestProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
