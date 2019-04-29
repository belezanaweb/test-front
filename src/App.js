import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
