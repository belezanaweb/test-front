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
        <Route exact path='/cart' component={CartContainer}/>
        <Route path='/payment' component={PaymentContainer} />
        <Route path='/confirmation' component={ConfirmationContainer} />
        <Redirect from='/' to='/cart' />
      </Switch>
    </Fragment>
  </Router>
)

export default App;
