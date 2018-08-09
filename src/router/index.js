import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Basket from '../pages/basket'
// import Checkout from '../pages/checkout'
// import Finish from '../pages/finish'

const Basket = Loadable({
  loader: () => import('../pages/basket'),
  loading: () => <h1>Loading!</h1>
})

const Checkout = Loadable({
  loader: () => import('../pages/checkout'),
  loading: () => <h1>Loading!</h1>
})

const Finish = Loadable({
  loader: () => import('../pages/finish'),
  loading: () => <h1>Loading!</h1>
})

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/basket' component={Basket} />
      <Route path='/checkout' component={Checkout} />
      <Route path='/finish' component={Finish} />
    </Switch>
  </BrowserRouter>
)

export default Router
