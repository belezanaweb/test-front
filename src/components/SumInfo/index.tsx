import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import formatCurrency from '../../helpers/formatCurrency';
import { Container } from './styles';

export default function SumInfo() {
  return (
    <Container>
      <li>Produtos</li>
      <li>Frete</li>
      <li>Desconto</li>
      <li>Total</li>
    </Container>
  );
}
