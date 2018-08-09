import React, { Fragment } from 'react';

/**
 * Styles
 */
import { SectionTitle } from '../../assets/global';
import { PaymentInfos, PaymentInfo } from './styles';

const PaymentDetails = ({ readOnly }) => (
  <Fragment>
    <SectionTitle>Pagamento</SectionTitle>
    <PaymentInfos>
      <PaymentInfo>
        ****.****.****.1234 <br />
        José da Silva <br />
        05/2020
      </PaymentInfo>
    </PaymentInfos>
  </Fragment>
);

export default PaymentDetails;
