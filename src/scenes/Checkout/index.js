import React, { Component } from 'react';

//components
import Header from './components/Header';
// import Cart from './pages/Cart';

//styles
import { Container } from './styles';
import Cart from './pages/Cart';

export default class Checkout extends Component {
  render() {
    return(
      <Container>
        <Header/>
        <Cart/>
      </Container>
    );
  }
}
