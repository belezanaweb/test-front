import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/**
 * Redux and Utils
 */
import { Provider } from "react-redux";
import store from "./store";

/**
 * Styles
 */
import './assets/global'

/**
 * Routes
 */
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <div>
            <Switch>
              <Routes />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
