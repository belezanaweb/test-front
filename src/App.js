import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Header } from './components'
import { Confirmation } from './pages/Confirmation'
import { Payment } from './pages/Payment'
import { Wallet } from './pages/Wallet'

import GlobalStyle from './styles/globalStyle'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Navigate replace to="/wallet" />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  </BrowserRouter>
)

export default App
