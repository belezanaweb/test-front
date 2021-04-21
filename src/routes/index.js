import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import Cart from '../pages/Cart';
import { routes } from './routes'

export default () => (
  <>
    <Switch>
      {routes.map((r) => (
        <Route exact key={r.id} path={r.url} component={r.component} />
      ))}
      {/* <Route exact path="/cart" component={Cart} /> */}
      <Redirect from="/" to="/cart" />
    </Switch>
  </>
)
