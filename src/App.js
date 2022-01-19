import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CheckoutProvider } from './contexts/Checkout'
import CartPage from './pages/CartPage'
import PaymentPage from './pages/PaymentPage'
import SuccessPage from './pages/SuccessPage'

const App = () => {
  return (
    <>
      <CheckoutProvider>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<Navigate replace to="/cart" />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </CheckoutProvider>
    </>
  )
}

export default App
