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
          <li>{creditCardInfo.number.replace(/(?!(?:\D*\d){14}$|(?:\D*\d){1,3}$)\d/gm, '#')}</li>
          <li>{creditCardInfo.name}</li>
          <li>{creditCardInfo.expiry}</li>
        </div>
      )}
    </Container>
  );
}
