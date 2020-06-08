import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, State } from '../store';
import { useEffect } from 'react';

const useCart = () => {
  const dispatch = useDispatch<Dispatch>();
  const { data, isLoading } = useSelector((state: State) => state.cart);

  useEffect(() => {
    dispatch.cart.getCart();
  }, [data, dispatch]);

  return {
    data,
    isLoading,
  };
};

export default useCart;
