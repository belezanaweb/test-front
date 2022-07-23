import React from 'react'
import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'
import { Container } from './components/Container'
import { DataProvider } from './context'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './assets/styles/theme'

const Cart = loadable(() => import('./pages/Cart/'), {
  resolveComponent: (components) => components.Cart
})

const Payment = loadable(() => import('./pages/Payment/'), {
  resolveComponent: (components) => components.Payment
})

const Success = loadable(() => import('./pages/Success/'), {
  resolveComponent: (components) => components.Success
})

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </DataProvider>
  )
}

export default App
