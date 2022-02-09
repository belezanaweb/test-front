import React, { useContext } from 'react';

import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container } from './styles';
import { StorageContext } from '../../contexts/StorageContext';

export default function Confirmation() {
  const { cartItems } = useContext(StorageContext);

  return (
    <Container>
      {cartItems && <ItemsList cart={cartItems} />}
      <SumInfo />
    </Container>
  );
}
