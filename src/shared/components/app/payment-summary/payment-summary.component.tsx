import * as React from 'react';

import { IPaymentSummaryProps } from './payment-summary.interface';
import * as Styled from './payment-summary.styled';
import Panel from '../../ui/panel';
import Title from '../../ui/title';

export const PaymentSummary: React.FC<IPaymentSummaryProps> = ({ creditCardNumber, expires, name }) => (
  <Styled.PaymentSummary>
    <Styled.Highlight>
      <Styled.Svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 100 70.05" fill="#ff7800">
          <path d="M98.59 1.41a4.816 4.816 0 00-6.81 0L38.65 62.07 8.21 36.53a4.816 4.816 0 00-6.81 6.81l32.9 25.55c1.88 1.88 7.37 1.31 9.25-.56L98.59 8.21c1.88-1.87 1.88-4.92 0-6.8z" />
        </svg>
      </Styled.Svg>
      Compra Efetuada com sucesso
    </Styled.Highlight>
    <Panel title={<Title tag="h3">Pagamento</Title>}>
      <ul>
        <li>{creditCardNumber}</li>
        <li>{name}</li>
        <li>{expires}</li>
      </ul>
    </Panel>
  </Styled.PaymentSummary>
);
