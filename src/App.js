import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ padding: '10px' }}>
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
