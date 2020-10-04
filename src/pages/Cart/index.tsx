import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ResumeContext } from 'context/resume';

import { GlobalContainer } from 'styles/global';

import Header from 'components/Header';
import Products from 'components/Products';
import Price from 'components/Price';
import Button from 'components/Button';

const Cart: React.FC = () => {
  const history = useHistory();
  const { handleSetCartItems } = useContext(ResumeContext);

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
