import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router';

import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import { StorageContext } from '../../contexts/StorageContext';

import { Container } from './styles';
import { CartContext } from '../../interfaces/Cart';

export default function Cart() {
  const { cartItems, creditCardInfo } = useContext(StorageContext);

  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet context={{ cartItems, creditCardInfo }} />
      </MainContent>
    </Container>
  );
}

export function useCart() {
  return useOutletContext<CartContext>();
}
