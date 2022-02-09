import React, { useContext } from 'react';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container } from './styles';
import { StorageContext } from '../../contexts/StorageContext';

export default function Cart() {
  const { cartItems } = useContext(StorageContext);

  return (
    <Container>
      {cartItems && <ItemsList cart={cartItems} />}
      <SumInfo />
      <Button title="Seguir para o pagamento" />
    </Container>
  );
}
