import React, { Fragment, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { CreditCardForm, PurchaseInfo } from '../components';
import { RootCSS } from '../styles';

function Cart({ purchase }) {

  const history = useHistory();
  const { Container, Button, Title, Flex } = RootCSS;
  const [ validForm, setValidForm ] = useState(false);

  const Checkout = () => {
    history.push('/success');
  }

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
              <Button disabled={validForm ? false : true} onClick={Checkout}>Finalizar o pedido</Button>
            </div>
          </Flex>
        </Fragment>
      }
    </Container>
  )
}

export default Cart;
