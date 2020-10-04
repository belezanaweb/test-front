import React from "react";

import { PurchaseCSS } from '../styles';

function PurchaseInfo() {

  const { Container, Info, Discount, Total } = PurchaseCSS;

  return (
    <Container>
      <Info>
        <p>PRODUTOS</p>
        <p>R$ 624,80</p>
      </Info>
      <Info>
        <p>FRETE</p>
        <p>R$ 5,30</p>
      </Info>
      <Discount>
        <p>DESCONTO</p>
        <p>- R$ 30,00</p>
      </Discount>
      <Total>
        <p>TOTAL</p>
        <p>R$ 600,10</p>
      </Total>
    </Container>
  );
}

export default PurchaseInfo;
