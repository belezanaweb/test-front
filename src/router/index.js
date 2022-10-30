import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Cart from '../pages/Cart'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Cart />} />
    </Routes>
  )
}

export default Router
