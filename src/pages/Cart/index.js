import React, { Fragment } from 'react';

/**
 * Styles
 */
import { Inner } from '../../assets/global'

/**
 * Components
 */
import Button from '../../components/Button';
import ProductsList from '../../components/ProductsList';
import Summary from '../../components/Summary';
import Wizard from '../../components/Wizard';

const Cart = () => (
  <Fragment>
    <Wizard current={1} />
    <Inner>
      <ProductsList />
      <Summary />
      <Button to="/checkout">Seguir para o pagamento</Button>
    </Inner>
  </Fragment>
);

export default Cart;
