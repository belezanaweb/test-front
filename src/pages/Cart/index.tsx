import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from 'services/api';

import { Cart as CartInterface } from 'models/cart';

import { ResumeContext } from 'context/resume';

import { GlobalContainer } from 'styles/global';

import Header from 'components/Header';
import Products from 'components/Products';
import Price from 'components/Price';
import Button from 'components/Button';

const Cart: React.FC = () => {
  const history = useHistory();
  const { handleSetCartResume } = useContext(ResumeContext);

  useEffect(() => {
    api.get<CartInterface>('/5b15c4923100004a006f3c07').then((response) => {
      handleSetCartResume(response.data);
    });
  }, [handleSetCartResume]);

  const handleSubmit = () => {
    history.push('/payment');
  };

  return (
    <>
      <Header />
      <GlobalContainer>
        <Products />
        <Price />
        <form onSubmit={handleSubmit}>
          <Button type="submit">SEGUIR PARA O PAGAMENTO</Button>
        </form>
      </GlobalContainer>
    </>
  );
};

export default Cart;
