import React from 'react';

import Button from '../../../../components/Button';
import SumInfo from '../../../../components/SumInfo';
import ItemsList from '../../../../components/ItemsList';

import { Container } from './styles';
import { useCart } from '../../../../hooks/useCart';

export default function CartItemsList() {
  const { cartItems, sumInfo } = useCart();

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <>
          <ItemsList cartItems={cartItems} showControlers={true} />
          <SumInfo sumInfo={sumInfo} />
          <Button title="Seguir para o pagamento" navigation="/cart/payment" />
        </>
      ) : (
        <div>Não há itens no carrinho </div>
      )}
    </Container>
  );
}
