import React, { lazy, Suspense } from 'react'

import { Navigate, Routes, Route } from 'react-router-dom'
import Loader from 'react-loader'

import BasketProvider from './context/Basket'
import Header from './components/Header/Header'

const CartFeature = lazy(() => import('./features/cart/Cart'))
const PaymentFeature = lazy(() => import('./features/payment/Payment'))
const SuccessFeature = lazy(() => import('./features/success/Success'))

const AppRoutes = () => (
  <Routes>
    <Route
      index
      element={
        <Suspense fallback={<Loader />}>
          <CartFeature />
        </Suspense>
      }
    />

    <Route
      path="cart"
      element={
        <Suspense fallback={<Loader />}>
          <CartFeature />
        </Suspense>
      }
    />

    <Route
      path="payment"
      element={
        <Suspense fallback={<Loader />}>
          <PaymentFeature />
        </Suspense>
      }
    />

    <Route
      path="success"
      element={
        <Suspense fallback={<Loader />}>
          <SuccessFeature />
        </Suspense>
      }
    />

    <Route path="/" element={<Navigate replace to="/cart" />} />
    <Route path="*" element={<Navigate replace to="/cart" />} />
  </Routes>
)

const AppWrapper = () => {
  return (
    <BasketProvider>
      <Header></Header>
      <AppRoutes></AppRoutes>
      &nbsp;
    </BasketProvider>
  )
}

export default AppWrapper
