import React from 'react';

import { Container, CheckImage, Message } from './styles';

import Check from '~/assets/images/check.png';

const CheckoutSuccess = () => {
  return (
    <Container>
      <CheckImage src={Check} />
      <Message>Compra efetuada com sucesso</Message>
    </Container>
  );
};

export default CheckoutSuccess;
