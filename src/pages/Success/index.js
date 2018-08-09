import React from 'react';

/**
 * Styles
 */
import { Inner } from '../../assets/global'

/**
 * Components
 */
import ProductsList from '../../components/ProductsList';
import Summary from '../../components/Summary';
import PaymentDetails from '../../components/PaymentDetails';

const Success = () => (
  <Inner>
    <PaymentDetails />
    <ProductsList readOnly />
    <Summary />
  </Inner>
);

export default Success;
