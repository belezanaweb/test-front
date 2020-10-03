import React from 'react';

import { GlobalContainer } from 'styles/global';

import Header from 'components/Header';
import Products from 'components/Products';
import Price from 'components/Price';
import Button from 'components/Button';

const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalContainer>
        <Products />
        <Price />
        <Button>SEGUIR PARA O PAGAMENTO</Button>
      </GlobalContainer>
    </>
  );
};

export default Cart;
