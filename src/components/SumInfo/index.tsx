import React from 'react';
import formatCurrency from '../../helpers/formatCurrency';
import { Cart } from '../../interfaces/Cart';
import { Container } from './styles';

interface SumInfoProps {
  cart: Cart;
}

export default function SumInfo({ cart }: SumInfoProps) {
  const paymentInfo = {
    subtotal: cart.subTotal || 0,
    freight: cart.shippingTotal || 0,
    discount: cart.discount || 0,
    total: cart.subTotal + cart.shippingTotal - cart.discount || 0
  };

  return (
    paymentInfo && (
      <Container>
        <li>
          Produtos <span>{formatCurrency(paymentInfo.subtotal)}</span>
        </li>
        <li>
          Frete <span>{formatCurrency(paymentInfo.freight)}</span>
        </li>
        <li className="discount">
          Desconto <span>-{formatCurrency(paymentInfo.discount)}</span>
        </li>
        <li className="total">
          Total <span>{formatCurrency(paymentInfo.total)}</span>
        </li>
      </Container>
    )
  );
}
