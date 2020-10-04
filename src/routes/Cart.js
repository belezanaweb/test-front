import React, { Fragment } from 'react';

import { Products, PurchaseInfo } from '../components';
import { RootCSS } from '../styles';

function Cart({ purchase }) {

  const { Container, Button, Title, Flex } = RootCSS;

  return (
    <Container>
      {
        purchase.products &&
        <Fragment>
          <Title>Produtos</Title>
          <Flex>
            <Products items={purchase.products} />
            <div>
              <PurchaseInfo info={purchase.info}/>
              <Button to="/payment">Seguir para o pagamento</Button>
            </div>
          </Flex>
        </Fragment>
      }
    </Container>
  )
}

export default Cart;
