import React from "react";

import { PurchaseCSS } from '../styles';
import { Currency } from '../components';

function PurchaseInfo({ info }) {

  const { Container, Info, Discount, Total } = PurchaseCSS;

  return (
    <Container>
      <Info>
        <p>PRODUTOS</p>
        <p><Currency value={info.subTotal}/></p>
      </Info>
      <Info>
        <p>FRETE</p>
        <p><Currency value={info.shippingTotal} /></p>
      </Info>
      <Discount>
        <p>DESCONTO</p>
        <p>- <Currency value={info.discount}/></p>
      </Discount>
      <Total>
        <p>TOTAL</p>
        <p><Currency value={info.total} /></p>
      </Total>
    </Container>
  );
}

export default PurchaseInfo;
