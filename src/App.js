import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/**
 * Styles
 */
import './assets/global'

/**
 * Components
 */
import Wizard from './components/Wizard';

/**
 * Routes
 */
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
          <Wizard />
          <Switch>
            <Routes />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
