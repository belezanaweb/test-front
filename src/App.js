import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg'

import Basket from './pages/Basket/Basket'
import Confirmation from './pages/Confirmation/Confirmation'
import Payment from './pages/Payment/Payment'

import './App.css'

const App = () => (
  <div className="App">    
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Sacola</Link>
          </li>
          <li>
            <Link to="/pagamento">Pagamento</Link>
          </li>
          <li>
            <Link to="/confirmacao">Confirmação</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Basket />
          </Route>
          <Route path="/pagamento">
            <Payment />
          </Route>
          <Route path="/confirmacao">
            <Confirmation />
          </Route>
        </Switch>
      </div>
    </Router>

    <img src={logo} className="App-logo" alt="logo" />
  </div>
)

export default App
