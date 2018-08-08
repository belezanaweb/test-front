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
import ProductsList from './components/ProductsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizard />
        <ProductsList />
        <Button>Seguir para o pagamento</Button>
      </div>
    );
  }
}

export default App;
