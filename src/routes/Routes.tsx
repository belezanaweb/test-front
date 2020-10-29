import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Loading from '../components/Loading'
import NotFound from '../pages/NotFound'

const CartContainer = React.lazy(() => import('../redux/containers/CartContainer'))
const PaymentContainer = React.lazy(() => import('../redux/containers/PaymentContainer'))
const Success = React.lazy(() => import('../pages/Success'))

export const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={CartContainer} />
        <Route path="/pagamento" component={PaymentContainer} />
        <Route path="/sucesso" component={Success} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  )
}
