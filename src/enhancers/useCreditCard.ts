import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, State } from '../store';

const useCreditCard = () => {
  const dispatch = useDispatch<Dispatch>();
  const { data, isLoading } = useSelector((state: State) => state.creditCard);

  const { save } = dispatch.creditCard;

  return {
    data,
    save,
    isLoading,
  };
};

export default useCreditCard;
