import * as React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function MyRouter() {
  const location = useLocation()

  useEffect(() => {
    console.log('location', location.pathname)
  }, [location.pathname])
  return (
    <div>
      <h1>{location.pathname}</h1>
      <Routes>
        <Route path="sacola" element={<div />} />
        <Route path="pagemento" element={<div />} />
        <Route path="confirmacao" element={<div />} />
      </Routes>
    </div>
  )
}
