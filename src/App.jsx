import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import BasketProvider from './context/Basket'
import CartFeature from './features/cart/Cart'
import PaymentFeature from './features/payment/Payment'
import SuccessFeature from './features/success/Success'

const App = () => {
  return (
    <>
      <BasketProvider>
        <Routes>
          <Route path="/cart" element={<CartFeature />} />
          <Route path="/" element={<Navigate replace to="/cart" />} />
          <Route path="/payment" element={<PaymentFeature />} />
          <Route path="/success" element={<SuccessFeature />} />
        </Routes>
      </BasketProvider>
    </>
  )
}

export default App
