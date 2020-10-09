import React from 'react';
import { Container, SummaryItem } from './styles';

interface SummaryProps {
  subTotal: string;
  shippingTotal?: string;
  discount?: string;
  total: string;
}

const Summary: React.FC<SummaryProps> = ({
  subTotal,
  shippingTotal,
  discount,
  total,
}) => {
  return (
    <Container>
      <SummaryItem>
        Produtos
        <span>{subTotal}</span>
      </SummaryItem>
      {shippingTotal && (
        <SummaryItem>
          Frete
          <span>{shippingTotal}</span>
        </SummaryItem>
      )}
      {discount && (
        <SummaryItem highlight>
          Desconto
          <span>{discount}</span>
        </SummaryItem>
      )}
      <SummaryItem bolder>
        Total
        <span>{total}</span>
      </SummaryItem>
    </Container>
  );
};

export default Summary;
