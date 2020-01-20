import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

import loadingImg from '../img/loading.gif'
import Header from '../components/Header'
import { CardStyle } from '../components/Card/styles'
const Cart = lazy(() => import('./Cart'))
const Checkout = lazy(() => import('./Checkout'))
const Order = lazy(() => import('./Order'))

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <CardStyle>
            <div className="center-xs row">
              <div className="col-xs-8">
                <img src={loadingImg} alt="Carregando..." />
              </div>
            </div>
          </CardStyle>
        }
      >
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/carrinho" />} />
          <Route path="/carrinho" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/pedido" component={Order} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
