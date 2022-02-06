import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Cart = lazy(() => import('./app/pages/Cart'))
const Checkout = lazy(() => import('./app/pages/Checkout'))
const WowMoment = lazy(() => import('./app/pages/WowMoment'))

export default function CRouter() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Router>
        <Routes>
          <Route path="/" element={<Cart />} exact />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wow-moment" element={<WowMoment />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
