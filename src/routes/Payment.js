import React from 'react';

import CreditCardForm from '../components/CreditCardForm';
import PurchaseInfo from '../components/PurchaseInfo';
import { RootCSS } from '../styles';

function Cart() {
  const { Container, Button, Title, Flex } = RootCSS;
  return (
    <Container>
      <Title>Cartão de crédito</Title>

      <Flex>
        <CreditCardForm />
        <div>
          <PurchaseInfo />
          <Button>Finalizar o pedido</Button>
        </div>
      </Flex>

    </Container>
  )
}

export default Cart;
