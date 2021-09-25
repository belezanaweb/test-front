import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GoodLuck from './pages/GoodLuck'

import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <GoodLuck />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
