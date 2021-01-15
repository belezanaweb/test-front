import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Routes from './Routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './Assets/styles'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    )
  }
}

export default App
