import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Cart from './Cart'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sacola" />} />
        <Route path="/sacola" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
