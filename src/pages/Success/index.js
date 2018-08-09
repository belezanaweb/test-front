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
import SuccessTitle from '../../components/SuccessTitle';

const Success = () => (
  <Inner>
    <SuccessTitle>COMPRA EFETUADA COM SUCESSO</SuccessTitle>
    <PaymentDetails />
    <ProductsList readOnly />
    <Summary />
  </Inner>
);

export default Success;
