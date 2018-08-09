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

const Success = () => (
  <Inner>
    <ProductsList readOnly />
    <Summary />
  </Inner>
);

export default Success;
