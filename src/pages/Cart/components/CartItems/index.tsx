import React from 'react';

import Button from '../../../../components/Button';
import SumInfo from '../../../../components/SumInfo';
import ItemsList from '../../../../components/ItemsList';

import { Container } from './styles';
import { useCartContext } from '../../index';

export default function CartItems() {
  const { cartItems } = useCartContext();

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
