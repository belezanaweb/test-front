import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { Bag, Payment, Confirmation } from 'views'
import Layout from 'layout'

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Bag />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
