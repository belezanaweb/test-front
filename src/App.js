import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Bag from './pages/bag'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Bag} />
      <Route component={Bag} />
    </Switch>
  </BrowserRouter>
)

export default App
