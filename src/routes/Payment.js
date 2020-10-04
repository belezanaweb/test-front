import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { CreditCardForm, PurchaseInfo } from '../components';
import { RootCSS } from '../styles';

function Cart({ purchase }) {

  const { Container, Button, Title, Flex } = RootCSS;
  const [ validForm, setValidForm ] = useState(false);

  return (
    <Container>
      { !purchase.info && <Redirect to="/" />}
      {
        purchase.info &&
        <Fragment>
          <Title>Cartão de crédito</Title>
          <Flex>
            <CreditCardForm setValidForm={setValidForm} />
            <div>
              <PurchaseInfo info={purchase.info} />
              { validForm && <Button to={{ pathname: '/success', state: { cardInfo:  validForm} }}>Finalizar o pedido</Button>}
            </div>
          </Flex>
        </Fragment>
      }
    </Container>
  )
}

export default Cart;
