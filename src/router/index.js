import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Cart = lazy(() => import('../pages/Cart'))
const Payment = lazy(() => import('../pages/Payment'))

function Router() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/pagamento" element={<Payment />} />
      </Routes>
    </Suspense>
  )
}

export default Router
