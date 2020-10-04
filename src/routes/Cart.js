import React from 'react';

import Products from '../components/Products';
import PurchaseInfo from '../components/PurchaseInfo';
import { RootCSS } from '../styles';

function Cart() {

  const { Container, Button, Title, Flex } = RootCSS;

  return (
    <Container>
      <Title>Produtos</Title>

      <Flex>
        <Products />
        <div>
          <PurchaseInfo />
          <Button>Seguir para o pagamento</Button>
        </div>
      </Flex>

    </Container>
  )
}

export default Cart;
