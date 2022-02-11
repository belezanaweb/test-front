import React, { useContext } from 'react';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container, CartContent } from './styles';
import { StorageContext } from '../../contexts/StorageContext';

export default function Cart() {
  const { cartItems } = useContext(StorageContext);

  return (
    <Container>
      <h2>Produtos</h2>

      {cartItems && (
        <CartContent>
          <ItemsList cart={cartItems} />
          <SumInfo cart={cartItems} />
          <Button title="Seguir para o pagamento" navigation="/payment" />
        </CartContent>
      )}
    </Container>
  );
}
