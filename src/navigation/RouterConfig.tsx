import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { CART_PATH, PAYMENT_PATH, PAYMENT_SUCCESS_PATH } from '../constants/paths'

import PurchaseContextProvider from '../contexts/PurchaseContext'

const CartPage = lazy(() => import('../pages/cart/Cart'))
const PaymentPage = lazy(() => import('../pages/payment/Payment'))
const PaymentSuccess = lazy(() => import('../pages/paymentSuccess/PaymentSuccess'))

function RouterConfig(): JSX.Element {
  return (
    <PurchaseContextProvider>
      <Suspense fallback={null}>
        <Routes>
          <Route path={CART_PATH} element={<CartPage />} />
          <Route path={PAYMENT_PATH} element={<PaymentPage />} />
          <Route path={PAYMENT_SUCCESS_PATH} element={<PaymentSuccess />} />

          <Route path="*" element={<Navigate replace to={CART_PATH} />} />
        </Routes>
      </Suspense>
    </PurchaseContextProvider>
  )
}

export default RouterConfig
