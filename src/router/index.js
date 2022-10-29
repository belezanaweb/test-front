import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Kart from '../pages/Kart'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Kart />} />
    </Routes>
  )
}

export default Router
