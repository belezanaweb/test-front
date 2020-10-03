import React from 'react';

import { Container, Content } from './styles';

import Header from 'components/Header';
import Products from 'components/Products';
import Price from 'components/Price';

const Cart: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Products />
        <Price />
      </Content>
    </Container>
  );
};

export default Cart;
