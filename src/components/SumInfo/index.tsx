import React from 'react';
import formatCurrency from '../../helpers/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { Cart } from '../../interfaces/Cart';
import { Container } from './styles';

interface SumInfoProps {
  sumInfo: {
    id: string;
    discount: number;
    shippingTotal: number;
    subTotal: number;
    total: number;
  };
}

export default function SumInfo({ sumInfo }: SumInfoProps) {
  const { cartItems } = useCart();

  const paymentInfo = {
    subtotal: sumInfo.subTotal || 0,
    freight: sumInfo.shippingTotal || 0,
    discount: sumInfo.discount || 0,
    total: sumInfo.subTotal + sumInfo.shippingTotal - sumInfo.discount || 0
  };

  return (
    <Container>
      {paymentInfo && cartItems?.length > 0 ? (
        <>
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
        </>
      ) : (
        <div>Não há itens no carrinho </div>
      )}
    </Container>
  );
}
