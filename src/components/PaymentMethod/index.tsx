import React from 'react';

import { Container } from './styles';

interface PaymentMethodProps {
  creditCardInfo: any;
}

export default function PaymentMethod({ creditCardInfo }: PaymentMethodProps) {
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
