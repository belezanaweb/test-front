import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Cart = lazy(() => import('../pages/Cart'))

function Router() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Cart />} />
      </Routes>
    </Suspense>
  )
}

export default Router
