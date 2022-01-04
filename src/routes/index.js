import React from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'

import Init from '../pages/init'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/sacola" />} />
        <Route path="/:page" element={<Init />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
