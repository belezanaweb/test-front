import React from 'react';
import formatCurrency from '../../helpers/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { Container } from './styles';

export default function SumInfo() {
  const { cartItems, sumInfo } = useCart();

  return (
    <Container>
      {sumInfo && cartItems?.length > 0 ? (
        <>
          <li>
            Produtos <span>{formatCurrency(sumInfo.subtotal)}</span>
          </li>
          <li>
            Frete <span>{formatCurrency(sumInfo.freight)}</span>
          </li>
          <li className="discount">
            Desconto <span>-{formatCurrency(sumInfo.discount)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(sumInfo.total)}</span>
          </li>
        </>
      ) : (
        <div>Não há itens no carrinho </div>
      )}
    </Container>
  );
}
