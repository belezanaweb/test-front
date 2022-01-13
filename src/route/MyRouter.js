import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../component/Header/Header'

export default function MyRouter() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="sacola" element={<div />} />
        <Route path="pagemento" element={<div />} />
        <Route path="confirmacao" element={<div />} />
      </Routes>
    </div>
  )
}
