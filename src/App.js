import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Checkout from './scenes/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Checkout }/>
      </BrowserRouter>
    );
  }
}

export default App;
