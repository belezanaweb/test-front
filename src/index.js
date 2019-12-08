import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import Cart from './Pages/Cart';
import Header from './Components/Header';
import Payment from './Pages/Payment';
import Confirmation from './Pages/Confirmation';

import * as store from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



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
    component: () => (<Confirmation />)
  }
];

ReactDOM.render(
  <Provider store={store.store}>
    <Router>
      <div className="app-container">
        <Header navItems={routerItems} />
        <div className="app-content">
          <PersistGate loading={null} persistor={store.persistor}>
            <Switch>
              {routerItems.map((routeItem) => (
                <Route key={routeItem.key} path={routeItem.url} exact component={routeItem.component} />
              ))}
            </Switch>
          </PersistGate>
        </div>
      </div>
    </Router>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
