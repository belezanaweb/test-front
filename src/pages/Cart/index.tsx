import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { CartItem } from '../../interfaces/Cart';
import { cartRequest } from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Invoices() {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartRequest());
  }, []);

  return (
    <div>
      <ProductList>
        {cart?.items?.map((item: CartItem) => (
          <Link to={`/cart/${item.product.sku}`} key={item.product.sku}>
            <img src={item.product.imageObjects[0].thumbnail} />
            {item.product.name}
          </Link>
        ))}
      </ProductList>
      <Outlet />
    </div>
  );
}
