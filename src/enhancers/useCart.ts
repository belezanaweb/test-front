import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, State } from '../store';
import { useEffect } from 'react';

const useCosts = () => {
  const dispatch = useDispatch<Dispatch>();
  const { data, isLoading } = useSelector((state: State) => state.cart);

  useEffect(() => {
    dispatch && dispatch.cart.getCart();
  }, [dispatch]);

  return {
    data,
    isLoading,
  };
};

export default useCosts;
