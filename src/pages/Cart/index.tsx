import React from 'react';

import { Container, Content } from './styles';

import Header from 'components/Header';
import Products from 'components/Products';
import Price from 'components/Price';
import Button from 'components/Button';

const Cart: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Products />
        <Price />
        <Button>SEGUIR PARA O PAGAMENTO</Button>
      </Content>
    </Container>
  );
};

export default Cart;
