import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

// Dynamic imports for performace improvement
const CartContainer = React.lazy(() => import('../redux/containers/CartContainer'))
const PaymentContainer = React.lazy(() => import('../redux/containers/PaymentContainer'))
const SummaryContainer = React.lazy(() => import('../redux/containers/SummaryContainer'))

export default () => {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <Switch>
        <Route path="/" exact component={CartContainer} />
        <Route path="/payment" component={PaymentContainer} />
        <Route path="/summary" component={SummaryContainer} />
        <Route path="*">
          <>Not Found!</>
        </Route>
      </Switch>
    </Suspense>
  )
}
