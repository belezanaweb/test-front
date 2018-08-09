import React from 'react';

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

const Cart = () => (
  <Inner>
    <ProductsList />
    <Summary />
    <Button>Seguir para o pagamento</Button>
  </Inner>
);

export default Cart;
