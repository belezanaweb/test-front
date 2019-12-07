 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
 BrowserRouter as Router,
 Switch,
 Route
} from "react-router-dom";

import Cart from './Pages/Cart';
import * as serviceWorker from './serviceWorker';
import Header from './Components/Header'

ReactDOM.render(
  <Router>
    <Header navItems={[
      {
        key: "cart",
        url: "/cart",
        text: "sacola"
      }
    ]} />


    <div className="app-container">
      <div className="app-content">
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/payment">
            <div>Test</div>
          </Route>
          <Route path="/confirmation">
            <div>Test 2</div>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
