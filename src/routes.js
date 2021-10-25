import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Cart = lazy(() => import('./routes/Cart/Cart'))
const Payment = lazy(() => import('./routes/Payment/Payment'))
const Confirmation = lazy(() => import('./routes/Confirmation/Confirmation'))

export const createRoutes = () => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        <Route exact path="/" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </Suspense>
  </Router>
)

export default createRoutes
