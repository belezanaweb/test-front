import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PaymentStore } from './store/PaymentStore'
import { CartStore } from './store/CartStore'

const Cart = lazy(() => import('./containers/Cart/Cart'))
const Payment = lazy(() => import('./containers/Payment/Payment'))
const Confirmation = lazy(() => import('./containers/Confirmation/Confirmation'))

const App = () => (
  <PaymentStore>
    <CartStore>
      <Router>
        <Suspense fallback={<div>Carregando...</div>}>
          <Switch>
            <Route path="/pagamento" component={Payment} />
            <Route path="/confirmacao" component={Confirmation} />
            <Route exact path="/" component={Cart} />
          </Switch>
        </Suspense>
      </Router>
    </CartStore>
  </PaymentStore>
)

export default App
