import React from 'react';

import { useCart } from '../../hooks/useCart';
import { Container } from './styles';

export default function SumInfo() {
  const { cartItems, sumInfo } = useCart();

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <>
          <li>
            Produtos <span>{sumInfo.itemsSubTotalFormatted}</span>
          </li>
          <li>
            Frete <span>{sumInfo.shippingTotalFormatterd}</span>
          </li>
          <li className="discount">
            Desconto <span>-{sumInfo.itemsDiscountFormatted}</span>
          </li>
          <li className="total">
            Total <span>{sumInfo.itemsTotalFormatted}</span>
          </li>
        </>
      ) : (
        <div>Não há itens no carrinho </div>
      )}
    </Container>
  );
}
