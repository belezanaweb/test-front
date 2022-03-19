import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartProvider'
import Bag from './pages/Bag/Bag'
import Payment from './pages/Payment/Payment'
import Sucess from './pages/Sucess/Sucess'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bag />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
