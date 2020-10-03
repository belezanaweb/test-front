import React from 'react';

import { Container } from './styles';

import Header from 'components/Header';
import Products from 'components/Products';

const Cart: React.FC = () => {
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  );
};

export default Cart;
