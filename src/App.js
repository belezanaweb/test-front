import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './containers/navbarContainer/index'
import { Cart } from './containers/cartContainer/cartContainer'
import Payment from './containers/paymentContainer/paymentContainer'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Cart />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/confirm"></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
