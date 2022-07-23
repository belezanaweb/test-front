import React from 'react'
import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'
import { Container } from './components/Container'
import { DataProvider } from './context'

const Cart = loadable(() => import('./pages/Cart/'), {
  resolveComponent: (components) => components.Cart
})

const Payment = loadable(() => import('./pages/Payment/'), {
  resolveComponent: (components) => components.Payment
})

const App = () => {
  return (
    <DataProvider>
      <Container>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Container>
    </DataProvider>
  )
}

export default App
