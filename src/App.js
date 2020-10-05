import React from 'react';
import './App.css'

import CartProvider from './provider/CartProvider'
import CardProvider from './provider/CardProvider'
import Router from './Router/index';

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

export const ContainerContent = styled.div`
  width:100%;
  min-height:92vh;
  height: fit-content;
  padding: 3vw;
  padding-bottom: 10vh;
  background-color: #EEE;
  display: flex;
  flex-direction: column;
  gap:6vw;
  transition: 0.7s;
  @media only screen and (min-width: 1024px) {
    gap:3vw;
  }
`

const App = () => {

  return (
    <CartProvider>
      <CardProvider>
          <GlobalStyle />
          <Router />
      </CardProvider>
    </CartProvider>
  );
}
export default App;
