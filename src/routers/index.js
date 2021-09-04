import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from '../styles/global'

import routes from './routers'

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ component: Component, ...params }) => (
          <Route {...params} component={Component} />
        ))}
      </Switch>
      <GlobalStyle />
    </Router>
  )
}
