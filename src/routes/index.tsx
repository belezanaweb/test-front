import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

import loadingImg from '../img/loading.gif'
import Header from '../components/Header'
const Cart = lazy(() => import('./Cart'))
const Checkout = lazy(() => import('./Checkout'))
const Order = lazy(() => import('./Order'))

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <div>
            <img src={loadingImg} alt="Carregando..." />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/pedido" component={Order} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
