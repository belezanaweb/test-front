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
      <Link to="/">
        <h1>Beleza na Web</h1>
      </Link>
      <CartInfo to="/cart">
        <p>Meu carrinho</p>
        <div>
          <span data-testid="cart-size">{cartLength}</span>
          <MdShoppingBasket size={36} color="#FF6C00" />
        </div>
      </CartInfo>
    </Header>
  );
}
