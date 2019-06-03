import React, { Component } from 'react';

//components
import Header from './components/Header';
// import Cart from './pages/Cart';

//styles
import { Container } from './styles';
import Cart from './pages/Cart';
import Total from './components/Total';
import ButtonBox from './components/ButtonBox';

export default class Checkout extends Component {
  render() {
    return(
      <Container>
        <Header/>
        <Cart/>
        <Total/>
        <ButtonBox/>
      </Container>
    );
  }
}
