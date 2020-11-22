import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Routes from './routes'
import history from './utils/history'
import { BrowserRouter, Router } from 'react-router-dom'

const App = () => (
  <Router history={history}>
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  </Router>
)
export default App
