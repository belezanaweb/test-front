import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RequestProvider } from './context/useRequestContext'
import GlobalStyle from './globalstyle'

const Cart = lazy(() => import('./pages/Cart'))
const Payment = lazy(() => import('./pages/Payment'))
const Confirmation = lazy(() => import('./pages/Confirmation'))

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Suspense fallback={<div>Aguarde...</div>}>
      <RequestProvider>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </RequestProvider>
      <GlobalStyle />
    </Suspense>
  </BrowserRouter>,
  rootElement
)
