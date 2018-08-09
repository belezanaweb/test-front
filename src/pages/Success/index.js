import React, { Fragment } from 'react';

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
import Wizard from '../../components/Wizard';

const Success = () => (
  <Fragment>
    <Wizard current={3} />
    <Inner>
      <SuccessTitle>COMPRA EFETUADA COM SUCESSO</SuccessTitle>
      <PaymentDetails />
      <ProductsList readOnly />
      <Summary />
    </Inner>
  </Fragment>
);

export default Success;
