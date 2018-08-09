import React, { Fragment } from 'react';

/**
 * Styles
 */
import { SectionTitle, BoxArea } from '../../assets/global';
import { PaymentInfo } from './styles';

const PaymentDetails = ({ readOnly }) => (
  <Fragment>
    <SectionTitle>Pagamento</SectionTitle>
    <BoxArea>
      <PaymentInfo>
        ****.****.****.1234 <br />
        José da Silva <br />
        05/2020
      </PaymentInfo>
    </BoxArea>
  </Fragment>
);

export default PaymentDetails;
