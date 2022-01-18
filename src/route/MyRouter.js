import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../component/Header/Header'

const Sacola = lazy(() => import('../pages/Sacola'))
const Pagamento = lazy(() => import('../pages/Pagamento'))
const Confirmacao = lazy(() => import('../pages/Confirmacao'))

export default function MyRouter() {
  return (
    <>
      <Header />
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="sacola" element={<Sacola />} />
          <Route path="pagamento" element={<Pagamento />} />
          <Route path="confirmacao" element={<Confirmacao />} />
        </Routes>
      </Suspense>
    </>
  )
}
