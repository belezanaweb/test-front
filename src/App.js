import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components'
import { Bag } from './pages/Bag'

import GlobalStyle from './styles/globalStyle'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Bag />} />
    </Routes>
  </BrowserRouter>
)

export default App
