import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Cart from './Cart'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
