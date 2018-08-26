import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import CartContainer from './CartContainer';
import PaymentContainer from './PaymentContainer';
import ConfirmationContainer from './ConfirmationContainer';
import StepContainer from './StepContainer';

const App = () => (
  <Router>
    <Fragment>
      <StepContainer />
      <Switch>
        <Route exact path='/sacola' component={CartContainer}/>
        <Route path='/pagamento' component={PaymentContainer} />
        <Route path='/confirmacao' component={ConfirmationContainer} />
        <Redirect from='/' to='/sacola' />
      </Switch>
    </Fragment>
  </Router>
)

export default App;
