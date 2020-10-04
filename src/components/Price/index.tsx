import React, { useContext } from 'react';

import { ResumeContext } from 'context/resume';

import { usePrice } from 'hooks/price';

import { Container, ValueInfo } from './styles';

const Price: React.FC = () => {
  const { cartResume } = useContext(ResumeContext);
  const { formatPrice } = usePrice();

  return (
    <Container>
      {cartResume && (
        <>
          <ValueInfo>
            <span>PRODUTOS</span>
              <span>R$ {formatPrice(cartResume.subTotal)}</span>
          </ValueInfo>
          <ValueInfo style={{ marginTop: 9 }}>
            <span>FRETE</span>
            <span>R$ {formatPrice(cartResume.shippingTotal)}</span>
          </ValueInfo>
          <ValueInfo style={{ marginTop: 8, color: 'var(--color-orange)' }}>
            <span>DESCONTO</span>
            <span>- R$ {formatPrice(cartResume.discount)}</span>
          </ValueInfo>
          <ValueInfo style={{ marginTop: 16, fontWeight: 700 }}>
            <span>TOTAL</span>
            <span>R$ {formatPrice(cartResume.total)}</span>
          </ValueInfo>
        </>
      )}
    </Container>
  );
};

export default Price;
