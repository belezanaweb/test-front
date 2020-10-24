import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Loading from '../components/Loading'
import NotFound from '../pages/NotFound'

const Cart = React.lazy(() => import('../pages/Cart'))
const Payment = React.lazy(() => import('../pages/Payment'))
const Success = React.lazy(() => import('../pages/Success'))

export const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Cart} />
        <Route path="/pagamento" component={Payment} />
        <Route path="/sucesso" component={Success} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  )
}
