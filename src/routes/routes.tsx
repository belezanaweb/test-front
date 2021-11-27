import React from 'react'
import { Route, Routes as MyRoutes } from 'react-router-dom'

import { Checkout, Payment, Confirmation } from '../pages'

export const Routes = () => {
  return (
    <MyRoutes>
      <Route path="/" element={<Checkout />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/confirmation" element={<Confirmation />}></Route>
    </MyRoutes>
  )
}
