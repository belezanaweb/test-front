import React from 'react'
import './App.css'
import Routes from './routes'
import Header from './components/Header'
import Home from './pages/Home'
import DetailProduct from './pages/DetailProduct'
import {  BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div >
        <Header />
        <div>
          <Routes/>
        </div>
      </div>
    </Router>
  );
}

export default App
