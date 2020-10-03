import React from 'react';

import CreditCardForm from '../components/CreditCardForm';
import PurchaseInfo from '../components/PurchaseInfo';
import { Container, Button, Title, Flex } from '../styles/Root';

function Cart() {

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
