import React from 'react';

import Button from '../../../../components/Button';
import SumInfo from '../../../../components/SumInfo';
import ItemsList from '../../../../components/ItemsList';

import { Container } from './styles';
import { useCart } from '../../../../hooks/useCart';

export default function CartItems() {
  const { cartItems, cart } = useCart();

  return (
    <Container>
      {cartItems && (
        <>
          <ItemsList cartItems={cartItems} />
          <SumInfo cart={cart} />
          <Button title="Seguir para o pagamento" navigation="/cart/payment" />
        </>
      )}
    </Container>
  );
}
