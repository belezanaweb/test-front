import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TabNav from './app/components/navigation/TabNav'

const Cart = lazy(() => import('./app/pages/cart/CartMain'))
const Checkout = lazy(() => import('./app/pages/checkout/CheckoutMain'))
const WowMoment = lazy(() => import('./app/pages/wowmoment/WowMomentMain'))

export default function CRouter() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Router>
        <TabNav />
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
