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
import Payment from './Pages/Payment'

let routerItems = [
  {
    key: "cart",
    url: "/cart",
    text: "sacola",
    component: () => (<Cart />)
  },
  {
    key: "payment",
    url: "/payment",
    text: "pagamento",
    component: () => (<Payment />)
  },
  {
    key: "confirmation",
    url: "/confirmation",
    text: "confirmacao",
    component: () => (<div>Page missing</div>)
  }
];

ReactDOM.render(
  <Router>
    <div className="app-container">
      <Header navItems={routerItems} />
      <div className="app-content">
        <Switch>
          {routerItems.map((routeItem) => (
            <Route path={routeItem.url} exact>
              {routeItem.component}
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
