import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Steps from './components/Steps/Steps'

const Cart = lazy(() => import('./routes/Cart/Cart'))
const Payment = lazy(() => import('./routes/Payment/Payment'))
const Confirmation = lazy(() => import('./routes/Confirmation/Confirmation'))

export const createRoutes = () => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Steps />
      <Switch>
        <Route exact path="/" component={Cart} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </Suspense>
  </Router>
)

export default createRoutes
