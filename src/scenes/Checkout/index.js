import React, { Component } from 'react';

//components
import Header from './components/Header';

//styles
import { Container } from './styles';
import TotalBox from './components/TotalBox';
import ButtonBox from './components/ButtonBox';

//pages
import CartBox from './components/CartBox';
import Page from './pages';
export default class Checkout extends Component {
  render() {
    return(
      <Container>
        <Header/>
        <Page component={'Cart'}/>
        <TotalBox/>
        <ButtonBox/>
      </Container>
    );
  }
}
