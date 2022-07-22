import React from 'react'
import './App.css'
import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'
import { Container } from './components/Container'

const Cart = loadable(() => import('./pages/Cart/'), {
  resolveComponent: (components) => components.Cart
})

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Cart />} />
      </Routes>
    </Container>
  )
}

export default App
