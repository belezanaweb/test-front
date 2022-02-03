import React from 'react'

import { Navigate, Routes, Route } from 'react-router-dom'

import BasketProvider from './context/Basket'
import CartFeature from './features/cart/Cart'
import PaymentFeature from './features/payment/Payment'
import SuccessFeature from './features/success/Success'

const AppRoutes = () => (
  <Routes>
    <Route index element={<CartFeature />} />
    <Route path="/" element={<Navigate replace to="/cart" />} />
    <Route path="cart" element={<CartFeature />} />
    <Route patch="payment" element={<PaymentFeature />} />
    <Route patch="success" element={<SuccessFeature />} />
  </Routes>
)

const AppWrapper = () => {
  return (
    <>
      <BasketProvider>
        <AppRoutes />
      </BasketProvider>
    </>
  )
}

export default AppWrapper
