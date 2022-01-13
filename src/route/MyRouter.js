import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../component/Header/Header'
import Sacola from '../pages/Sacola'

export default function MyRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="sacola" element={<Sacola />} />
        <Route path="pagemento" element={<div />} />
        <Route path="confirmacao" element={<div />} />
      </Routes>
    </>
  )
}
