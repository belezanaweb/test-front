import React, { Component } from 'react';

//components
import Header from './components/Header';

//styles
import { Container } from './styles';
import TotalBox from './components/TotalBox';
import ButtonBox from './components/ButtonBox';

//pages
import Cart from './pages/Cart';
import Payment from './pages/Payment';
export default class Checkout extends Component {
  render() {
    return(
      <Container>
        <Header/>
        <Payment/>
        <TotalBox/>
        <ButtonBox/>
      </Container>
    );
  }
}
