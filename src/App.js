import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import './App.css'

// const App = () => <div className="App">Boa sorte! 🚀</div>

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Cart />} path="/" />
      </Routes>
    </div>
  )
}
