import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<Navigate replace to="/cart" />} />
      </Routes>
    </>
  )
}

export default App
