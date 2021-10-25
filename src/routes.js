import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Cart, Confirmation, Payment } from './routes'

const Cart = lazy(() => import('./routes/Cart'))
const Payment = lazy(() => import('./routes/Payment'))
const Confirmation = lazy(() => import('./routes/Confirmation'))

const createRoutes = () => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        <Route exact path="/" component={Cart} />
        <Route path="/about" component={Payment} />
        <Route path="/about" component={Confirmation} />
      </Switch>
    </Suspense>
  </Router>
)

export default createRoutes
