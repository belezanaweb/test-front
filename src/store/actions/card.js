import { ACTIONS } from '../constants/actions';

const cardActions = {
  update: (card) => ({
    payload: card,
    type: ACTIONS.CARD_UPDATE
  })
};

export { cardActions };
