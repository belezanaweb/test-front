import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { Products, PurchaseInfo } from '../components';
import { RootCSS } from '../styles';

function Cart({ purchase }) {

  const { Container, Button, Title, Flex } = RootCSS;
  const history = useHistory();

  const Payment = () => history.push('/payment');

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
              <Button onClick={Payment}>Seguir para o pagamento</Button>
            </div>
          </Flex>
        </Fragment>
      }
    </Container>
  )
}

export default Cart;
