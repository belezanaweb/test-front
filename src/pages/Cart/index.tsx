import React from 'react';

import { Container } from './styles';

import Header from 'components/Header';
import Products from 'components/Products';
import Price from 'components/Price';

const Cart: React.FC = () => {
  return (
    <Container>
      <Header />
      <Products />
      <Price />
    </Container>
  );
};

export default Cart;
