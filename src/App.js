import React from 'react'
import { Routes, Route } from 'react-router-dom'
import List from './pages/List'
import './App.css'
import Api from './components/Components'

// const App = () => <div className="App">Boa sorte! 🚀</div>

export default function App() {
  return (
    <div>
      <Api />
      {/* <Routes> */}
      <p>teste from App.js</p>
      {/* <Route exact path="/carteira" element={<List />} /> */}
      {/* </Routes> */}
    </div>
  )
}
