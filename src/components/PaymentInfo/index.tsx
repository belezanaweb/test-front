import React from 'react';

import { Container } from './styles';

interface PaymentInfoProps {
  creditCardInfo: any;
}

export default function PaymentInfo({ creditCardInfo }: PaymentInfoProps) {
  return (
    <Container>
      <h2>Pagamento</h2>

      {creditCardInfo && (
        <div>
          <li>{creditCardInfo.cardNumber}</li>
          <li>{creditCardInfo.titularName}</li>
          <li>{creditCardInfo.validate}</li>
        </div>
      )}
    </Container>
  );
}
