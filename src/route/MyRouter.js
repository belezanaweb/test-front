import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../component/Header/Header'
import Confirmacao from '../pages/Confirmacao'
import Pagamento from '../pages/Pagamento'
import Sacola from '../pages/Sacola'

export default function MyRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="sacola" element={<Sacola />} />
        <Route path="pagamento" element={<Pagamento />} />
        <Route path="confirmacao" element={<Confirmacao />} />
      </Routes>
    </>
  )
}
