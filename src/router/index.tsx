import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Cart = lazy(() => import('../pages/Cart'))
const Payment = lazy(() => import('../pages/Payment'))
const Confirmation = lazy(() => import('../pages/Confirmation'))

const Router = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/pagamento" element={<Payment />} />
        <Route path="/confirmacao" element={<Confirmation />} />
      </Routes>
    </Suspense>
  )
}

export default Router
