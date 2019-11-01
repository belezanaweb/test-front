import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Cart from './components/pages/Cart';
import Payment from './components/pages/Payment';
import Confirmation from './components/pages/Confirmation';
import Styleguide from './components/pages/Styleguide';
import { connect } from 'react-redux';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/styleguide" component={Styleguide} />
            <Redirect from="/" to="/cart" />
          </Switch>
      </div>
    );
  }
}


export default connect(store => ({ text: store.text }))(App);
