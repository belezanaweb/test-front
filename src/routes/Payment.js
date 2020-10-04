import React from 'react';

import { CreditCardForm, PurchaseInfo } from '../components';
import { RootCSS } from '../styles';

function Cart({ purchase }) {

  const { Container, Button, Title, Flex } = RootCSS;
  return (
    <Container>
      <Title>Cartão de crédito</Title>

      {
        purchase.info &&
        <Flex>
          <CreditCardForm />
          <div>
            <PurchaseInfo info={purchase.info} />
            <Button>Finalizar o pedido</Button>
          </div>
        </Flex>
      }

    </Container>
  )
}

export default Cart;
