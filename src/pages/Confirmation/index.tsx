import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container } from './styles';

export default function Confirmation() {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart);

  return (
    <Container>
      {cart && <ItemsList cart={cart} />}
      <SumInfo />
    </Container>
  );
}
