import React, { Component } from 'react';

/**
 * Styles
 */
import './assets/global'
import { Inner } from './assets/global'

/**
 * Components
 */
import Button from './components/Button';
import Wizard from './components/Wizard';
import ProductsList from './components/ProductsList';
import Summary from './components/Summary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizard />
        <Inner>
          <ProductsList />
          <Summary />
          <Button>Seguir para o pagamento</Button>
        </Inner>
      </div>
    );
  }
}

export default App;
