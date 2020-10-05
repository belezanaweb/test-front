import React, { useContext, useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { handleSetCartResume } = useContext(ResumeContext);

  useEffect(() => {
    api.get<CartInterface>('/5b15c4923100004a006f3c07').then((response) => {
      handleSetCartResume(response.data);
      setLoading(false);
    });
  }, [handleSetCartResume]);

  const handleNextStep = () => {
    history.push('/payment');
  };

  return (
    <>
      <Header />
      {!loading && (
        <GlobalContainer>
          <Products />
          <Price />
          <Button type="button" onClick={handleNextStep}>SEGUIR PARA O PAGAMENTO</Button>
        </GlobalContainer>
      )}
    </>
  );
};

export default Cart;
