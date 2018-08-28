import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import CartContainer from './CartContainer';
import PaymentContainer from './PaymentContainer';
import ConfirmationContainer from './ConfirmationContainer';
import StepContainer from './StepContainer';

const Margin = styled.div`
  margin: 2rem 1rem;
`


const App = () => (
  <Router>
    <Fragment>
      <StepContainer />
      <Margin>
        <Switch>
          <Route exact path='/sacola' component={CartContainer}/>
          <Route path='/pagamento' component={PaymentContainer} />
          <Route path='/confirmacao' component={ConfirmationContainer} />
          <Redirect from='/' to='/sacola' />
        </Switch>
      </Margin>
    </Fragment>
  </Router>
)

export default App;
