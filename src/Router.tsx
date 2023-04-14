import { Routes, Route, redirect, Navigate } from 'react-router-dom'

import { Bag } from './pages/Bag'
import { Payment } from './pages/Payment'
import { Confirmation } from './pages/Confirmation'
import { DefaultLayout } from './layouts/DefaultLayout'
import { useEffect } from 'react'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/bag" replace />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route index path="/bag" element={<Bag />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Route>
    </Routes>
  )
}
