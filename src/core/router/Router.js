import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Fallback from './fallback'

const Payment = lazy(() => import('../../pages/payment'))
const Bag = lazy(() => import('../../pages/bag'))

const Routers = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={Fallback}>
        <section>
          <Switch>
            <Route path="/" exact component={Bag} />
            <Route path="/payment" component={Payment} />
            <Route component={Bag} />
          </Switch>
        </section>
      </Suspense>
    </BrowserRouter>
  </>
)

export default Routers
