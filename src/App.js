import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/index'
import Cart from './components/cart/index'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Cart />
          </Route>
          <Route path="/payment"></Route>
          <Route path="/confirm"></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
