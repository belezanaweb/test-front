import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import './App.css'

// const App = () => <div className="App">Boa sorte! 🚀</div>

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Cart />} path="/" />
        <Route element={<Payment />} path="/payment" />
        <Route element={<Confirmation />} path="/confirmation" />
      </Routes>
    </div>
  )
}
