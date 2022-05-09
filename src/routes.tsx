import { Switch, Route } from 'react-router-dom'

import Payment from './pages/Payment'
import Success from './pages/Success'
import Cart from './pages/Cart'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Cart} />
      <Route path="/payment" component={Payment} />
      <Route path="/success" component={Success} />
    </Switch>
  )
}

export default Routes
