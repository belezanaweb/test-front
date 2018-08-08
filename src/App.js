import React, { Component } from 'react';

/**
 * Styles
 */
import './assets/global'

/**
 * Components
 */
import Button from './components/Button';
import Wizard from './components/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizard />
      </div>
    );
  }
}

export default App;
