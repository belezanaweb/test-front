import React from 'react';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router';

import Header from '../../components/Header';
import MainContent from '../../components/MainContent';

import { Container } from './styles';
import { CartContext } from '../../interfaces/Cart';
import { useCart } from '../../hooks/useCart';

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet
          context={{
            cartItems
            //creditCardInfo
          }}
        />
      </MainContent>
    </Container>
  );
}

export function useCartContext() {
  return useOutletContext<CartContext>();
}
