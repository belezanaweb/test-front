import CreditCard from '../../types/CreditCard';
import delay from '../../utils/delay';

import { Dispatch } from '..';

interface CreditCardState {
  data: Partial<CreditCard> | null;
  isLoading: boolean;
}

const initialState: CreditCardState = {
  data: null,
  isLoading: false,
};

const creditCard = {
  state: initialState,
  reducers: {
    setData(state: CreditCardState, data: Partial<CreditCard>) {
      return { ...state, data };
    },
    setIsLoading(state: CreditCardState, isLoading: boolean) {
      return { ...state, isLoading };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async save({ expiringDate, number, name }: Partial<CreditCard>) {
      dispatch.creditCard.setIsLoading(true);

      // Fake prepare and save data of a credit card.

      const response = await (async () => {
        await delay(300);
        return {
          id: 'one',
        };
      })();

      dispatch.creditCard.setData(Object.assign(
        {
          expiringDate,
          name: name?.toUpperCase(),
          number: number?.split('.')[3],
        },
        response,
      ));
      dispatch.creditCard.setIsLoading(false);
    }
  }),
};

export default creditCard;
