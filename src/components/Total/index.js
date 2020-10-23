import React from 'react';

import { Container } from './styles';
import { formatPrice } from '../../utils';

function Total({ subTotal, shippingTotal, discount, total }) {
  return (
    <Container data-testid="total">
      <p>
        <span className="description">Produtos</span>

        <span className="values">{formatPrice(subTotal)}</span>
      </p>

      <p>
        <span className="description">Frete</span>

        <span className="values">{formatPrice(shippingTotal)}</span>
      </p>

      <p className="discount">
        <span className="description">Desconto</span>

        <span className="values">{`- ${formatPrice(discount)}`}</span>
      </p>

      <p className="total">
        <b className="description">Total</b>

        <b className="values">{formatPrice(total)}</b>
      </p>
    </Container>
  );
}

export default Total;
