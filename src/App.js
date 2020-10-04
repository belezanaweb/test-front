import React, { useEffect, useReducer } from 'react';

import './App.css'

import { initialStateCart, cartReducer } from './reducers/cart';
import { initialStateCard, cardReducer } from './reducers/card';

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import Router from './Router/index';
import CartContext from './contexts/CartContext';
import CardContext from './contexts/CardContext';

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
`

const App = () => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, initialStateCart);
  const [stateCard, dispatchCard] = useReducer(cardReducer, initialStateCard);

  return (
    <CartContext.Provider value={{ cart: stateCart.cart, dispatch: dispatchCart }}>
      <CardContext.Provider value={{ card: stateCard, dispatch: dispatchCard }}>
          <GlobalStyle />
          <Router />
      </CardContext.Provider>
    </CartContext.Provider>
  );
}
export default App;
