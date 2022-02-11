import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Header, CartInfo } from './styles';

import { useCart } from '../../../../hooks/useCart';

export default function Home() {
  const { cartItems } = useCart();
  const cartLength = cartItems?.length || 0;

  return (
    <Header>
      <Link to="/">Beleza na Web</Link>
      <CartInfo to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartLength === 1 ? `${cartLength} item` : `${cartLength} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </CartInfo>
    </Header>
  );
}
