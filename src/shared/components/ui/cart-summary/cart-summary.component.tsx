import * as React from 'react';

import { ICartSummaryProps } from './cart-summary.interface';
import * as Styled from './cart-summary.styled';

export const CartSummary: React.FC<ICartSummaryProps> = ({ subTotal, shippingTotal, discount, total }) => (
  <Styled.CartSummary>
    <Styled.Label>Produtos</Styled.Label>
    <Styled.Value>R$ {subTotal}</Styled.Value>
    <Styled.Label>Frete</Styled.Label>
    <Styled.Value>R$ {shippingTotal}</Styled.Value>
    <Styled.DiscountLabel>Desconto</Styled.DiscountLabel>
    <Styled.DiscountValue>- R$ {discount}</Styled.DiscountValue>
    <Styled.TotalLabel>Total</Styled.TotalLabel>
    <Styled.TotalValue>R$ {total}</Styled.TotalValue>
  </Styled.CartSummary>
);
