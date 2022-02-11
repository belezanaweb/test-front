import React from 'react';

import Button from '../../../../components/Button';
import SumInfo from '../../../../components/SumInfo';
import ItemsList from '../../../../components/ItemsList';

import { Container } from './styles';
import { useCart } from '../../index';

export default function CartItems() {
  const { cartItems } = useCart();

  return (
    <Container>
      {cartItems && (
        <>
          <ItemsList cart={cartItems} />
          <SumInfo cart={cartItems} />
          <Button title="Seguir para o pagamento" navigation="/cart/payment" />
        </>
      )}
    </Container>
  );
}
