import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import formatCurrency from '../../helpers/formatCurrency';
import { Cart } from '../../interfaces/Cart';
import { Container } from './styles';

interface SumInfoProps {
  cart: Cart;
}

export default function SumInfo({ cart }: SumInfoProps) {
  return (
    <Container>
      <li>Produtos</li>
      <li>Frete</li>
      <li>Desconto</li>
      <li>Total</li>
    </Container>
  );
}
