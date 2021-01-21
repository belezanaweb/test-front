import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

// Dynamic imports for performace improvement
const CartScreen = React.lazy(() => import('../screens/Cart'))
const PaymentContainer = React.lazy(() => import('../redux/containers/PaymentContainer'))
const SummaryScreen = React.lazy(() => import('../screens/Summary'))

export default () => {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <Switch>
        <Route path="/" exact component={CartScreen} />
        <Route path="/payment" component={PaymentContainer} />
        <Route path="/summary" component={SummaryScreen} />
        <Route path="*">
          <>Not Found!</>
        </Route>
      </Switch>
    </Suspense>
  )
}
