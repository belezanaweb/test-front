import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Cart from './container/Cart'
import Payment from './container/Payment'
import Confirmation from './container/Confirmation'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </Routes>
  )
}
