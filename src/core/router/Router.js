import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Fallback from './fallback'

const Bag = lazy(() => import('../../pages/bag'))
const Payment = lazy(() => import('../../pages/payment'))
const Confirmation = lazy(() => import('../../pages/confirmation'))

const Routers = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <section>
          <Switch>
            <Route path="/" exact component={Bag} />
            <Route path="/payment" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
            <Route component={Bag} />
          </Switch>
        </section>
      </Suspense>
    </BrowserRouter>
  </>
)

export default Routers
