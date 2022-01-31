import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Cart from './pages/Cart/Cart'
import Payment from './pages/payment/payment'
import Confirmation from './pages/confirmation/confirmation'

import { DataProvider } from './context/Context'

export default function App() {
  return (
    <DataProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Cart />} exact />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Confirmation" element={<Confirmation />} />
          </Routes>
        </Router>
      </div>
    </DataProvider>
  )
}
