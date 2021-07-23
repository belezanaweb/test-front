import React from 'react'
import './App.css'
import { Header } from './components/Header'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import SuccessPayment from './pages/SuccessPayment'

const App = () => {
  return (
    <>
      <Header />
      <SuccessPayment />
    </>
  )
}

export default App
