import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { cartRequest } from '../../store/modules/cart/actions';

import Button from '../../components/Button';
import SumInfo from '../../components/SumInfo';
import ItemsList from '../../components/ItemsList';

import { Container } from './styles';

export default function Cart() {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartRequest());
  }, []);

  return (
    <Container>
      {cart && <ItemsList cart={cart} />}
      <SumInfo />
      <Button title="Seguir para o pagamento" />
    </Container>
  );
}
