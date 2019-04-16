import React, { Component } from 'react';
import CheckoutPage from './containers/CheckoutPage/CheckoutPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/checkout/" component={CheckoutPage} />
          <Redirect path="/" to="/checkout" />
        </Switch>
      </div>
    );
  }
}

export default App;
