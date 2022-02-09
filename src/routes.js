import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loading from './app/components/layout/Loading'
import TabNav from './app/components/navigation/TabNav'

const Cart = lazy(() => import('./app/pages/cart/CartMain'))
const Checkout = lazy(() => import('./app/pages/checkout/CheckoutMain'))
const WowMoment = lazy(() => import('./app/pages/wowmoment/WowMomentMain'))

export default function CRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <TabNav />
        <Routes>
          <Route path="/" element={<Cart />} exact />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wow-moment" element={<WowMoment />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Router>
    </Suspense>
  )
}
