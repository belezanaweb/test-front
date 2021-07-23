import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import SuccessPayment from './pages/SuccessPayment'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/success" component={SuccessPayment} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
