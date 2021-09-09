import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Cart from '@/pages/Cart'
import Payment from '@/pages/Payment'
import Success from '@/pages/Success'

const Main = (): React.ReactElement => (
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/success" exact component={Success} />
        <Route exact path="/">
          <Redirect to="/cart" />
        </Route>
      </Switch>
    </BrowserRouter>
  </StrictMode>
)

ReactDOM.render(<Main />, document.getElementById('root'))
