import React from 'react';

import { Container, ValueInfo } from './styles';

const Price: React.FC = () => {
  return (
    <Container>
      <ValueInfo>
        <span>PRODUTOS</span>
        <span>R$ 624,80</span>
      </ValueInfo>
      <ValueInfo style={{ marginTop: 9 }}>
        <span>FRETE</span>
        <span>R$ 5,30</span>
      </ValueInfo>
      <ValueInfo style={{ marginTop: 8, color: 'var(--color-orange)' }}>
        <span>DESCONTO</span>
        <span>- R$ 30,00</span>
      </ValueInfo>
      <ValueInfo style={{ marginTop: 16, fontWeight: 700 }}>
        <span>TOTAL</span>
        <span>R$ 600,10</span>
      </ValueInfo>
    </Container>
  );
};

export default Price;
