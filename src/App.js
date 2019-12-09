import React, {Component} from 'react';
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
  Route, Redirect
} from 'react-router-dom'

let routerItems = [
  {
    key: "cart",
    url: "/cart",
    text: "sacola",
    disabled: true,
    isActive: (match, location) => {

    },
    component: () => (<Cart />)
  },
  {
    key: "payment",
    url: "/payment",
    text: "pagamento",
    disabled: true,
    component: () => (<Payment />)
  },
  {
    key: "confirmation",
    url: "/confirmation",
    text: "confirmacao",
    disabled: true,
    component: () => (<Confirmation />)
  }
];

class App extends Component {
  render() {
    return(<Provider store={store.store}>
      <Router basename="/">
        <div className="app-container">
          <Header navItems={routerItems} />
          <div className="app-content">
            <PersistGate loading={null} persistor={store.persistor}>
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/cart" />
                </Route>
                {routerItems.map((routeItem) => (
                  <Route key={routeItem.key} path={routeItem.url} exact component={routeItem.component} />
                ))}
              </Switch>
            </PersistGate>
          </div>
        </div>
      </Router>
    </Provider>);
  }
}

export default App;
