import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './containers/navbarContainer/index'
import { CartContainer } from './containers/cartContainer/cartContainer'
import { PaymentContainer } from './containers/paymentContainer/paymentContainer'
import { SuccessContainer } from './containers/successContainer/successContainer'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <CartContainer />
          </Route>
          <Route path="/payment">
            <PaymentContainer />
          </Route>
          <Route path="/success">
            <SuccessContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
