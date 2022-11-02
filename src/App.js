import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import './App.css'
import styles from './App.module.css'

// const App = () => <div className="App">Boa sorte! 🚀</div>

export default function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Cart />} path="/" />
        <Route element={<Payment />} path="/payment" />
        <Route element={<Confirmation />} path="/confirmation" />
      </Routes>
    </div>
  )
}
