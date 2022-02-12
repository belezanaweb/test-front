import React from 'react';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';
import EmptyMessage from '../../components/EmptyMessage';

import { Container, Content } from './styles';
import { useCart } from '../../hooks/useCart';

export default function CartList() {
  const { cartItems } = useCart();

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <Content>
          <ItemsList showControlers={true} />
          <SumInfo />
          <Button title="Seguir para o pagamento" navigation="/cart/payment" />
        </Content>
      ) : (
        <EmptyMessage />
      )}
    </Container>
  );
}
