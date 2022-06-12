import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PageContainer } from './components/PageContainer'
import { Header } from './components/Header'
import { Cart } from './pages/Cart/'
import { Payment } from './pages/Payment'
import { Confirmation } from './pages/Confirmation'
const App = () => {
  return (
    <PageContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </PageContainer>
  )
}

export default App
