import React from 'react';

/**
 * Styles
 */
import { Inner } from '../../assets/global'

/**
 * Components
 */
import Button from '../../components/Button';
import Summary from '../../components/Summary';

const Payment = () => (
  <Inner>
    <Summary />
    <Button>Finalizar o pedido</Button>
  </Inner>
);

export default Payment;
