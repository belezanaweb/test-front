import React from 'react';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container } from './styles';
import { useCart } from '../../hooks/useCart';

export default function CartList() {
  const { cartItems } = useCart();

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <>
          <ItemsList showControlers={true} />
          <SumInfo />
          <Button title="Seguir para o pagamento" navigation="/cart/payment" />
        </>
      ) : (
        <div>Não há itens no carrinho </div>
      )}
    </Container>
  );
}
