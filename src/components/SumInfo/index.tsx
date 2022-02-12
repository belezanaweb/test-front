import React from 'react';
import formatCurrency from '../../helpers/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { Container } from './styles';

export default function SumInfo() {
  const { cartItems, sumInfo } = useCart();

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <>
          <li>
            Produtos <span>{formatCurrency(sumInfo.itemsSubTotal)}</span>
          </li>
          {/* <li>
            Frete <span>{formatCurrency(sumInfo.freight)}</span>
          </li>*/}
          <li className="discount">
            Desconto <span>-{formatCurrency(sumInfo.itemsDiscount)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(sumInfo.itemsTotal)}</span>
          </li>
        </>
      ) : (
        <div>Não há itens no carrinho </div>
      )}
    </Container>
  );
}
