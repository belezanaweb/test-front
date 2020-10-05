import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { PaymentContext } from 'context/payment';

import { GlobalContainer } from 'styles/global';

import Header from 'components/Header';
import PaymentForm from 'components/PaymentForm';
import Price from 'components/Price';
import Button from 'components/Button';

const Payment: React.FC = () => {
  const { paymentInfo } = useContext(PaymentContext);
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/success');
  };

  return (
    <>
      <Header />
      <GlobalContainer>
        <PaymentForm />
        <Price />
        <Button
          type="submit"
          disabled={!paymentInfo?.isValid}
          onClick={handleSubmit}
        >
          FINALIZAR O PEDIDO
        </Button>
      </GlobalContainer>
    </>
  );
};

export default Payment;
