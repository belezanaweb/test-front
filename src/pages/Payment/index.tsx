import React from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContainer } from 'styles/global';

import Header from 'components/Header';
import Price from 'components/Price';
import Button from 'components/Button';

const Payment: React.FC = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/success');
  };

  return (
    <>
      <Header />
      <GlobalContainer>
        <Price />
        <form onSubmit={handleSubmit}>
          <Button type="submit">FINALIZAR O PEDIDO</Button>
        </form>
      </GlobalContainer>
    </>
  );
};

export default Payment;
