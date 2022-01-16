import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { CART_PATH, PAYMENT_PATH, PAYMENT_SUCCESS_PATH } from '../constants/paths'

import PurchaseContextProvider from '../contexts/PurchaseContext'

import CartPage from '../pages/cart/Cart'
import PaymentPage from '../pages/payment/Payment'
import PaymentSuccess from '../pages/paymentSuccess/PaymentSuccess'

function RouterConfig(): JSX.Element {
  return (
    <PurchaseContextProvider>
      <Routes>
        <Route path={CART_PATH} element={<CartPage />} />
        <Route path={PAYMENT_PATH} element={<PaymentPage />} />
        <Route path={PAYMENT_SUCCESS_PATH} element={<PaymentSuccess />} />

        <Route path="*" element={<Navigate replace to={CART_PATH} />} />
      </Routes>
    </PurchaseContextProvider>
  )
}

export default RouterConfig
