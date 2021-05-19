import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Checkout from 'pages/CheckOut'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/checkout/:step" component={Checkout} />
      </Switch>
    </Router>
  )
}

export default Routes
