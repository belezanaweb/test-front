import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PaymentContext } from 'context/payment';
import { ResumeContext } from 'context/resume';

import { GlobalContainer } from 'styles/global';
import { Container, Message, PaymentInfoElement } from './styles';

import SuccessIcon from 'assets/success.png';

import Header from 'components/Header';
import Products from 'components/Products';
import Price from 'components/Price';

const Success: React.FC = () => {
  const { paymentInfo } = useContext(PaymentContext);
  const { cartResume } = useContext(ResumeContext);
  const history = useHistory();

  useEffect(() => {
    if (!cartResume) history.push('/cart');
  }, [cartResume, history]);

  return (
    <>
      <Header />
      <GlobalContainer>
        <Message>
          <img src={SuccessIcon} alt="Círculo laranja com um check"/>
          <h1>COMPRA EFETUADA COM SUCESSO</h1>
        </Message>
        <PaymentInfoElement>
          <h2>PAGAMENTO</h2>
          <div>
            <p>****.****.****.{paymentInfo?.lastCardNumber}</p>
            <p>{paymentInfo?.cardName}</p>
            <p>{paymentInfo?.cardVality}</p>
          </div>
        </PaymentInfoElement>
        <Products />
        <Price />
      </GlobalContainer>
    </>
  );
};

export default Success;
