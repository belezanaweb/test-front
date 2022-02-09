import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { cartRequest, cartSuccess } from '../../store/modules/cart/actions';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container } from './styles';
import { getFromLocalStorage } from '../../helpers/local-storage';

export default function Cart() {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart);
  const [cartItems, setCartItems] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const cartFromStorage = getFromLocalStorage('@BelezaNaWeb: cart');

    if (cartFromStorage) {
      setCartItems(cartFromStorage);
      dispatch(cartSuccess(cartFromStorage));
    } else {
      dispatch(cartRequest());
    }
  }, []);

  useEffect(() => {
    if (cart?.items?.length > 0) setCartItems(cart);
  }, [cart?.items]);

  return (
    <Container>
      {cartItems && <ItemsList cart={cartItems} />}
      <SumInfo />
      <Button title="Seguir para o pagamento" />
    </Container>
  );
}
