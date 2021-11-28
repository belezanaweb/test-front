import React from 'react'
import { Routes } from './routes/routes'
import { CheckoutContextProvider } from './contexts/CheckoutContext'

export const App: React.FC = () => {
  return (
    <CheckoutContextProvider>
      <Routes />
    </CheckoutContextProvider>
  )
}
