import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import { Cart, CartItem } from '../../interfaces/Cart';
import { cartRequest } from '../../store/modules/cart/actions';

export default function Invoices() {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartRequest());
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem'
        }}
      >
        {cart?.items?.map((item: CartItem) => (
          <Link
            style={{ display: 'block', margin: '1rem 0' }}
            to={`/cart/${item.product.sku}`}
            key={item.product.sku}
          >
            {item.product.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
